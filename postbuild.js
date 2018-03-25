const critical = require('critical');
const cheerio = require('cheerio')
const { readFile, writeFile } = require('fs');
const { resolve } = require('path')
const { promisify } = require('util');
const readFilePromisified = promisify(readFile);
const writeFilePromisified = promisify(writeFile);

const baseHTML = 'index.html'
const baseHTMLInline = 'index.inline.html'
const indexHTML = resolve('build', baseHTML)
const indexHTMLInline = resolve('build', baseHTMLInline)

const start = async () => {
  try {
    // await touch(filename)
    const indexHTMLRaw = await readFilePromisified(indexHTML)
    const $ = cheerio.load(indexHTMLRaw)
    const data = await critical.generate({
      minify: true,
      base: 'build',
      src: 'index.html',
      dimensions: [{
        height: 740,
        width: 420
      }, {
        height: 800,
        width: 1280
      }]
    })
    $('#inline_styles').html(data)
    const newHtml = $.root().html();
    writeFilePromisified(indexHTML, newHtml)
  } catch (e) {
    console.log('////////////////////////////')
    console.error(e)
  }
}

start()
