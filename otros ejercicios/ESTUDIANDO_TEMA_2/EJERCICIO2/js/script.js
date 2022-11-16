/**
 * 2. Realiza un programa que cree dinámicamente una tabla de 100x100. Cada elemento
de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de
1 en 1.
Esta página además tendrá un botón que será “Calcular numero casi primos”. Este botón
hará que todas las celdas de la tabla que tengan números “Casi primos” se pongan con
un fondo amarillo.
 */

const $d = document
const $body = $d.body

const $table = $d.querySelector('table')

const casiPrimos = (n) => {
    let contador = 0
    for (let i = 2; i < n; i++) {
        if (n%i === 0) {
            contador++
        }
    }
    return contador === 1
}

const createTable = (n) => {
    contador = 0
    for (let i = 0; i < n; i++) {
        let $tr = $d.createElement('tr')
        $table.insertAdjacentElement('beforeend', $tr)
        for (let j = 0; j < n; j++) {
            let $td = $d.createElement('td')
            $td.textContent = contador
            if(casiPrimos(contador) ){$td.style = 'background-color: yellow'}
            $tr.insertAdjacentElement('beforeend', $td)
            contador++
        }
    }
}


createTable(100)



