/**
 * 1. Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”,
añada un elemento con un número aleatorio a una lista desordenada (elemento UL).
 */
const $d = document
const $body = $d.body
const $btn = $d.querySelector('button')
const $ul = $d.querySelector('ul')

const numRandom = () => parseInt(Math.random() * 100)

const addRandomNumLi = () => {
    const $li = $d.createElement('li')
    $li.textContent = numRandom()
    $ul.insertAdjacentElement('beforeend', $li)
}

$btn.addEventListener('click', addRandomNumLi)

