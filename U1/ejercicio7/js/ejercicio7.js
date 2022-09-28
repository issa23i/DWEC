// 7. Mostrar todos los números divisores de un número introducido por el usuario.
'use strict';
let num, aux
num = parseInt(prompt("Introduzca un número"))

num<0 ? aux = -num : aux = num // aux = num, si es negativo se pasa a positivo

while( aux > 0 ){
    if (num%aux===0){
        console.log(aux);
    }
    aux--
}