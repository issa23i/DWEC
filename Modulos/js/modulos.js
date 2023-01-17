import saludar, {PI, usuario, Saludar} from './constantes.js'
import {aritmetica as ari} from './aritmetica.js' // se pueden crear alias (as)

console.log(PI, usuario);
console.log(ari.sumar(3,4));
console.log(ari.restar(3,7));
saludar()
new Saludar()