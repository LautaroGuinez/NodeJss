const process = require("process");
const fs = require("fs");

module.exports = {
  pwd: function () {
    process.stdout.write(process.cwd());
    process.stdout.write("prompt > ");
  },
  date: function () {
    process.stdout.write(Date());
    process.stdout.write("prompt > ");
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (args) {
    process.stdout.write(args.join(" ") + "\n");
    process.stdout.write("prompt > ");
  },

  cat: function (args) {
    fs.readFile(`./${args}`, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      console.log(data);
      process.stdout.write("prompt > ");
    });
  },
  head: function (args) {
    fs.readFile(`./${args}`, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      let lineas = data.split("\n");
      for (let i = 0; i < 10 && i < lineas.length; i++) {
        process.stdout.write(lineas[i] + "\n");
      }
      process.stdout.write("prompt > ");
    });
  },
  tail: function (args) {
    fs.readFile(`./${args}`, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      let lineas = data.split("\n");
      
      for (let i = lineas.length-10;  i < lineas.length; i++) {
        process.stdout.write(lineas[i] + "\n");
      }
      process.stdout.write("prompt > ");
    });
  },
  wc: function (args) {
    fs.readFile(`./${args}`, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      let lineas = data.split("\n");
      
        process.stdout.write(lineas.length + "\n");
      
      process.stdout.write("prompt > ");
    });
  },


  uniq: function (args) {
    fs.readFile(`./${args}`, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      let lineas = data.split("\n");
      
      for (let i = 0;  i < lineas.length; i++) {
        if(lineas[i]=== lineas[i+1]){
          lineas.shift()
        }else{
        process.stdout.write(lineas[i] + "\n")};
      }
      process.stdout.write("prompt > ");
    });
  },



};
