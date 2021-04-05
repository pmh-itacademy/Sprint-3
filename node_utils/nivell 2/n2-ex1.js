// Crea una funció que comprimeixi el file del nivell 1

let zlib = require('zlib'); // Módulo para compresión
let fs = require('fs');     // File System

let gzip = zlib.createGzip();

let read = fs.createReadStream('./n2-ex1.txt');         // lectura fichero con stream
let write = fs.createWriteStream('./n2-ex1.txt.gz');    // graba fichero con stream

//El fichero leido en stream, se pasa al zip y se pasa a grabar el fichero
read.pipe(gzip).pipe(write);	
console.log("Fichero comprimido");		


