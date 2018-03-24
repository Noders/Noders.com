const path = require('path');
const criticalcss = require('criticalcss');
const cssPath = path.resolve('build', 'style.9b509.css');
const htmlPath = path.resolve('build', 'index.html');

criticalcss.getRules(cssPath, (err, output) => {
  console.log('finish getRules');
  if (err) {
    throw new Error(err);
  } else {
    criticalcss.findCritical(
      htmlPath,
      { rules: JSON.parse(output) },
      (err, output) => {
        console.log('finish findCritical');
        if (err) {
          throw new Error(err);
        } else {
          console.log(output);
        }
      }
    );
  }
});
