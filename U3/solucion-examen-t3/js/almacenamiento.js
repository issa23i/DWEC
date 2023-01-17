"use strict"

let arrayNombrePuntuaciones = [];
let guardar = document.querySelector("#guardarBtn");

window.addEventListener("load", (e) => {
    if (!localStorage.getItem("jfg")) {
        localStorage.setItem("jfg", JSON.stringify(arrayNombrePuntuaciones));;
    } else {
        pintarPuntacion();
    }
})

guardar.addEventListener("click", (e) => {
    introducirPuntuacion();
})

function introducirPuntuacion() {
    arrayNombrePuntuaciones = JSON.parse(localStorage.getItem("jfg"));
    let nombreIntro = document.querySelector("#nombre");
    let puntuacionIntro = document.querySelector("#puntos");
    let object = {
        nombre: nombreIntro.value,
        puntuacion: puntuacionIntro.value
    }
    arrayNombrePuntuaciones.push(object);
    localStorage.setItem("jfg", JSON.stringify(arrayNombrePuntuaciones));
    pintarPuntacion();
}

function comprobacionTabla() {
    let tr = document.querySelectorAll(".filas");
    if (tr != null) {
        tr.forEach(element => {
            element.remove();
        });
    }
}

function pintarPuntacion() {
    comprobacionTabla();
    let tabla = document.querySelector("table");
    arrayNombrePuntuaciones = JSON.parse(localStorage.getItem("jfg"));
    arrayNombrePuntuaciones.sort((a, b) => b.puntuacion - a.puntuacion);
    let long = arrayNombrePuntuaciones.length;
    if (long > 3) {
        long = 3;
    }
    for (let i = 0; i < long; i++) {
        let trFila = document.createElement("TR");
        trFila.classList.add("filas");
        let tdNombre = document.createElement("TD");
        tdNombre.textContent = arrayNombrePuntuaciones[i].nombre;
        trFila.appendChild(tdNombre);
        let tdPuntuacion = document.createElement("TD");
        tdPuntuacion.textContent = arrayNombrePuntuaciones[i].puntuacion;
        trFila.appendChild(tdPuntuacion);
        let borrar = document.createElement("INPUT");
        borrar.type = "button";
        borrar.value = "X";
        borrar.addEventListener("click", (e) => {
            arrayNombrePuntuaciones.splice(i, 1);
            localStorage.setItem("jfg", JSON.stringify(arrayNombrePuntuaciones));;
            comprobacionTabla();
            pintarPuntacion();
        })
        trFila.appendChild(borrar);
        tabla.appendChild(trFila);
    }
}