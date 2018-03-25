const critical = require('critical');

const start = async () => {
  try {
    await critical.generate({
      inline: true,
      minify: true,
      base: 'build',
      src: 'index.html',
      dest: 'index.html',
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
