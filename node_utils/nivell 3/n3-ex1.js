// Crea una funció que llisti per consola el contingut del directori d'usuari. Utilitzi node Child Processes.      

const util = require('util');
const cp = require('child_process');
const os = require('os');

const exec = util.promisify(cp.exec);
const dirUsuario = os.homedir();   // directorio del usuario
let directorio = '';

// en qué SO se está ejecutando?
switch (process.platform) {
case 'win32':
    directorio = `dir  ${dirUsuario}`; 
    break;
case 'aix','linux','darwin','freebsd','openbsd','sunos':
    directorio = `ls  ${dirUsuario}`;
    break;
};

async function contingutDir() {
  try {
    const { stdout, stderr } = await exec(directorio);
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  } catch (err) {
    console.error(err); 
  }
};
contingutDir();

