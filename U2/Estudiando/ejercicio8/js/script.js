/**
 * 8. Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
*   fondo a un color aleatorio.
 */
const $d = document
const color = (e) => {
    // hay tres formas de hacerlo
    //e.target.style = `background-color:${colorAleatorio()}`
    //e.target.style.setProperty("background-color", colorAleatorio());
    e.target.style.backgroundColor= colorAleatorio()
}
$d.addEventListener('dblclick',color)

const colorAleatorio = () => {
    return `rgb(${parseInt(Math.random() *255 )},${parseInt(Math.random() *255 )},${parseInt(Math.random() *255 )})`
}