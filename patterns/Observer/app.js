// Creu una Aplicació que creï diferents objectes Usuari. L'aplicació podrà crear diferents topics, 
// i subscriure els usuaris a ells. Quan un Usuari afegeixi un missatge, s'imprimirà per consola des del topic. 
// També ho imprimiran per consola cadascun dels usuaris que estiguin subscrits al topic (rebran el missatge). 
// Creu un topic amb un usuari i un altre amb dos, i mostri la recepció dels missatges pels usuaris. 
// Utilitzi el modulo events.

const EventEmitter = require('events').EventEmitter;
global.ee = new EventEmitter();

const Usuario = require('./usuario');
const Topic = require('./topic');

const topic1 = new Topic("Topic_1");
const topic2 = new Topic("Topic_2");

const usuario1 = new Usuario("Usuario_1");
const usuario2 = new Usuario("Usuario_2");
const usuario3 = new Usuario("Usuario_3");

ee.on('mensaje', (msg) => console.log(msg));

topic1.suscribe(usuario1);
topic2.suscribe(usuario2);
topic2.suscribe(usuario3);

topic1.creaMensaje('Un mensaje creado para topic 1.');
topic2.creaMensaje('Se crea un mensaje para topic 2.');

topic1.dessuscribe(usuario1);
topic2.dessuscribe(usuario2);

topic1.creaMensaje('Otro mensaje para topic 1.');
topic2.creaMensaje('Otro mensaje para topic 2.');

