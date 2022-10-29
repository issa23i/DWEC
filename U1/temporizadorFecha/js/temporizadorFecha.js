// 10. TEMPORIZADOR FECHA
// Realiza un programa que pasados 20 segundos, nos muestre una sola vez la fecha actual del sistema.

let interval = setInterval("fecha()",20000)

const fecha = () => {
    alert((new Date()).toLocaleDateString());
    clearInterval(interval)
}
