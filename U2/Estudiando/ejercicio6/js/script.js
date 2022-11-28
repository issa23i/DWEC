/**
 * 6. Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia.
 */

const $d = document
const $btnComenzar = $d.querySelector('button:first-of-type')
const $btnParar = $d.querySelector('button:last-of-type')

let interval
const comenzar = () => {
    interval = setInterval(() => {
        alert('Hola')
    }, 5000);
}
const parar = () => {
    if(interval !== null ){
        clearInterval(interval)
    }
}

$btnComenzar.addEventListener('click',comenzar)
$btnParar.addEventListener('click',parar)

