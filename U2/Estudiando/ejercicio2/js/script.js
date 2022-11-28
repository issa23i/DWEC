/**
 * 2. Realiza un programa que cree dinámicamente una tabla de 100x100. Cada elemento
de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de
1 en 1.
Esta página además tendrá un botón que será “Calcular numero casi primos”. Este botón
hará que todas las celdas de la tabla que tengan números “Casi primos” se pongan con
un fondo amarillo
 */

const $d = document
const $btnCrearTabla = $d.querySelector('button:first-of-type')
const $btnCalcular = $d.querySelector('button:last-of-type')

const crearTabla = () => {
    let $tabla = $d.createElement('table')
    $btnCalcular.insertAdjacentElement('afterend',$tabla)
    let contador = 1
    for (let i = 0; i < 100; i++) {
        let $row = $d.createElement('tr')
        $tabla.insertAdjacentElement('beforeend',$row)
        for (let j = 0; j < 100; j++) {
            let $cell = $d.createElement('td')
            $cell.textContent = contador
            $row.insertAdjacentElement('beforeend',$cell)
            contador++
        }
    }
}

const calcular = () => {
    let cells = $d.querySelectorAll('td')
    for (const cell of cells) {
        if (casiPrimo(cell.textContent)) cell.setAttribute('class','yellow')
    }
}

$btnCrearTabla.addEventListener('click',crearTabla)
$btnCalcular.addEventListener('click',calcular)

const casiPrimo = (n) => {
    contador = 0
    for (let i = 2; i < n; i++) {
        if(n%i==0) contador++
    }
    if (contador === 1 ) {return true } else { return false}
}