const $d = document
const $form = $d.querySelector('form')

/// DESHABILITAR BOTÓN DE ENVIAR
let $btn = $d.getElementById('submit')
$btn.setAttribute('disabled', true)

///// EVENTOS ////////////////////////////////////////////

const validar = () => {
    if( !validarUserName() || !validarEmail() || !validarPassword() ) {
        $form.preventDefault();
        return false
    } else {

    }
}

const habilitar = () =>{
    $btn.removeAttribute('disabled')
}

$form.addEventListener('mouseover', habilitar)
$form.addEventListener('submit',validar)


///// VALIDACIONES //////////////////////////////////////

const validarUserName = () => {
    let username = $d.getElementById('username')
    let val =  new RegExp(/^[^ .;,!?]\w+$/i).test(username)
    if (!val) {
        error(username,1)
        return false
    }
    return true
}

const validarEmail = () => {
    let email = $d.getElementById('email')
    error(email,2)
    let val =  new RegExp(/^\w+@(hotmail|gmail|yahoo)\.\w+$/i).test(email)
    if (!val) {
        error(username,1)
        return false
    }
    return true
}

const validarPassword = () => {
    let password = $d.getElementById('password')
    error(password,3)
    let min5chars = new RegExp(/\w{5,}/)
    let upper = new RegExp(/[A-ZÁÉÍÓÚ]+/)
    let lower = new RegExp(/[a-záéíóú]+/)
    let num = new RegExp(/\d+/)
    let val = min5chars.test(password) && upper.test(password)
          && lower.test(password) && num.test(password)
    if (!val) {
        error(username,1)
        return false
    }
    return true
}

///// MOSTRAR ERROR ////////////

const error = (elemento, error) => {
    let MENSAJES_ERROR = {
        1: "El campo Username no puede haber números, no puede tener espacios, ni caracteres .;,!?",
        2: 'El campo Email debe tener formato valido y solo (hotmail, gmail, yahoo)',
        3: "El campo Password debe tener al menos 5 caracteres y que tenga al menos 1 mayúscula, 1 minúscula y 1 número",
      };
      let parrafo = $d.createElement('p')
      parrafo.setAttribute('class', 'background-color: red; color: white;')
      elemento.insertAdjacentElement('afterend',parrafo)
      switch (error) {
        case 1:
            parrafo.textContent=MENSAJES_ERROR[1]
          break;
        case 2:
            parrafo.textContent=MENSAJES_ERROR[2]
          break;
        case 3:
            parrafo.textContent=MENSAJES_ERROR[3]
          break;
        default:
          break;
      }
     setTimeout(() => {
        parrafo.remove()
      }, 6000);
}
