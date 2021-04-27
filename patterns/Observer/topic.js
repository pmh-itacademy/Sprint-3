class Topic {
    constructor(topic) {
        this.topic = topic;
        this.usuarios = [];
    }

    suscribe(usuario) {
        this.usuarios.push(usuario);
    }

    dessuscribe(usuario) {
        this.usuarios = this.usuarios.filter(user => user !== usuario);
    }

    creaMensaje(mensaje) {
        console.log(`Mensaje[${this.topic}]: ${mensaje}`)
        this.usuarios.forEach((elemento) => ee.emit('mensaje', `Mensaje para[${elemento.nombre}]: "${this.topic} / ${mensaje}"`))
    };
}

module.exports = Topic;