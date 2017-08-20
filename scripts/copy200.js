var fs = require('fs');
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

fs.createReadStream(resolve('build/index.html'),{encoding:'utf8'})
.pipe(fs.createWriteStream(resolve('build/200.html'),{defaultEncoding: 'utf8',}));

