class Marcador {
    constructor() {
        this._puntuaciones = [];
        //                   ********* 
        // se usa el pattern Singleton para no permitir crear más de un marcador
        //                   *********
        if (this.constructor._instance)
            return this.constructor._instance;
        this.constructor._instance = this;
    }
    
    nuevoJugador() {
        this._puntuaciones.push(0);
    }
    actualizaMarcador(puntos, jugador) {
        this._puntuaciones[jugador] += puntos;
    }
    ganador() {
        // devuelve array con el ganador o los ganadores en caso de empates
        let max = this._puntuaciones[0]; // al empezar, el máximo es el primero
        let ganadores = [0];

        // se empieza desde 1, porque de inicio el ganador es el de la posición 0, hasta encontrar otra puntuación >
        for (let i = 1; i < this._puntuaciones.length; i++) {
            if (this._puntuaciones[i] == max) {
                ganadores.push(i);
            }
            else if (this._puntuaciones[i] > max) {
                max = this._puntuaciones[i];
                ganadores = [i]
            }
        }
        return ganadores;
    }
    getPuntos(i) {
        return this._puntuaciones[i]
    }
}

class Jugador {
    static id = -1;         // Identificador de jugador empezará por 0        
    constructor(nombre) {
        this._id = ++Jugador.id;
        this._nombre = nombre;
    }
    get getId() {
        return this._id;
    }
    get getNombre() {
        return this._nombre;
    }
}

module.exports.Marcador = Marcador;
module.exports.Jugador = Jugador;

