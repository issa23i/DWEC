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
// clonar un elemento
div.textContent = "Elemento 1";
const div2 = div.cloneNode(); // Ahora SÍ estamos clonando
div2.textContent = "Elemento 2";
/**El método cloneNode(deep) acepta un parámetro boolean deep opcional, a false por defecto, para
indicar el tipo de clonación que se realizará:
• Si es true, clonará también sus hijos, conocido como una clonación profunda (Deep Clone).
• Si es false, no clonará sus hijos, conocido como una clonación superficial (Shallow Clone). */
div2.cloneNode(true) // clona sus hijos también
div2.textContent = "Elemento 2 con hijos del elemento 1";


// atributos
//Ejemplo 1
const div = document.createElement("div"); // <div></div>
div.id = "page"; // <div id="page"></div>
div.className = "data"; // <div id="page" class="data"></div>
div.style = "color: red"; // <div id="page" class="data" style="color: red"></div>

// hasAttribute
// Obtenemos <div id="page" class="info data dark" data-number="5"></div>
const div = document.querySelector("#page");
div.hasAttribute("data-number"); // true (data-number existe)
div.hasAttributes(); // true (tiene 3 atributos)
div.getAttributeNames(); // ["id", "data-number", "class"]
div.getAttribute("id"); // "page"



// insertAdjacentElement (pag18)
// eventos (pag 23 -28 resumen eventos pag 33)
const $d = document
const buttonEvent = $d.querySelector("#evento-atributo")
const funcionEvento = () => alert("Hola Mundo")
buttonEvent.addEventListener("click", funcionEvento)
div.removeAttribute("id"); // class="info data dark" y data-number="5"
div.setAttribute("id", "page"); // Vuelve a añadir id="page"

// atributo data
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));

// estilos
console.log($linkDOM.style);//Muestra valores asignados por el usuarios
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));
//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
$body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);

// API classList .className y .classList
const div = document.querySelector(".element");
// Obtener clases CSS
div.className; // "element shine dark-theme"
div.getAttribute("class"); // "element shine dark-theme"
// Modificar clases CSS
div.className = "elemento brillo tema-oscuro";
div.setAttribute("class", "elemento brillo tema-oscuro");

// .classList
const div = document.querySelector("#page");
div.classList; // ["info", "data", "dark"]
div.classList.add("uno", "dos"); // No devuelve nada.
div.classList; // ["info", "data", "dark", "uno", "dos"]
div.classList.remove("uno", "dos"); // No devuelve nada.
div.classList; // ["info", "data", "dark"]
const div = document.querySelector("#page");
div.classList; // ["info", "data", "dark"]
div.classList.toggle("info"); // Como "info" existe, lo elimina. Devuelve "false"
div.classList; // ["data", "dark"]
div.classList.toggle("info"); // Como "info" no existe, lo añade. Devuelve "true"
div.classList; // ["info", "data", "dark"]
const div = document.querySelector("#page");
div.classList; // ["info", "data", "dark"]
div.classList.item(1); // 'data'
div.classList.contains("info"); // Devuelve `true` (existe la clase)
div.classList.replace("dark", "light"); // Devuelve `true` (se hizo el cambio)

// reemplazar contenido
(página 16 de los apuntes del tema 2)