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
$nombre = $d.querySelector('.nombreApellidos')
$email = $d.querySelector('.correo')
$fecha = $d.querySelector('.fecha')
$sexos = $d.querySelectorAll('[name="sexo"]')
$aficiones = $d.querySelectorAll('.aficiones')
$ciudades = $d.querySelector('#listaCiudades')
$texto = $d.querySelector('.textarea')
$btn = $d.querySelector('.enviar')

$form = $d.querySelector('form')


////// VALIDACIONES ////////////////////////////
// No vacío ni números
const validarNombre = (e) => {
    let str = e.target.value
    let valido = new RegExp(/([^\d])+/).test(str)
    if(!valido) error(e.target,'Nombre no puede estar vacío ni contener números')
    return valido
}

// año anterior a 2010
const validarFecha = (e) => {
    let anyo = 2010
    fecha = new Date(e.target.value)
    
    let y = fecha.getFullYear()
    let valido = y<anyo
    if(!valido) error(e.target,'Fecha no puede ser posterior o igual a 2010 ni estar vacía')
    return valido
}

const validarEmail = (e) => {
    let str = e.target.value
    let valido = new RegExp(/\w+/).test(str)
    if(!valido) error(e.target,'Email no puede estar vacío')
    return valido
}

const validarSexo = (e) => {
    let sexos = $d.querySelectorAll('[name="sexo"]')
    let valido = sexos.entries().length > 0
    if(!valido) error(e.target,'Sexo no puede estar vacío')
    return valido
}

const validarAficiones = (e) => {
    let aficiones = $d.querySelectorAll('[name="aficiones"]')
    let valido = aficiones.values().length > 0
    if(!valido) error(e.target,'Aficiones no puede estar vacío')
    return valido
}

const validarCiudad = (e) => {
    let ciudad = $d.querySelector('#listaCiudades')
    let valido = ciudad.value !== ''
    if(!valido) error(e.target, 'Ciudad no puede estar vacío')
    return valido
}

const validarMensaje = (e) => {
    let str = e.target.value
    let valido = new RegExp(/\w+/).test(str)
    if(!valido) error(e.target,'Mensaje no puede estar vacío')
    return valido
}

$fecha.addEventListener('blur', validarFecha)
//$aficiones.addEventListener('blur', validarAficiones)
//$sexos.addEventListener('blur', validarSexo)
$email.addEventListener('blur', validarEmail)
$nombre.addEventListener('blur', validarNombre)
$ciudades.addEventListener('blur', validarCiudad)
$texto.addEventListener('blur',validarMensaje)

///// ERROR ///////////////////////////////////
const error = (elemento, mensaje) => {
    let $p = $d.createElement('p')
    $p.textContent = mensaje
    elemento.insertAdjacentElement('afterend',$p)
    setTimeout(() => {
        $p.remove()
    }, 5000);
}

