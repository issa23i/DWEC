/**
 * 14. Valida un campo input type=date de un formulario donde pida la fecha de 
 * nacimiento

SOL: https://medium.com/@LoretoVaquero/validar-fechas-con-javascript-fe1b1c7b6524
 */

const $d = document
const $form = $d.querySelector('form')


//const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
const DATE_REGEX = /(\d{4})(\-)(0[1-9]|1[012])(\-)(0[1-9]|[1-2]\d|3[01])$/
const CURRENT_YEAR = new Date().getFullYear();

const validateDate = (birthDate) => {
  /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
  if (!birthDate.match(DATE_REGEX)) {
    return false;
  }

  /* Comprobar los días del mes */
  const day = parseInt(birthDate.split("-")[2]);
  const month = parseInt(birthDate.split("-")[1]);
  const year = parseInt(birthDate.split("-")[0]);
  const monthDays = new Date(year, month, 0).getDate();
  if (day > monthDays) {
    return false;
  }

  /* Comprobar que el año no sea superior al actual*/
  if (year > CURRENT_YEAR) {
    return false;
  }
  return true;
};

const validar = (e) => {
    if(!validateDate($d.querySelector('input').value)){
        e.preventDefault()
        alert("Fecha no válida");
    }
    alert("Fecha válida, enviado correctamente");
}

$form.addEventListener('submit', validar)

