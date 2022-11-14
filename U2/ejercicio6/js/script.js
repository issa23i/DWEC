/**
 * 6. Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia.
 */

const $d = document
const $body = $d.body
const $btnStart = $d.createElement('button')
const $btnStop = $d.createElement('button')
$btnStart.textContent = 'Comenzar Saludos'
$btnStop.textContent = 'Parar Saludos'
$body.insertAdjacentElement("afterbegin",$btnStart)

$body.insertAdjacentElement("afterbegin",$btnStop)

let int 


const saludos = () => {
    $btnStart.addEventListener('click',interval)
    $btnStop.addEventListener('click',stopSaludos)
}

const interval = () => {
    int = setInterval(() => {
    alert('Hola')
    }, 2000);
}

const stopSaludos = () => {
    clearInterval(int)
}
