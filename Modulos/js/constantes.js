export const PI = Math.PI;
export const usuario = 'pepe'

// para hacer una exportación por defecto de una constante
// hay que declararla primero y luego exportarla
// igual pasa con las funciones declaradas (arrow functions)
// const password = 'pepito'
// export default password


// sólo se puede enviar default una vez 
// las funciones expresadas sí pueden exportarse, no las declaradas
export default function saludar () {
    console.log("Hola, navegadores ES6 ");
}

// también se pueden exportar clases
export class Saludar {
    constructor(){
        console.log("Hola, caracola");
    }
}