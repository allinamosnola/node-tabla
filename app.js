
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors')
const argv = require('./config/yargs')

console.clear();
// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

// const [,,arg3 = 'base=5' ] = process.argv
// const [,base = 5]  = arg3.split('=')
// console.log(base)
// const base = 5;

crearArchivo(argv.base, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));
