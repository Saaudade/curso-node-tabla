const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');

console.clear();

// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

// const numero = 1;

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo), 'creado'.trap))
  .catch(err => console.log(err));


