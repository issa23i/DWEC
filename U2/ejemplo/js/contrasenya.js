const $d = document
const $b = document.body
const $inputPass = $d.querySelector('[type="password"]')
const $p = $b.appendChild( $d.createElement('p') )

/**
 * Captura el input introducido
 */
const capturarPass = (event) => {
    if (event.type === "keyup") {
        console.log(String.fromCharCode(event.keyCode))
        const $span = $p.appendChild($d.createElement('span'))
        $span.textContent = String.fromCharCode(event.keyCode)
        console.log($p.textContent);
    }
}


$inputPass.addEventListener("keyup",capturarPass)