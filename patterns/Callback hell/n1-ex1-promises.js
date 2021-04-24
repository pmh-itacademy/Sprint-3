/// El codi adjunt llegeix un fitxer situat en un directori 'inbox' i 
// fixa el seu contingut de manera inversa en un altre fitxer en el directori 'outbox'. 
// Reestructuri i simplifiqui el codi existent per a evitar el denominat 'Callback Hell'

// Módulos necesarios
const { promisify } = require('util');
const fs = require('fs');
const { join } = require("path");

// Convertir en promesa las funciones de gestión de los ficheros
const readdirPr = promisify(fs.readdir);
const readFilePr = promisify(fs.readFile);
const writeFilePr = promisify(fs.writeFile);

// Generamos los path de entrada y salida
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

// Función para escribir al revés el texto 
const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");

readdirPr(inbox)
  .then(files =>
    files.forEach(file => {
      readFilePr(join(inbox, file), "utf8")
        .catch(() => console.log("Error: File error"))
        .then(data => writeFilePr(join(outbox, file), reverseText(data)))
        .then(() => console.log(`${file} was successfully saved in the outbox!`))
        .catch(() => console.log("Error: File could not be saved!"))
    }))
  .catch(() => console.log("Error: Folder inaccessible"))
