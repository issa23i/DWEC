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
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
console.log(enlaces[0]);
// Algunas operaciones...
// Cambiar el texto
enlaces[0].textContent = "Nuevo Texto enlace";
// Cambiar el enlace del primer enlace
enlaces[0].href = "https://www.google.com";

// Agregar una clase...
// enlaces[0].classList es un objeto DOMTokenList
enlaces[0].classList.add("nueva-clase");
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
const nuevoEnlace = document.createElement("A");
console.log(nuevoEnlace);
// Un enlace tiene una clase...
nuevoEnlace.classList.add("navegacion__enlace");
// Tiene un href
nuevoEnlace.href = "nuevo-enlace.html";
// Tiene un Texto...
nuevoEnlace.textContent = "Un Nuevo Enlace";
// console.log(nuevoEnlace);
const label = document.createElement("label");
label.setAttribute("for", nuevoEnlace);
// Ejemplo 2Generar HTML desde JavaScript...
const div = document.createElement("div"); // Creamos un <div></div>
const span = document.createElement("span"); // Creamos un <span></span>
const img2 = document.createElement("img"); // Creamos un <img>
const comment = document.createComment("Comentario"); // <!--Comentario-->
// clonar un elemento
div.textContent = "Elemento 1";
const div2 = div.cloneNode(); // Ahora SÍ estamos clonando
div2.textContent = "Elemento 2";
/**El método cloneNode(deep) acepta un parámetro boolean deep opcional, a false por defecto, para
indicar el tipo de clonación que se realizará:
• Si es true, clonará también sus hijos, conocido como una clonación profunda (Deep Clone).
• Si es false, no clonará sus hijos, conocido como una clonación superficial (Shallow Clone). */
div2.cloneNode(true); // clona sus hijos también
div2.textContent = "Elemento 2 con hijos del elemento 1";

// atributos
//Ejemplo 1
const div4 = document.createElement("div"); // <div></div>
div4.id = "page"; // <div id="page"></div>
div4.className = "data"; // <div id="page" class="data"></div>
div4.style = "color: red"; // <div id="page" class="data" style="color: red"></div>

// hasAttribute
// Obtenemos <div id="page" class="info data dark" data-number="5"></div>
const div3 = document.querySelector("#page");
div3.hasAttribute("data-number"); // true (data-number existe)
div3.hasAttributes(); // true (tiene 3 atributos)
div3.getAttributeNames(); // ["id", "data-number", "class"]
div3.getAttribute("id"); // "page"

// insertAdjacentElement (pag18)
// eventos (pag 23 -28 resumen eventos pag 33)
const $d = document;
const buttonEvent = $d.querySelector("#evento-atributo");
const funcionEvento = () => alert("Hola Mundo");
buttonEvent.addEventListener("click", funcionEvento);
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
console.log($linkDOM.style); //Muestra valores asignados por el usuarios
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
const div5 = document.querySelector(".element");
// Obtener clases CSS
div5.className; // "element shine dark-theme"
div5.getAttribute("class"); // "element shine dark-theme"
// Modificar clases CSS
div5.className = "elemento brillo tema-oscuro";
div5.setAttribute("class", "elemento brillo tema-oscuro");

// .classList
const div6 = document.querySelector("#page");
div6.classList; // ["info", "data", "dark"]
div6.classList.add("uno", "dos"); // No devuelve nada.
div6.classList; // ["info", "data", "dark", "uno", "dos"]
div6.classList.remove("uno", "dos"); // No devuelve nada.
div6.classList; // ["info", "data", "dark"]
const div7 = document.querySelector("#page");
div7.classList; // ["info", "data", "dark"]
div7.classList.toggle("info"); // Como "info" existe, lo elimina. Devuelve "false"
div7.classList; // ["data", "dark"]
div7.classList.toggle("info"); // Como "info" no existe, lo añade. Devuelve "true"
div7.classList; // ["info", "data", "dark"]
const div8 = document.querySelector("#page");
div8.classList; // ["info", "data", "dark"]
div8.classList.item(1); // 'data'
div8.classList.contains("info"); // Devuelve `true` (existe la clase)
div8.classList.replace("dark", "light"); // Devuelve `true` (se hizo el cambio)

// reemplazar contenido
//(página 16 de los apuntes del tema 2)
const div9 = document.querySelector("div"); // <div></div>
div9.textContent = "Hola a todos"; // <div>Hola a todos</div>
div9.textContent; // "Hola a todos"
// si se usa, pierde el contenido anidado
// Obtenemos <div class="info">Hola <strong>amigos</strong></div>
const div10 = document.querySelector(".info");
div10.textContent; // "Hola amigos"
const div11 = document.querySelector(".info"); // <div class="info"></div>
div11.innerHTML = "<strong>Importante</strong>"; // Interpreta el HTML
div11.innerHTML; // "<strong>Importante</strong>"
div11.textContent; // "Importante"
const data = document.querySelector(".data");
data.innerHTML = "<h1>Tema 1</h1>";
data.textContent; // "Tema 1"
data.innerHTML; // "<h1>Tema 1</h1>"
data.outerHTML; // "<div class="data"><h1>Tema 1</h1></div>"

// insertar
//Ejemplo 1
const img = document.createElement("img");
img.src = "https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";
document.body.appendChild(img);
//Ejemplo 2
const div112 = document.createElement("div");
div112.textContent = "Esto es un div insertado con JS.";
const app = document.createElement("div"); // <div></div>
app.id = "app"; // <div id="app"></div>
app.appendChild(div); // <div id="app"><div>Esto es un div insertado con JS</div></div>
const div13 = document.createElement("div"); // <div></div>
div13.textContent = "Ejemplo"; // <div>Ejemplo</div>
const app2 = document.querySelector("#app"); // <div id="app">App</div>
app2.insertAdjacentElement("beforebegin", div);
// Opción 1: <div>Ejemplo</div> <div id="app">App</div>
app2.insertAdjacentElement("afterbegin", div);
// Opción 2: <div id="app"> <div>Ejemplo</div> App</div>
app2.insertAdjacentElement("beforeend", div);
// Opción 3: <div id="app">App <div>Ejemplo</div> </div>
app2.insertAdjacentElement("afterend", div);
// Opción 4: <div id="app">App</div> <div>Ejemplo</div>
app2.insertAdjacentElement("beforebegin", div);
// Opción 1: <div>Ejemplo</div> <div id="app">App</div>
app2.insertAdjacentHTML("beforebegin", "<p>Hola</p>");
// Opción 2: <p>Hola</p> <div id="app">App</div>
app2.insertAdjacentText("beforebegin", "Hola a todos");
// Opción 3: Hola a todos <div id="app">App</div>

// borrar
const div14 = document.querySelector(".deleteme");
div14.isConnected; // true
div14.remove();
div14.isConnected; // false
const div15 = document.querySelector(".item:nth-child(2)"); // <div class="item">2</div>
//document.body.removeChild(div15); // Desconecta el segundo .item

// reemplazar hijos
const div16 = document.querySelector(".item:nth-child(2)");
const newnode = document.createElement("div");
newnode.textContent = "DOS";
//document.body.replaceChild(newnode, div16);

// navegar por el DOM
// elementos
document.body.children.length; // 1
document.body.children; // <div id="app">
document.body.parentElement; // <html>
const app3 = document.querySelector("#app");
app3.children; // [div.header, p, a]
app3.firstElementChild; // <div class="header">
app3.lastElementChild; // <a href="/">
const a = app3.querySelector("a");
//a.previousElementSibling; // <p>
//a.nextElementSibling; // null
// nodos
document.body.childNodes.length; // 3
document.body.childNodes; // [text, div#app, text]
document.body.parentNode; // <html>
const app4 = document.querySelector("#app");
app4.childNodes; // [text, div.header, text, p, text, a, text]
app4.firstChild.textContent; // " "
app4.lastChild.textContent; // " "
const a2 = app4.querySelector("a");
//a2.previousSibling; // p
//a2.nextSibling; // null

// EVENTLISTENER
const button = document.querySelector("button");
const action2 = function () {
  alert("Hello!");
};
button.addEventListener("click", action2); // Add listener
button.removeEventListener("click", action2); // Delete listener

console.log("1");
window.addEventListener("load", function () {
  // Cuando el Archivo JS y los archivos dependientes han cargado como es el HTML, CSS, las imágenes...
  console.log("2");
});

// DETALLES DEL EVENTO CLICK
const span2 = document.body.querySelector("span");
const action3 = (event) => {
  const { x, y, detail } = event;
  span2.textContent = `Has hecho ${detail} CLICK en las coordenadas (${x}x${y})`;
};
document.body.addEventListener("click", action3);

// OTROS EVENTOS
// Estos closures también pueden ser con una función aparte...
function imprimir() {
  console.log("Imprimir");
}
window.addEventListener("load", imprimir); //al llamar a la función no se pone ()

function mostrarMensaje(evento) {
  if (evento.type === "keyup") {
    alert(evento.keyCode);
  } else if (evento.type === "click") {
    alert(evento.clientX + " " + evento.clientY);
  }
}
document.getElementById("miObjeto").addEventListener("click", mostrarMensaje);
document.getElementById("miObjeto").addEventListener("keyup", mostrarMensaje);
document.getElementById("miObjeto").addEventListener("dblclick", function () {
  alert("Codigo metido directamente");
});

// // Eventos Scroll...
window.onscroll = function (e) {
  console.log("scrolling...");
  console.log(this.scrollY); // This se refiere al elemento que llama al evento, por ejemplo una imagen, un boton..., en este caso es window
};

// Drag and drop (arrastrar y soltar)
let caja = document.querySelector(".caja");
caja.draggable = true; //hacemos el elemento arrastrable
let contenedor = document.querySelector(".contenedor");
contenedor.addEventListener("dragenter", (e) => {
  console.log("dragenter"); //el elemento draggable empieza a entrar cuanto entra el puntero del ratón
});
contenedor.addEventListener("dragleave", (e) => {
  console.log("dragleave"); //el elemento draggable empieza a salir cuanto sale el puntero del ratón
});
contenedor.addEventListener("dragover", (e) => {
  e.preventDefault(); //para que ejecute el drop
  console.log("dragover");
});
contenedor.addEventListener("drop", (e) => {
  console.log("drop");
  contenedor.appendChild(caja);
});
caja.addEventListener("dragstart", (e) => {
  console.log("dragstart");
});
caja.addEventListener("dragend", (e) => {
  console.log("dragend");
});
caja.addEventListener("drag", (e) => {
  //este evento se ejecuta constantemente
  console.log("drag");
});

// Ejemplo drag-drop selectivo:
const imagenes = [
  "imagen-0",
  "imagen-1",
  "imagen-2",
  "imagen-3",
  "imagen-4",
  "imagen-5",
  "imagen-6",
  "imagen-7",
  "imagen-8",
];
const puzzle = document.getElementById("puzzle");
const piezas = document.getElementById("piezas");
const mensaje = document.getElementById("mensaje");
let terminado = imagenes.length;
while (imagenes.length) {
  const index = Math.floor(Math.random() * imagenes.length);
  const div = document.createElement("div");
  div.className = "pieza";
  div.id = imagenes[index];
  div.draggable = true;
  div.style.backgroundImage = `url("recursos/${imagenes[index]}.jpg")`;
  piezas.appendChild(div);
  imagenes.splice(index, 1);
}
for (let i = 0; i < terminado; i++) {
  const div = document.createElement("div");
  div.className = "placeholder";
  div.dataset.id = i;
  puzzle.appendChild(div);
}

piezas.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("id", e.target.id);
});
puzzle.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.target.classList.add("hover");
});
puzzle.addEventListener("dragleave", (e) => {
  e.target.classList.remove("hover");
});
puzzle.addEventListener("drop", (e) => {
  e.target.classList.remove("hover");
  const id = e.dataTransfer.getData("id");
  const numero = id.split("-")[1];
  if (e.target.dataset.id === numero) {
    e.target.appendChild(document.getElementById(id));
    terminado--;
    if (terminado === 0) {
      document.body.classList.add("ganaste");
    }
  }
});

// EVENTOS
/**
 * Principales eventos
A continuación, mostramos un listado de los principales eventos existentes en Javascript:
● onfocus: al obtener un foco.
● onblur: al salir del foco de un elemento.
● onchange: al hacer un cambio en un elemento.
● onclick: al hacer un click en el elemento.
● ondblclick: al hacer doble click en un elemento.
● onkeydown: al pulsar una tecla (sin soltarla).
● onkeyup: al soltar una tecla pulsada.
● onkeypress: al pulsar una tecla.
● onload: al cargarse una página.
● onunload: al descargarse una página (salir de ella).
● onmousedown: al hacer clic de ratón (sin soltarlo).
● onmouseup: al soltar el botón del ratón previamente pulsado.
● onmouseover: al entrar encima de un elemento con el ratón.
● onmouseout: al salir de encima de un elemento con el ratón.
● onsubmit: al enviar los datos de un formulario.
● onreset: al resetear los datos de un formulario.
● onselect: al seleccionar un texto.
● onresize: al modificar el tamaño de la página del navegador.
 */

// BOM
// BOM (Browser Object Model) permite acceder y modificar propiedades de las ventanas del navegador
/**
 * 
 */
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth); //parte interna visible
  console.log(window.innerHeight); //parte interna visible
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});
window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});


