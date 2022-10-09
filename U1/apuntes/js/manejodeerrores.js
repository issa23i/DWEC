'use strict';
try {
    let number = 'y'
    if (isNaN(number)) {
        throw new Error("El cardcter introducido no es un Numero");
        }
    console.log(`${number} Es un número, su raíz cuadrada es : ${number * number}`);
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error}`);
    } finally {
        console.log(`Este línea se ejecutará siempre`);
    }

