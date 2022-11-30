/**
 * 14. Valida un campo input type=date de un formulario donde pida la fecha de 
 * nacimiento
 */
const $form = document.querySelector('form')

const validar = (e) => {
    // valor introducido
    let valor = document.querySelector('#date').value
    // validar formato
    if (!validarFormato(valor)) {
        noValidado(e)
    }
    // validar dias
    if (!validarDias(valor)) {
        noValidado(e)
    }
    // validar fecha anterior a hoy
    if (!validarAnteriorAHoy(valor)) {
        noValidado(e)
    }
}

$form.addEventListener('submit',validar)

const noValidado = (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    p.textContent = 'Fecha no válida'
    p.style = 'color:red'
    e.target.appendChild(p)
    setTimeout(() => {
        p.remove()
    }, 3000);
}

const validarFormato = (fecha) => {
    let regexFormato = new RegExp(/^[0123]\d\/[01]\d\/[12][90]\d\d$/)
    if ( ! regexFormato.test(fecha) ) return false
    return true
}

const validarAnteriorAHoy = (fecha) => {
    // fecha en formato Date
    let array = fecha.split('/')
    let fechaCorregida = new Date(`${array[2]}/${array[1]}/${array[0]}`)
    // hoy tiene que ser mayor que la fecha
    let hoy = new Date(Date.now())
    let diff = hoy - fechaCorregida
    // un día en milisegundos
    diff = diff - (1000*60*60*24)
    return diff>0
}

const validarDias = (fecha) => {
    let array = fecha.split('/')
    let dia = array[0]
    let mes = array[1]
    let ano = array[2]
    // febrero 28 dias, si bisiesto 29
    let bisiesto = ano%4===0
    if(dia>31 || mes>12 ) return false
    if(mes==2 && bisiesto && dia>29) return false
    if(mes==2 && (!bisiesto) && dia>28 ) return false
    if( (mes==4 || mes==6 || mes==9 | mes==11) && dia>30 ) return false
    return true
}