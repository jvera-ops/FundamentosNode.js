//requireds
const fs = require('fs');

let data = '';
var numeros = new Array(1,2,3,4,5,6,7,8,9,10);


let listarTabla = (base,limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let multiplicarNumerosyCreararchivo = (numero, limite) =>{

    return new Promise((resolve,reject) =>{

        if(!Number(numero))
        {
            reject("El valor ingresado no es un numero");
            return;
        }

        for (let i = 0; i < limite; i++) {
            data += `${limite} * ${numero} = ${numero * limite}\n`;
        }

        fs.writeFile('tablas/ArchivoFileSystem.txt', data, (err) => {
            if (err) reject(err)
            else{
                resolve("tablas/ArchivoFileSystem.txt");
            }
            console.log('Se creó el archivo correctamente');
          });
    });
}

module.exports = 
{
    multiplicarNumerosyCreararchivo,
    listarTabla
}


