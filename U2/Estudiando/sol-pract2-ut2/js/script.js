

const verificarCampoNombre= (e)=>{
    let nombre = e.target.value;
    if (!validarCampoNombre(nombre)){
        mostrarError("Error en el campo Nombre y Apellidos",e.target);
        return false;
    }
    return true;

}
const validarCampoNombre = (nombre) => {
    let expNombreValido = /^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/;
    if (expNombreValido.test(nombre)) {
      return true;
    } else return false;
  };


  const verificarCampoFecha= (e)=>{
    let fecha = e.target.value;
    if (!validarCampoFecha(fecha)){
        mostrarError("Error en el campo Fecha",e.target);
        return false;
    }
    return true;

}

const validarCampoFecha = (fecha) => {//formato aaaa-mm-dd
    if (fecha==="") return false;
    let anio = parseInt(fecha.substring(0,4) );
    if (anio < 2010){
        return true;
    } else return false;
  };



//FORMULARIO


const validarCampos= ()=>{
    const inputFullName = document.querySelector("[name='nombreApellidos']");
    const inputDate = document.querySelector("[name='fecha']");
    const inputEmail = document.querySelector("[name='correo']");
    const inputSexList = document.querySelectorAll("[name='sexo']");
    const inputHobbiesList = document.querySelectorAll("[name='aficiones']");
    const inputCities = document.querySelector("[name='listaCiudades']");
    const inputMessage = document.querySelector("[name='mensaje']");
    const divSex = document.querySelector(".divRadio");
    const divHobbies = document.querySelector(".divAficiones");
    
    let inputSexChecked = (Array.from(inputSexList).filter(item=>item.checked)).length;
    let inputHobbiesChecked = (Array.from(inputHobbiesList).filter(item=>item.checked)).length;


    let esOk=true;
    if (inputFullName.value===""){
        mostrarError ("El campo Nombre y Apellidos no puede estar vacío",inputFullName );
        esOk=false;
    }
    else if (!validarCampoNombre (inputFullName.value)){
        mostrarError("Error en el campo Nombre y Apellidos",inputFullName);
        esOk=false;
    }
    if (inputDate.value===""){
        mostrarError ("El campo Fecha no puede estar vacío",inputDate);
        esOk=false;
    }
    else if (!validarCampoFecha (inputDate.value)){
        mostrarError("Error en el campo Fecha",inputDate);
        esOk=false;
    }
    if (inputEmail.value===""){
        mostrarError ("El campo Emails no puede estar vacío",inputEmail);
        esOk=false;
    }
    if (inputSexChecked===0){
        mostrarError ("El campo Sexo debe estar seleccionado",divSex);
        esOk=false;
    }
    if (inputHobbiesChecked===0){
        mostrarError ("El campo Aficiones debe estar seleccionado",divHobbies);
        esOk=false;
    }
    if (inputCities.value===""){
        mostrarError ("El campo Ciudades debe estar seleccionado",inputCities);
        esOk=false;
    }
    if (inputMessage.value===""){
        mostrarError ("El campo Mensaje no puede estar vacío",inputMessage);
        esOk=false;
    }

    return esOk;

}

const verificarFormulario = (e) =>{
    if (!validarCampos()){
        e.preventDefault();
        return false;
    }
    
}

//MENSAJES DE ERROR
const mostrarError= (mensaje,elemento)=>{
  let error = document.createElement("p");
  error.textContent=mensaje;
  error.className= "error";
  elemento.insertAdjacentElement("afterend", error);

  setTimeout(() => {
    error.remove();
  }, 3000);
}

const inputFullName = document.querySelector("[name='nombreApellidos']");
inputFullName.addEventListener("blur",verificarCampoNombre);
const inputDate = document.querySelector("[name='fecha']");
inputDate.addEventListener("blur",verificarCampoFecha);
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", verificarFormulario);
