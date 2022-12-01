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

const $d = document
$nombre = $d.querySelector('[name="nombreApellidos"]')
$email = $d.querySelector('.correo')
$fecha = $d.querySelector('.fecha')
$ciudades = $d.querySelector('[name="listaCiudades"]')
$texto = $d.querySelector('.textarea')
$btn = $d.querySelector('.enviar')

$form = $d.querySelector('form')


///// VERIFICAR FORMULARIO //////////////////////
const verificar = (e) => {
    let ok = true
    if (!validarSexo()) ok = false
    if (!validarAficiones()) ok = false
    if (!validarNombre()) ok = false
    if (!validarCiudad()) ok = false
    if (!validarEmail()) ok = false
    if (!validarFecha()) ok = false
    if (!validarMensaje()) ok = false
    if(!ok){
        e.preventDefault()
        error(e,'Formulario no enviado. Verifique todos los campos')
        return false
    }
    return true
}

////// VALIDACIONES ////////////////////////////
// No vacío ni números
const validarNombre = () => {
    let nombre = document.querySelector('[name="nombreApellidos"]')
    let str = $d.querySelector('.nombreApellidos').value
    let valido = new RegExp(/([^\d])+/).test(str)
    if(!valido) error(nombre,'Nombre no puede estar vacío ni contener números')
    return valido
}

// año anterior a 2010
const validarFecha = () => {
    let inputFecha = document.querySelector('[name="fecha"]')
    let anyo = 2010
    let fecha = new Date(inputFecha.value)
    
    let y = fecha.getFullYear()
    let valido = y<anyo
    if(!valido) error(inputFecha,'Fecha no puede ser posterior o igual a 2010 ni estar vacía')
    return valido
}

const validarEmail = () => {
    let email = document.querySelector('[name="correo"]')
    let str = email.value
    let valido = new RegExp(/\w+/).test(str)
    if(!valido) error(email,'Email no puede estar vacío')
    return valido
}

const validarSexo = () => {
    let sexos = $d.querySelectorAll('[name="sexo"]')
    let valido = ((Array.from(sexos).filter(s => s.checked)).length) > 0
    if(!valido) error($d.querySelector('.divRadio'),'Sexo no puede estar vacío')
    return valido
}

const validarAficiones = () => {
    let aficiones = $d.querySelectorAll('[name="aficiones"]')
    let valido = ((Array.from(aficiones).filter(a => a.checked)).length)>0
    if(!valido) error($d.querySelector('.divAficiones'),'Aficiones no puede estar vacío')
    return valido
}

const validarCiudad = () => {
    let ciudad = $d.querySelector('[name="listaCiudades"]')
    let valido = ciudad.value !== ''
    if(!valido) error(document.querySelector('.divCiudades'), 'Ciudad no puede estar vacío')
    return valido
}

const validarMensaje = () => {
    let inputMensaje = document.querySelector('[name="mensaje"]')
    let str = inputMensaje.value
    let valido = new RegExp(/\w+/).test(str)
    if(!valido) error(inputMensaje,'Mensaje no puede estar vacío')
    return valido
}


$form.addEventListener('submit', verificar)
$fecha.addEventListener('blur', validarFecha)
$email.addEventListener('blur', validarEmail)
$nombre.addEventListener('blur', validarNombre)
//$ciudades.addEventListener('blur', validarCiudad)
//$texto.addEventListener('blur',validarMensaje)


///// ERROR ///////////////////////////////////
const error = (elemento, mensaje) => {
    let $p = $d.createElement('p')
    $p.textContent = mensaje
    elemento.insertAdjacentElement('afterend',$p)
    elemento.setAttribute('class','red')
    setTimeout(() => {
        $p.remove()
    }, 5000);
}

