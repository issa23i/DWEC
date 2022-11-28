/**
 * 7. Realiza un programa que cuando se presione una tecla, calcule cuántos DNIs de 4 cifras
(del 0001 al 9999) tienen esa letra y te mostrará los DNIs y sus letras en un elemento
HTML(Ejemplo un <p> y una lista desplegable) .
 */
const $d = document
const calcularDNIS = (e) => {
    let letra = e.key.toUpperCase()
    let nums = []
    for (let i = 1; i < 10000; i++) {
        if(letra===letraDNI(i)){
            nums.push(i)
        }
    }
    mostrarDNI(nums,letra)
}
$d.addEventListener('keypress',calcularDNIS)

const letraDNI = (n) => {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    return letras[n%23]
}

const mostrarDNI = (nums, letra) => {
    // borrar si ya existen options
    let options = $d.querySelectorAll('option')
    for (const opt of options) {
        opt.remove()
    }
    // escribir en el párrafo la letra
    let $p = $d.querySelector('p')
    $p.textContent = `- DNIS CON LETRA ${letra} -`
    // mostrar opciones con los dnis de esta letra
    $select = $d.querySelector('select')
    for (const num of nums) {
        $opt = $d.createElement('option')
        if(num<10) {
            $opt.textContent = `0000000${num}${letra}`
        } else if(num<100) {
            $opt.textContent = `000000${num}${letra}`
        } else if(num<1000) {
            $opt.textContent = `00000${num}${letra}`
        } else if(num<10000) {
            $opt.textContent = `0000${num}${letra}`
        }
        $select.insertAdjacentElement('beforeend',$opt)
        }
}