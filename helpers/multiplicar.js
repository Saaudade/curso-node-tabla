const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, listar, hasta) => {
  try {
  
    let salida  = '';
    let consola = '';
    
    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
      consola += `${colors.green(base)} ${colors.underline.red('x')} ${colors.yellow(index)} ${colors.cyan('=')} ${colors.blue(base * index)}\n`;
    }
    
    if(listar) {
      console.log('================================================'.black);
      console.log(`                   Tabla del:`.gray, colors.red(base));
      console.log('================================================'.black);
      console.log(consola);
    }
  
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivoTabla
}