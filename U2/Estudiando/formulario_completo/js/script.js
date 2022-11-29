// VARIABLES

const $form = document.querySelector('form')

//// EVENTOS ///////////////////////////////////////

const validar = (e) => {
    let nombreOk = validarNombre()
    let dniOk = validarDNI()
    let edadOk = validarEdad()
    let emailOk = validarEmail()
    let ciudadOk = validarCiudad()
    let programaOk = validarPrograma()
    let generoOk = validarGenero()
    let dispositivoOk = validarDispositivo()
    let fechaOk = validarFecha()
    if(!nombreOk || !dniOk || !edadOk || !emailOk
        || !ciudadOk || !programaOk 
        || !generoOk || !dispositivoOk || !fechaOk) {
        e.preventDefault()
        alert('No enviado')
    }
}

$form.addEventListener('submit',validar)

///////////// VALIDACIONES POR CAMPOS /////////////////

const validarNombre = () => {
    let nombre = document.querySelector('[name="nombre"]')
    let valor = nombre.value
    let regex = new RegExp(/^[^\d]+(\s{1}[^\d])*$/)
    let valido = regex.test(valor)
    if(!valido) error(nombre,'No puede contener números ni estar vacío')
    return valido
}

const validarDNI = () => {
    let dniElement = document.querySelector('[name="dni"]')
    let valor = dniElement.value
    let regex = new RegExp(/^[0-9]{8}[A-Z]{1}$/)
    let valido = regex.test(valor) && dni(valor)
    if(!valido) error(dniElement,'Debe ser un DNI válido y no estar vacío')
    return valido
}

const validarEdad = () => {
    let edad = document.querySelector('[name="edad"]')
    let valor = edad.value
    let regex = new RegExp(/^[0-9]{1,3}$/)
    let valido = regex.test(valor)
    if(!valido) error(edad,'No puede contener letras ni estar vacío')
    return valido
}

const validarEmail = () => {
    let emailElement = document.querySelector('[name="email"]')
    let valor = emailElement.value
    let regex = new RegExp(/^\w+@\w+\.\w+$/)
    let valido = regex.test(valor) && email(valor)
    if(!valido) error(emailElement,'El email debe ser válido y no estar vacío')
    return valido
}

const validarCiudad = () => {
    let ciudad = document.querySelector('[name="ciudad"]')
    let valor = ciudad.value
    let valido = valor !== ''
    if(!valido) error(ciudad, 'Debe seleccionar una ciudad')
    return valido
}

const validarPrograma = () => {
    let programa = document.querySelector('[list="editor"]')
    let valor = programa.value
    let valido = valor !== ''
    if(!valido) error(programa, 'Debe seleccionar un programa')
    return valido
}

const validarGenero = () => {
    let elementos = document.querySelectorAll('[name="genero"]')
    let genero = ''
    let valor = ''
    for (let i = 0; i < elementos.length; i++) {
        if(elementos[i].checked == true) {
            valor = elementos[i].value
            genero = elementos[i]
        }
    }
    let valido = valor !== ''
    if(!valido) error(elementos[elementos.length-1],'Debe seleccionar un género')
    return valido
}

const validarDispositivo = () => {
    let elementos = document.querySelectorAll('[name="dispositivos"]')
    let dispositivo = ''
    let valor = ''
    for (let i = 0; i < elementos.length; i++) {
       if(elementos[i].checked == true) {
            valor = elementos[i].value
            dispositivo = elementos[i]
       }
    }
    let valido = valor !== ''
    if(!valido) error(elementos[elementos.length-1],'Debe seleccionar al menos un dispositivo')
    return valido
}

const validarFecha = () => {
    let fecha = document.querySelector('[name="date"]')
    let valor = fecha.value
    valor = new Date(valor)
    let anyo = valor.getFullYear()
    let valido = anyo < 2016
    if(!valido) error(fecha,'Debe ser una fecha anterior a 2016')
}
/// /////////// ////////// ////////// //////////

const error = (e,msg) => {
    let p = document.createElement('p')
    p.textContent = msg
    p.setAttribute('class','red')
    e.insertAdjacentElement('afterend',p)
    setTimeout(() => {
        p.remove()
    }, 5000);
}

const dni = (dni) => {
    let n = dni.slice(0,8)
    let letra = dni.slice(8,9)
    let resto = n%23
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    return letras[resto]===letra.toUpperCase()
}

const email = (email) => {
    let servidores = ['hotmail','outlook','msn']
    let servidor = ((email.split('.'))[0].split('@'))[1]
    
    return servidores.some(s => s===servidor)
}