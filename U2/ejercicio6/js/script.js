/**
 * 6. Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia.
 */
const $d = document
const $body = $d.body
const $btnComenzar = $d.querySelector("[value='Comenzar Saludos']")
const $btnParar = $d.querySelector("[value='Parar Saludos']")

let interval

const saludos = () => {
    $btnComenzar.addEventListener('click', comenzar)
    $btnParar.addEventListener('click', parar)
}

const comenzar = () => {
    interval = setInterval(() => {
        alert("Hola")
    }, 5000);
}

const parar = () => {
    clearInterval(interval)
}

saludos()
