/**
 * 4. Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón
sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM).
También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
elementos desaparecidos (pero no los eliminados).
 */
const $d = document
const $pes = $d.querySelectorAll('p')
const $btn = $d.querySelector('input')

for (const p of $pes) {
    p.addEventListener('mouseleave', () => {p.setAttribute('class','oculto')})
}

const reaparecer = () => {
    for (const p of $pes) {
        p.removeAttribute('class','oculto')
    }
}

$btn.addEventListener('click',reaparecer)


