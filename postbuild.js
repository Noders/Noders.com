const critical = require('critical');
const { open, close } = require('fs');
const { resolve } = require('path')
const { promisify } = require('util');
const openPromisified = promisify(open);
const closePromisified = promisify(close);

const filename = 'critical.css'
const touch = filename => {
  const route = resolve('build', filename)
  console.log(route)
  return openPromisified(route, 'w').then(closePromisified);
}

const start = async () => {
  try {
    await touch(filename)
    await critical.generate({
      minify: true,
      base: 'build',
      src: 'index.html',
      dest: filename,
      dimensions: [{
        height: 740,
        width: 420
      }, {
        height: 800,
        width: 1280
      }]
    })
  } catch (e) {
    console.log('////////////////////////////')
    console.error(e)
  }
}

start()
