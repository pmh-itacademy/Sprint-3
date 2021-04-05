// Crea una funció que, en executar-la, escrigui el seu nom en un fitxer.

const fs = require('fs');  // File System 
const util = require('util')

const fs_writeFile = util.promisify(fs.writeFile) // version del writeFile que devuelve promise

function nombreFuncion() {
    let funcion = arguments.callee.toString();            // qué función se está ejecutando?
    funcion = funcion.substr('function '.length);         // quitamos texto 'function '
    funcion = funcion.substr(0, funcion.indexOf('('));    // quitamos texto a partir de '('

    fs_writeFile('./n1-ex2-output.txt', funcion)          // grabamos nombre de la función en el fichero
        .then(() => console.log('fichero grabado')) 
        .catch(err => console.log(err));
};

nombreFuncion();

