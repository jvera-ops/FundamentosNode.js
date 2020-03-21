const opciones = {

    base: {
        demmand: true,
        alias: 'b',
        default: 989987
    },
    limite: {
        alias: 'l',
        default: 50
    }
}

const argv = require('yargs')
    .command('listar', 'Hasta el momento no hace nichimba',opciones)
    .command('crear', 'vamos bien!',opciones)
    .argv;


module.exports = {
    argv
}