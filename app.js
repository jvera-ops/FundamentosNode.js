
const { multiplicarNumerosyCreararchivo, listarTabla } = require('./NegocioCalculos/Multiplicar');
const argv = require('./config/yargs').argv;
let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;

    case 'crear':
        multiplicarNumerosyCreararchivo(argv.base, argv.limite).
            then(archivoCreado => console.log(`El archivo se creó casi que no! ${archivoCreado}`))
            .catch(error => console.log(error));

        console.log('crear');

        break;
    default:
        console.log('no definido');
        break;
}



