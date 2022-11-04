//const $d = document // el dolar se usa para saber que es un elemento del DOM


// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
//Estos tres primeros, ya no se suelen usar y en su defecto se utiliza
// querySelector y querySelectorAll
// console.log(document.getElementById("menu")); //este es más rápido quequerySelector;
// console.log(document.querySelector("#menu")); //obtine el primero que se encuentra;
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a")); //los obtiene todos
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));
// .classList()
// .createElement(e)
// insertAdjacentElement (pag18)
// eventos (pag 23 -28 resumen eventos pag 33)
const $d = document
const buttonEvent = d$.querySelector("#evento-atributo")
const funcionEvento = () => alert("Hola Mundo")
buttonEvent.addEventListener("click", funcionEvento)

