// 11. Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
// a) Debe validar si el email sigue el formato texto@servidor.loquesea
// b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este
// como servidor admitido en un array de servidores llamado “listaServidores”.
// Dicho array debe ser definido a mano en el código.

const $d = document
const $btn = $d.querySelector('button')
const $form = $d.querySelector('form')

const validar = (e) => {
    
    let $email = $d.getElementById('email').value
    if( ! validarEmail($email) ) {
        error(e.target, 'Email no válido')
        e.preventDefault()
    }
}

$btn.addEventListener('click', validar)
$form.addEventListener('submit', validar)

const validarEmail = (email) => {
    let servidores = ['hotmail','outlook','msn']
    let servidor = ((email.split('.'))[0].split('@'))[1]

    let re= new RegExp(/^\w+@\w+\.\w+$/)
    
    console.log(servidores.some(s => s===servidor) && re.test(email));
    return servidores.some(s => s===servidor) && re.test(email)
}

const error = (elemento, msg) => {
    let $p = $d.createElement('p')
    elemento.appendChild($p)
    $p.textContent = msg
    alert(msg)
}