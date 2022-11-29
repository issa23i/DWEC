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
$fecha = $d.querySelector('.fecha')
$form = $d.querySelector('form')


////// VALIDACIONES ////////////////////////////
// No vacío ni números
const validarNombre = () => {
    let str = $d.querySelector('.nombreApellidos')
    let valido = new RegExp(/^[A-Za-záéíóú]+(\s{0,1}[A-Za-záéíóú]+)*$/).test(str)
    if(!valido) error($d.querySelector('.nombreApellidos'),'Nombre no puede estar vacío ni contener números')
    return valido
}

// año anterior a 2010
const validarFecha = () => {
    let anyo = 2010
    fecha = new Date($d.querySelector('.fecha'))
    
    let y = fecha.getFullYear()
    let valido = y<anyo
    if(!valido) error($d.querySelector('.fecha'),'Fecha no puede ser posterior o igual a 2010 ni estar vacía')
    return valido
}

const validarEmail = () => {
    let str = $d.querySelector('.correo').value
    let valido = new RegExp(/\w+/).test(str)
    if(!valido) error($d.querySelector('.divCorreo'),'Email no puede estar vacío')
    return valido
}

const validarSexo = () => {
    let sexos = $d.querySelectorAll('[name="sexo"]')
    let valido = false
    sexos.forEach(element => {
        if(element.checked = true) valido= true
    });
    if(!valido) error($d.querySelector('.divRadio'),'Sexo no puede estar vacío')
    return valido
}

const validarAficiones = () => {
    let aficiones = $d.querySelectorAll('[name="aficiones"]')
    let valido = false
    aficiones.forEach(element => {
        if(element.checked = true) valido = true
    });
    if(!valido) error($d.querySelector('.divAficiones'),'Aficiones no puede estar vacío')
    return valido
}

const validarCiudad = () => {
    let ciudad = $d.querySelector('[name="listaCiudades"]').value
    let valido =  ciudad !== ''
    if(!valido) error($d.querySelector('.divCiudades'),'Ciudades no puede estar vacío')
    return valido
}

const validarMensaje = () => {
    let str = $d.querySelector('.textarea').value
    let valido = new RegExp(/\w+/).test(str)
    if(!valido) error($d.querySelector('.divMensaje'),'Mensaje no puede estar vacío')
    return valido
}

const validar = (e) => {
    let aficiones = validarAficiones()
    let ciudad = validarCiudad()
    let sexo = validarSexo()
    let email = validarEmail()
    let nombre = validarNombre()
    let mensaje = validarMensaje()
    let fecha = validarFecha()
    if( aficiones && sexo
        && email && nombre
        && fecha && ciudad
        && mensaje){
            // no hacer nada
    } else {
        e.preventDefault()
        alert('no enviado')
    }
}
$nombre.addEventListener('blur', validarNombre)
$fecha.addEventListener('blur', validarFecha)
$form.addEventListener('submit', validar)

///// ERROR ///////////////////////////////////
const error = (elemento, mensaje) => {
    let $p = $d.createElement('p')
    $p.textContent = mensaje
    elemento.insertAdjacentElement('afterend',$p)
    $p.setAttribute('class','red')
    setTimeout(() => {
        $p.remove()
    }, 5000);
}

