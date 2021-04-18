// El codi adjunt llegeix un fitxer situat en un directori 'inbox' i 
// fixa el seu contingut de manera inversa en un altre fitxer en el directori 'outbox'. 
// Reestructuri i simplifiqui el codi existent per a evitar el denominat 'Callback Hell'

const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");

function directorio(error, files) {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => leerFichero(file));
}

function leerFichero(file) {
  readFile(join(inbox, file), "utf8", invierteFichero);
}

function invierteFichero(error, data) {
  if (error) return console.log("Error: File error");
  writeFile(join(outbox, file), reverseText(data), errorEscritura);
}

function errorEscritura(error) {
  if (error) return console.log("Error: File could not be saved!");
  console.log(`${this.file} was successfully saved in the outbox!`);
}

readdir(inbox, directorio);
