// Crea una altra que imprimeixi per pantalla el que llegeixi d'un fitxer.

const fs = require("fs");           // File System
const util = require('util');
const nuevoReadFile = util.promisify(fs.readFile); // version del readFile que devuelve promise

//  usando toString  
nuevoReadFile('./n1-ex3-input.txt')
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err));

// usando encoding
nuevoReadFile('./n1-ex3-input.txt', { encoding: "utf8" })
  .then(data => console.log(data))
  .catch(err => console.log(err));


