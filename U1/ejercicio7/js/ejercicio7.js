// 7. Mostrar todos los números divisores de un número introducido por el usuario.
'use strict';
let n;
 
n = parseInt(prompt("Indica el numero: "));
 
 
for (let i = 2; i < n; i++) {
    if (n%i===0) {
        console.log(i);
    }
 
}
