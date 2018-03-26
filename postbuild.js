const _ = require('lodash');
const critical = require('critical');
const csstree = require('css-tree');
const cheerio = require('cheerio');
const { readFile, writeFile } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const readFilePromisified = promisify(readFile);
const writeFilePromisified = promisify(writeFile);
const glob = require('glob');

const baseHTML = 'index.html';
const indexHTML = resolve('build', baseHTML);
const cssFile = resolve('build', './');

const removeItemsAlreadyInCriticalArray = (cssArray, criticalCssArray) => {
  const newCssArray = Object.assign({}, cssArray);
  newCssArray.children = cssArray.children.filter(item => {
    let isInArray = false;
    for (let i = 0; i < criticalCssArray.children.length; i++) {
      if (_.isEqual(item, criticalCssArray.children[i])) {
        isInArray = true;
        break;
      }
    }
    return !isInArray;
  });
  return newCssArray;
};

const start = async () => {
  try {
    /// Get all compiled CSS files and parse them to an AST
    const allCSS = await getAllCssFilesData();
    /// Transform AST to array
    const allCSSObject = allCSS.map(css => ({
      ...css,
      data: csstree.toPlainObject(csstree.parse(css.data))
    }));

    /// Get critical CSS parse it to an AST
    const criticalCSS = await getCriticalCSS();
    /// Transform AST to array
    const criticalObject = csstree.toPlainObject(csstree.parse(criticalCSS));

    // Go through all compiled css, remove the criticalCSS
    const cssObjectsWithoutCriticalCSS = allCSSObject.map(cssObject => ({
      ...cssObject,
      data: removeItemsAlreadyInCriticalArray(cssObject.data, criticalObject)
    }));

    /// Transform arrays back to AST
    const cssASTsWithoutCriticalCSS = cssObjectsWithoutCriticalCSS.map((cssObject) => ({
      ...cssObject,
      data: csstree.fromPlainObject(cssObject.data)
    }))

    /// Generate CSS from AST
    const cssAndMapsWithoutCriticalCSS = cssASTsWithoutCriticalCSS.map(cssAST => ({
      ...cssAST,
      data: csstree.generate(cssAST.data)
    }))

    // Save Files to Disk
    await Promise.all(cssAndMapsWithoutCriticalCSS.map(files => {
      return writeFilePromisified(files.path, files.data)
    }))

    // Inject critical CSS to string
    const indexHTMLRaw = await readFilePromisified(indexHTML);
    const $ = cheerio.load(indexHTMLRaw);
    $('#inline_styles').html(criticalCSS);
    const newHtml = $.root().html();
    await writeFilePromisified(indexHTML, newHtml);
  } catch (e) {
    console.error(e);
  }
};

const getCssFiles = () =>
  new Promise((resolve, reject) => {
    // const indexHTMLRaw = await readFilePromisified(indexHTML)

    glob('./build/**/*.css', {}, (err, files) => {
      if (err) {
        reject(err);
      } else if (files.length === 0) {
        reject(new Error('No files found'));
      } else {
        resolve(files);
      }
    });
  });

const getAllCssFilesData = async () => {
  try {
    const cssFiles = await getCssFiles();
    const allFilesContent = await Promise.all(
      cssFiles.map(async cssFile => {
        const bufferData = await readFilePromisified(cssFile);
        return {
          path: cssFile,
          data: bufferData.toString()
        };
      })
    );
    return allFilesContent;
  } catch (e) {
    console.error(e);
  }
};

const getCriticalCSS = async () => {
  const criticalCSS = await critical.generate({
    minify: true,
    base: 'build',
    src: 'index.html',
    dimensions: [
      {
        height: 740,
        width: 420
      },
      {
        height: 800,
        width: 1280
      }
    ]
  });
  return criticalCSS;
};
start();
