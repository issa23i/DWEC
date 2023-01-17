"use strict"
let divColores = document.querySelector(".colores");
let checkColores =document.querySelector("#colores");

let divFormulario = document.querySelector(".formulario");
let chekFormulario =document.querySelector("#formulario");

let divArrastrar = document.querySelector(".arrastrarysoltar");
let checkArrastrar =document.querySelector("#arrastrarysoltar");

checkColores.addEventListener("click",colores);
chekFormulario.addEventListener("click",formulario);


/*COLORES*/
function colores (){
    if (this.checked){
        let contenedor = document.createElement("DIV");
        let selector = document.createElement("SELECT");
        let opcionInicial = document.createElement("OPTION");
        opcionInicial.textContent="Selecciona un color";
        divColores.appendChild(contenedor);
        contenedor.appendChild(selector);
        selector.appendChild(opcionInicial);
        for (let i=0;i<10;i++){
            let opcion = document.createElement("OPTION");
            opcion.textContent= colorAleatorio();
            opcion.setAttribute("style","background-color:"+ opcion.textContent);
            selector.appendChild(opcion);
        }
        selector.addEventListener("change",cambiarColor);
    }
    else{//elimino lo que he creado
        divColores.removeChild(divColores.children[2]);
        document.body.style.setProperty("background-color","rgb(255,255,255)");
    }
}

function cambiarColor(){
    let seleccionado = this.options[this.selectedIndex];
    document.body.style.setProperty("background-color",seleccionado.textContent);
    
}

function numeroAleatorio(min, max) {
	return Math.round(Math.random() * (max - min) + min);
  }

  function colorAleatorio() {
	return `rgb( ${numeroAleatorio(0,255)} , ${numeroAleatorio(0,255)} , ${numeroAleatorio(0,255)})`;
  }


  /*FORMULARIO*/
  function formulario (){
    if (this.checked){
        let miForm = document.createElement("FORM");
        //miForm.setAttribute("method","GET");//añadir esto para el get o lo hace por defecto?
        //hay que añadir todos los name para que se pueda enviar
        let etiquetaNombre = document.createElement("LABEL");
        etiquetaNombre.setAttribute("for","nombre");
        etiquetaNombre.textContent="Nombre y apellidos";
        let nombre= document.createElement("INPUT");
        nombre.setAttribute("type","text");
        nombre.classList.add("campo__nombre");
        nombre.setAttribute("name","nombre");
        let etiquetaEmail = document.createElement("LABEL");
        etiquetaEmail.setAttribute("for","email");
        etiquetaEmail.textContent="Correo electrónico";
        let email= document.createElement("INPUT");
        email.setAttribute("type","text");
        email.classList.add("campo__email");
        email.setAttribute("name","email");
        let etiquetaMensaje = document.createElement("LABEL");
        etiquetaMensaje.setAttribute("for","mensaje");
        etiquetaMensaje.textContent="Mensaje";
        let mensaje= document.createElement("TEXTAREA");
        mensaje.classList.add("campo__mensaje");
        mensaje.setAttribute("name","mensaje");
        let enviar= document.createElement("INPUT");
        enviar.setAttribute("type","submit");
        enviar.textContent="ENVIAR";
        miForm.appendChild(etiquetaNombre);
        miForm.appendChild(nombre);
        miForm.appendChild(etiquetaEmail);
        miForm.appendChild(email);
        miForm.appendChild(etiquetaMensaje);
        miForm.appendChild(mensaje);
        miForm.appendChild(enviar);
        miForm.addEventListener("submit",validar);
        divFormulario.appendChild(miForm);
        
    }
    else{
        divFormulario.removeChild(divFormulario.children[2]);
    }
  }

  function validar (ev){
    ev.preventDefault();
    let nombre = document.querySelector(".campo__nombre");
    let email = document.querySelector(".campo__email");
    let mensaje = document.querySelector(".campo__mensaje");
    let exRegNombre = new RegExp("[^0-9]","i");//revisar
    let exRegEmail = new RegExp(".+[@].+[.].+","i");

    if (nombre.value===""||email.value===""||mensaje.value===""){
          mensajeError("Los campos no pueden estar vacíos");
      }
      else if (!exRegNombre.test(nombre.value)){
        mensajeError("El campo nombre no puede tener números");
      }else if(!exRegEmail.test(email.value)){
        mensajeError("El campo email no es válido");
      }else{
          this.submit();
      }
  }

  function mensajeError(texto){
      let mensajeError=document.createElement("P");
      mensajeError.textContent=texto;
      mensajeError.classList.add("campo__mensaje__error");
      divFormulario.appendChild(mensajeError);

      setInterval(function(){mensajeError.remove();},3000);
  }
