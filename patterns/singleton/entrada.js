// función entrada de datos por pantalla

// module.exports.entrada = function (dato) {
function entrada(dato) {
    const readline = require('readline-sync');
    switch (dato) {
        case 'opcion':
            return parseInt(readline.question(`Introduzca opcion: `));
        case 'nombre':
            return readline.question("Introduzca nombre del jugador: ");
        case 'puntos':
            return readline.question("Introduzca puntos a sumar o restar: ");
        case 'id':
            return readline.question("Introduzca id del jugador: ");
    }
}

function menu () {

    console.log('____________________________________________________');
    console.log('     1. Añadir jugador');
    console.log('     2. Puntuar jugador');
    console.log('     3. Mostrar marcadores');
    console.log('     4. Mostrar ganador');
    console.log('     5. Crear otro marcador (prueba Singleton)');
    console.log('     6. Acabar el juego');
}

module.exports.entrada = entrada;
module.exports.menu    = menu;
