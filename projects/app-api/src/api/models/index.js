const fs = require('fs');

fs.readdirSync(__dirname).forEach(file => {
  const fileName = file.replace('.js', '');
  if (fileName === 'index' || fileName === 'postgres') return;
  module.exports[fileName] = require(`./${fileName}`); // eslint-disable-line global-require, import/no-dynamic-require
});
