/**
 * 9. Realiza un programa que tenga una imagen de una bola de papel y una papelera vacía.
Cuando se arrastre la bola de papel a la papelera vacía, deberá cambiar la imagen de la
papelera vacía a una papelera llena.
 */
let caja = document.querySelector (".caja");
caja.draggable=true; //hacemos el elemento arrastrable

let contenedor = document.querySelector (".contenedor");
contenedor.addEventListener("dragover", e=>{
    e.preventDefault();//para que ejecute el drop
    });
contenedor.addEventListener("drop", e=>{
    contenedor.style.backgroundImage="url(./img/full.png)"
    contenedor.appendChild(caja);
    });