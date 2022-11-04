// console.log("********** Elementos del Documento **********");
// console.log(window.document);

//es lo mismo que el anterior, no hace falta poner window.
//delante de document, está implícito
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement); // html
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// //Puede que devuelva dos al usar la extensión de Open Live Server
// console.log(document.scripts);
// setInterval(() => {
// //Muestra lo que se ha seleccionado después de 2 segundos
// console.log(document.getSelection().toString());
// }, 20000);

//const $d = document // el dolar se usa para saber que es un elemento del DOM

// retorna un HTMLColletion (array)
//console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));


//Estos tres primeros, ya no se suelen usar y en su defecto se utiliza
// querySelector y querySelectorAll


// console.log(document.getElementById("menu")); //este es más rápido quequerySelector;
// console.log(document.querySelector("#menu")); //obtine el primero que se encuentra;
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a")); //los obtiene todos

// para saber cuántos elementos de un mismo tipo hay:
// console.log(document.querySelectorAll("a").length);

// para imprimirlos
// document.querySelectorAll("a").forEach((el) => console.log(el));

// Query Selector :
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));
// Ejemplo 1
// const textoHeading = document.querySelector(".header_texto");
// console.log(textoHeading);
// const p =document.querySelector("#miParrafo");
// const c= document.querySelector("h2");
// console.log(textoHeading);
// textoHeading.textContent = 'Nuevo Heading'; // También se puede utilizar .text

// Ejemplo 2
// const page = document.querySelector("#page"); // <div id="page"></div>
// const info = document.querySelector(".main .info"); // <div class=”main”><div class="info"></div></div>

// Ejemplo 1
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
console.log(enlaces[0]);
// Algunas operaciones...
// Cambiar el texto
enlaces[0].textContent = 'Nuevo Texto enlace';
// Cambiar el enlace del primer enlace
enlaces[0].href = 'https://www.google.com';


// Agregar una clase...
// enlaces[0].classList es un objeto DOMTokenList 
enlaces[0].classList.add('nueva-clase');
console.log(enlaces[0].classList);


// Eliminar una clase...
// enlaces[0].classList.remove('navegacion__enlace');
//Ejemplo 2
// Obtiene todos los elementos con clase "info"
const infos = document.querySelectorAll(".info");
// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.querySelectorAll('[name="nickname"]');
// Obtiene todos los elementos <div> de la página HTML
const divs = document.querySelectorAll("div");

// Element.createElement(tag, options)
// Node.createComment(text)
// Node.createTextNode(text)
// Node.cloneNode(deep)

// Ejemplo 1
// Generar HTML desde JavaScript...
const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);
// Un enlace tiene una clase...
nuevoEnlace.classList.add('navegacion__enlace');
// Tiene un href
nuevoEnlace.href = 'nuevo-enlace.html';
// Tiene un Texto...
nuevoEnlace.textContent = 'Un Nuevo Enlace';
// console.log(nuevoEnlace);
label.setAttribute("for",valorAleatorio);
// Ejemplo 2Generar HTML desde JavaScript...
const div = document.createElement("div"); // Creamos un <div></div>
const span = document.createElement("span"); // Creamos un <span></span>
const img = document.createElement("img"); // Creamos un <img>
const comment = document.createComment("Comentario"); // <!--Comentario-->



// insertAdjacentElement (pag18)
// eventos (pag 23 -28 resumen eventos pag 33)
const $d = document
const buttonEvent = $d.querySelector("#evento-atributo")
const funcionEvento = () => alert("Hola Mundo")
buttonEvent.addEventListener("click", funcionEvento)


