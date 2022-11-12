let caja = document.querySelector(".caja");
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
