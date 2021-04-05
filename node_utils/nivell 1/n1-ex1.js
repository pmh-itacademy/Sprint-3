//Crea una funció que imprimeixi recursivamente un missatge per consola amb demores d'un segon.

const util = require('util');
const promesaSetTimeout = util.promisify(setTimeout);

let funcionRecursiva = () => {
  promesaSetTimeout(1000)
    .then(() => {
      console.log('mensaje cada segundo');
      funcionRecursiva();
    });
};

funcionRecursiva();

