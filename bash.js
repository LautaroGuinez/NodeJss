const process = require("process");
const commands = require("./commands");

//console.log(process)
// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let frase =data.toString().trim().split(" ")
  let cmd = frase[0]// Remueve la nueva línea
  let escribir = frase.splice(1)

  commands[cmd](escribir)

  //process.stdout.write("You typed: " + data.toString().trim());
 // process.stdout.write("\nprompt > ");
});
