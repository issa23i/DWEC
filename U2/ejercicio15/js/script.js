/**
 * 15. Programa la validación del formulario cuyo código aparece en el ejercicio 14 con JS.
 * probar con el set time out para mostrar mensajes de error
 * funcion que muestre el error , parametros con el mensaje o codigo de error y el elemento que ha provacado el error y modificar estilos en css
 *
 */

const $d = document;
const $form = $d.querySelector("form");
const $inputNombre = $d.querySelector('#inputFullName')
const $inputEmail = $d.querySelector('#inputEmailAdress')
const $inputTelefono = $d.querySelector('#inputPhoneNumber')
const $inputAsunto = $d.querySelector('#inputAffair')
const $textAreaMensaje = $d.querySelector('#areaMessage')

////// FUNCIONES DE VALIDACIÓN //////////////////////////////////////////

/** FullName: no puede haber números, no puede estar vacío y como máximo 80 caracteres */
const validarNombre = (str) => {
  return new RegExp(/^([A-Za-z]+ {0,1}[A-Za-z]*)+$/).test(str) && str.length <= 80;
};

/** Email Address: loquesea@loquesea.loquesea */
const validarEmail = (str) => {
  return new RegExp(/^\w+@\w+\.\w+$/).test(str);
};

/** Phone number: 9 dígitos */
const validarTelefono = (str) => {
  return new RegExp(/^\d{9}$/).test(str);
};

/** Affair: no puede incluir los caracteres / o \, no puede estar vacío y como máximo 120 caracteres */
const validarAsunto = (str) => {
  return (
    new RegExp(/^([^/\\]\w* {0,1}\w*)+$/).test(str) && str.length <= 120
  );
};

/** Message: no puede estar vacío y como máximo 300 caracteres */
const validarMensaje = (str) => {
  return new RegExp(/^(\w+ {0,1}\w*)+$/).test(str) && str.length <= 300;
};

//// SALIDA DE MENSAJES DE ERROR ///////////////////////////////////////////

const mostrarMensajeError = (codigoError) => {
    let $form = $d.querySelector('form')
  let MENSAJES_ERROR = {
    1: "El campo Nombre y Apellidos no puede haber números, no puede estar vacío y como máximo 80 caracteres",
    2: 'El campo Email debe tener el formato "su_direccion@servidor.extension"',
    3: "El campo Teléfono debe tener 9 dígitos",
    4: "El campo Asunto no puede incluir los caracteres / o , no puede estar vacío y como máximo 120 caracteres",
    5: "El campo Mensaje no puede estar vacío y como máximo 300 caracteres",
  };
  let parrafo = $d.createElement('p')
  parrafo.style = 'background-color: red; color: white;'
  switch (codigoError) {
    case 1:
        parrafo.textContent=MENSAJES_ERROR[1]
      break;
    case 2:
        parrafo.textContent=MENSAJES_ERROR[2]
      break;
    case 3:
        parrafo.textContent=MENSAJES_ERROR[3]
      break;
    case 4:
        parrafo.textContent=MENSAJES_ERROR[4]
      break;
    case 5:
        parrafo.textContent=MENSAJES_ERROR[5]
      break;
    default:
      break;
  }
  $form.insertAdjacentElement('afterend',parrafo)
 setTimeout(() => {
    parrafo.remove()
  }, 6000);
};


//// EVENTOS ///////////////////////////////////////////////////////////////

const validarFormulario = (e) => {
    // nombre no válido
  if (!validarNombre($d.querySelector("#inputFullName").value)) {
    mostrarMensajeError(1);
    e.preventDefault();
    return;
  }
  // email no válido
  if (!validarEmail($d.querySelector("#inputEmailAdress").value)) {
    mostrarMensajeError(2);
    e.preventDefault();
    return;
  }
  // teléfono no válido
  if (!validarTelefono($d.querySelector("#inputPhoneNumber").value)) {
    mostrarMensajeError(3);
    e.preventDefault();
    return;
  }
  // asunto no válido
  if (!validarAsunto($d.querySelector("#inputAffair").value)) {
    mostrarMensajeError(4);
    e.preventDefault();
    return;
  }
  // mensaje no válido
  if (!validarMensaje($d.querySelector("#areaMessage").value)) {
    mostrarMensajeError(5);
    e.preventDefault();
    return;
  }
};

const eventoNombre = (e) => {
    if (!validarNombre(e.target.value)) {
        mostrarMensajeError(1)
    }
}

const eventEmail = (e) => {
    if (!validarEmail(e.target.value)) {
        mostrarMensajeError(2)
    }
}

const eventTelefono = (e) => {
    if (!validarTelefono(e.target.value)) {
        mostrarMensajeError(3)
    }
}

const eventAsunto = (e) => {
    if (!validarAsunto(e.target.value)) {
        mostrarMensajeError(4)
    }
}

const eventMensaje = (e) => {
    if (!validarMensaje(e.target.value)) {
        mostrarMensajeError(5)
    }
}

////// LISTENERS /////////////////////////////////////////////////////////

$inputNombre.addEventListener('change',eventoNombre)
$inputEmail.addEventListener('change',eventEmail)
$inputTelefono.addEventListener('change',eventTelefono)
$inputAsunto.addEventListener('change',eventAsunto)
$textAreaMensaje.addEventListener('change',eventMensaje)
$form.addEventListener('submit',validarFormulario)
