let caja = document.querySelector(".caja");
/** LA CAJA TIENE QUE SER DRAGABLE TRUE PARA PODER ARRASTRARLA */
caja.draggable = true; //hacemos el elemento arrastrable
let contenedor = document.querySelector(".contenedor");

contenedor.addEventListener("dragenter", (e) => {
  //el elemento draggable empieza a entrar cuanto
  // entra el puntero del ratón
  console.log("dragenter");
});

contenedor.addEventListener("dragleave", (e) => {
  //el elemento draggable empieza a salir cuanto sale el
  //puntero del ratón
  console.log("dragleave");
});

/** ESTE ES IMPEPINABLE, TIENE QUE TENER EL PREVENDEFAULT SI O SÍ ANTES DEL DROP */
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
  //este evento se ejecuta constantemente MIENTRAS TIENE COGIDO EL OBJETO Y NO LO HAS SOLTADO (ARRASTRANDO)
  console.log("drag");
});
console.log(navigator.geolocation);