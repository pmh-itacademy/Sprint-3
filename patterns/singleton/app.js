// Construeixi una aplicació que creï diversos jugadors. 
// Els jugadors podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador. 
// Podrà fixar en cada jugador punts guanyats o perduts perquè el marcador canviï. 
// La classe Marcador deurà, com a requisit indispensable, implementar un patró Singleton.

let classes = require('./classes');  // importar clases Marcador y Jugador
let msg = require('./entrada');      // importar función entrada de datos por pantalla

let marcador = new classes.Marcador();   
let arrayJugadores = [];
let opcion;

do {
    msg.menu();
    opcion = msg.entrada('opcion');
    switch (opcion) {
        case 1:
            creaJugador();
            break;
        case 2:
            puntuarJugador();
            break;
        case 3:
            mostrarMarcador(marcador);
            break;  
        case 4:
            mostrarGanador();
            break;
        case 5:
            crearMarcador();
            break;
        case 6:
            break;
        default:
            console.log("Opción errónea");
            break;
    }
}
while (opcion != 6)
console.log('Fin del juego');

// -----------------
// F U N C I O N E S 
// -----------------
function creaJugador(){
    let nombre = msg.entrada('nombre');
    arrayJugadores.push(new classes.Jugador(nombre));
    marcador.nuevoJugador();
    console.log(`>>> Añadido el jugador ${nombre} con id ${classes.Jugador.id}`);
}

function puntuarJugador() {
    let puntos = msg.entrada('puntos');
    if ((!puntos.match(/^[1-9]+$/)) && (!puntos.match(/^-[1-9]+$/))) {
        console.log('Los puntos deben ser un número distinto de 0');
    }
    else {
        let id = msg.entrada('id');
        let ultimoJugador = arrayJugadores.length - 1;
        if (!id.match(/^[0-9]+$/) || id < 0 || id > (ultimoJugador)) {
            console.log(`El id de jugador debe estar entre 0 y ${ultimoJugador} `);
        }
        else {
            marcador.actualizaMarcador(parseInt(puntos), parseInt(id));
        }
    }
}

function mostrarGanador() {
    let ganadores = marcador.ganador();
    if (ganadores.length == 1) {
        console.log(`El ganador es: ${arrayJugadores[ganadores[0]].getNombre}`);
    }
    else {
        console.log('Los ganadores son:');
        for (let i = 0; i < ganadores.length; i++) {
            console.log(arrayJugadores[ganadores[i]].getNombre);
        }
    }
}

function mostrarMarcador(esteMarcador) {
    console.log(">>> ---Jugadores---");
    for (let i = 0; i < arrayJugadores.length; i++) {
        console.log(`id: ${arrayJugadores[i].getId}  Nombre: ${arrayJugadores[i].getNombre} Puntos: ${esteMarcador.getPuntos(i)}`);
    }
}

function crearMarcador() {
    console.log("Marcador antes del singleton");
    mostrarMarcador(marcador);
    let marcador2 = new classes.Marcador();    
    console.log("Marcador después del singleton");
    mostrarMarcador(marcador2);
    if (marcador === marcador2){
        console.log("Es el mismo marcador. Singleton funciona!");
    }
    else {
        console.log("Singleton no ha funcionado, tenemos 2 marcadores!!!");
    }
}
