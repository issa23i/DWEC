/**
 * Utilizando el código HTML y CSS proporcionado por el profesor:
Realiza una web con las siguientes funcionalidades:
1. Las siguientes verificaciones se realizarán al perder el foco del campo del formulario:

b. El campo Fecha de nacimiento debe ser anterior a 2010. [2p]
2. Las siguientes verificaciones se realizarán al enviar el formulario:
a. Todas las anteriores. [1p]
b. Todos los campos deben tener contenido y/o haber seleccionado una opción. [3p]
3. Los mensajes de error de las verificaciones durarán 5 segundos y estarán debajo del
campo en cuestión con un formato proporcionado por una clase CSS (color rojo). [2p]
 */

const nombre = document.querySelector('[name="nombreApellidos"]')
const correo = document.querySelector('[name="correo"]')
const fecha = document.querySelector('[name="fecha"]')
const form = document.querySelector('.formulario')

const validarFormulario = (e) => {
    let ok = true
    if(!validarNombre()) ok = false
    if(!validarCorreo()) ok = false
    if(!validarFecha()) ok = false
    if(!validarSexo()) ok = false
    if(!validarAficiones()) ok = false
    if(!validarCiudad()) ok = false
    if(!validarMensaje()) ok = false
    if(ok===false){
        e.preventDefault()
        return false
    }
    return true
}

const validarNombre = () => {
    let nombreValidar = document.querySelector('[name="nombreApellidos"]')
    let valido = new RegExp(/^[^\d]+$/).test(nombreValidar.value)
    if(!valido) error(nombreValidar,'El nombre no puede contener números ni estar vacío')
    return valido
}

const validarCorreo = () => {
    let correoValidar = document.querySelector('[name="correo"]')
    let valido = new RegExp(/^\w+@\w+\.\w+$/).test(correoValidar.value)
    if(!valido) error(correoValidar, 'El correo no puede estar vacío')
    return valido
}

const validarFecha = () => {
    let fechaValidar = document.querySelector('[name="fecha"]')
    let valido = before2010(fechaValidar.value)
    if(!valido) error(fechaValidar, 'La fecha debe ser anterior a 2010')
    return valido
}

const validarSexo = () => {
    let sexoValidar = document.querySelectorAll('[name="sexo"]')
    let valido = (Array.from(sexoValidar).filter(s => s.checked)).length>0
    if(!valido) error(document.querySelector('.divRadio'),'Debe elegir un sexo')
    return valido
}

const validarAficiones = () => {
    let aficionesValidar = document.querySelectorAll('[name="aficiones"]')
    let valido = (Array.from(aficionesValidar).filter(a => a.checked)).length>0
    if(!valido) error(document.querySelector('.divAficiones'),'Debe seleccionar al menos una afición')
    return valido
}

const validarCiudad = () => {
    let ciudadValidar= document.querySelector('[name="listaCiudades"]')
    let valido = ciudadValidar.value !== ''
    if(!valido) error(document.querySelector('.divCiudades'),'Debe seleccionar una ciudad')
    return valido
}

const validarMensaje = () => {
    let mensajeValidar = document.querySelector('[name="mensaje"]')
    let valido = mensajeValidar.value !== ''
    if(!valido) error(mensajeValidar,'El mensaje no puede estar vacío')
    return valido
}

form.addEventListener('submit',validarFormulario)
nombre.addEventListener('blur',validarNombre)
correo.addEventListener('blur',validarCorreo)
fecha.addEventListener('blur',validarFecha)

const error = (elmto, msj) => {
    let p = document.createElement('p')
    p.textContent = msj
    p.setAttribute('class','red')
    elmto.insertAdjacentElement('afterend',p)
    setTimeout(() => {
        p.remove()
    }, 6000);
}

const before2010 = date => {
    if(date==='') return false
    let fechaValidar = new Date(date)
    let anyo = fechaValidar.getFullYear()
    if (anyo>=2010) return false
    return true
}