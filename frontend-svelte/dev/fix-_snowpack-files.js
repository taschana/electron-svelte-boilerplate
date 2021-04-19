const path = require('path');
const fs = require('fs');

const outputDir = "../dist/frontend/_snowpack/pkg"
const _snowpackFolder = path.normalize(path.resolve(path.join(".", outputDir)));

fs.readdir(_snowpackFolder, (err, files) => {
  files = files.map(f => path.join(_snowpackFolder, f));
  console.log("checking and fixing " + files.length + " files --- asynchronously")
  files.forEach(file => {
    fs.readFile(file, 'utf8', function (err, data) {
      console.log("reading file: ", err ? err : "no error", file);
        var result = data.replace(/\/_snowpack\/pkg/g, '.');
        fs.writeFile(file, result, 'utf8', function (err) {
            console.log("writing fixed file: ", err ? err : "no error", file);
        });
    });
  });
});