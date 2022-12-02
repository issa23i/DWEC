
/// VALIDAR FORMULARIO
const form = document.querySelector('form')

const validar = (e) => {
    let ok = true
    if(!validarUsuario()) ok = false
    if(!validarColores()) ok = false
    if(!validarMensaje()) ok = false
    if(!ok){
        e.preventDefault()
        return false
    }
    return true
}

form.addEventListener('submit',validar)

// VALIDACIONES

const validarUsuario = () => {
    let usuario = document.querySelector('[name="usuario"]')
    let regex = new RegExp(/^\w{1,5}$/)
    let valido = regex.test(usuario.value)
    if (!valido) error(usuario, 'El usuario no puede estar vacío ni tener más de cinco caracteres')
    return valido
}

const validarColores = () => {
    let colores = document.querySelectorAll('[name="color_preferido"]')
    let valido = (Array.from(colores).filter(c => c.checked).length)>1
    if(!valido) error(document.querySelector('.divColores'),'Debe elegir al menos dos colores')
}

const validarMensaje = () => {
    let mensaje = document.querySelector('[name="mensaje"]')
    let regex = new RegExp(/^[^¡,¿]+$/)
    let valido = regex.test(mensaje.value)
    if(!valido) error(mensaje, 'El mensaje no puede estar vacío, ni contener los caracteres ¡,¿')
}

const error = (elemento, mensaje) => {
    let p = document.createElement('p')
    p.textContent = mensaje
    p.setAttribute('class','red')
    elemento.insertAdjacentElement('afterend',p)
    setTimeout(() => {
        p.remove()
    }, 3000);
}

// COLORES

const inputCheckbox = document.querySelector('[name="colores"]')

const colorFondo = (color) => {
    document.body.style = `background-color: ${color}`
}

const color = () => {
    if(inputCheckbox.checked){
        crearSelect()
    } else {
        borrarSelect()
        colorFondo(crearColor())
    }
    
}

const crearColor = () => {
    return `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
}

inputCheckbox.addEventListener('click',color)


const crearSelect = () => {
    let divColores = document.querySelector('.colores')

    let select = document.createElement('select')
    divColores.insertAdjacentElement('beforeend',select)

    let optionVacia = document.createElement('option')
    optionVacia.value = ''
    optionVacia.text = 'Selecciona color'
    select.insertAdjacentElement('beforeend',optionVacia)
    for (let i = 1; i < 10; i++) {
        let color = crearColor()
        let option = document.createElement('option')
        option.value = `${color}`
        option.text = `Color : ${color}`
        option.style = `background-color: ${color}`
        select.insertAdjacentElement('beforeend',option)
        //option.addEventListener('select',colorFondo(color))
    }
}

const borrarSelect = () => {
    let select = document.querySelector('select')
    select.remove()
}

