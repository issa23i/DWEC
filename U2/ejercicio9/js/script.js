/**
 * 9. Realiza un programa que tenga una imagen de una bola de papel y una papelera vacía.
Cuando se arrastre la bola de papel a la papelera vacía, deberá cambiar la imagen de la
papelera vacía a una papelera llena.
 */

const $d = document
const $body = $d.body
const bolaPapel = $d.querySelector('[alt="bola de papel]')
const papeleraVacia = $d.querySelector('[alt="papelera vacia"]')
const papelera = $d.querySelector('[alt="papelera"]')
bolaPapel.draggable = true

papeleraVacia.addEventListener("dragover", (e) => preventDefault())
papeleraVacia.addEventListener("drop", llenar)

const llenarPapelera = () =>  {
    papelera.setAttribute('display','block')
    papeleraVacia.setAttribute('display','none')
}


