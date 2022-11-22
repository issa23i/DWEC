// 11. Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
// a) Debe validar si el email sigue el formato texto@servidor.loquesea
// b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este
// como servidor admitido en un array de servidores llamado “listaServidores”.
// Dicho array debe ser definido a mano en el código.

// Ejemplo
const $d = document
const $btn = $d.querySelector('button')

const validar = (e) => {
    let exreg = new RegExp(/\d+\w*@\d*\w*\.\d*\w*/)
    if(!exreg.test($d.querySelector('#email').value) || !validarServidor($input.value)){
        e.preventDefault()
        alert("Email no válido")
    }
}

const validarServidor = (email) => {
    let servidor = (email.split('@'))[1]
    console.log(servidor);
    let listaServidores=["terra.es","google.com","marca.es","yahoo.es","iesmartinezm.es"];
    return listaServidores.find(s => s === servidor)
}

$btn.addEventListener('click',validar)




