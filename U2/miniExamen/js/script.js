
const $d = document
const $body = $d.body
const $btnCrear = $d.querySelector('[class="crearBotones"]')
const $btnReiniciar = $d.querySelector('.reiniciar')
const $input = $d.querySelector('input')


const randomRGB = () => {
    let r,g,b
    r = parseInt(Math.random() * 255)
    g = parseInt(Math.random() * 255)
    b = parseInt(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

const colores = (e) => {
    let color = e.target.textContent
    $body.style = `background-color: ${color}`
}

const crearBotones = () => {
    let n = $input.value
    for (let i = 0; i < n; i++) {
        let colorRandom = randomRGB()
        let $btn = $d.createElement('button')
        $btn.setAttribute("class","colores")
        $btn.textContent = colorRandom
        $btn.style = `background-color: ${colorRandom}`
        $btnCrear.insertAdjacentElement('afterend',$btn)
        $btn.addEventListener('click',colores)
    }
}

const borrar = () => {
    let botonesCreados = $d.querySelectorAll('.colores')
    botonesCreados.forEach(e => {
        e.remove()
    });
    $input.value = ''
    $body.removeAttribute("style")
}


$btnReiniciar.addEventListener('click', borrar)

$btnCrear.addEventListener('click', crearBotones)

