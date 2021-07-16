const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Representa el número hasta donde se va a realizar la multiplicación'
  })
  .check((argv, options) => {
    if( isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    if( isNaN(argv.h)) {
      throw 'La variable "hasta" tiene que ser un número';
    }
    if(!(typeof argv.l === "boolean")) {
      throw 'El listar tiene que ser un boolean';
    }
    return true;
  })
  .argv;

module.exports = argv;