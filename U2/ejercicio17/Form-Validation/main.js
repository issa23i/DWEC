const $d = document
const $form = $d.querySelector('form')

///// EVENTOS ////////////////////////////////////////////

const validar = () => {
    validarUserName()
    validarEmail()
    validarPassword()
}

$form.addEventListener('submit',validar)


///// VALIDACIONES //////////////////////////////////////

const validarUserName = () => {
    let username = $d.getElementById('username')
    return new RegExp(/^[^ .;,!?]\w+$/i).test(username)
}

const validarEmail = () => {
    let email = $d.getElementById('email')
    return new RegExp(/^\w+@(hotmail|gmail|yahoo)\.\w+$/i).test(email)
}

const validarPassword = () => {
    let password = $d.getElementById('password')
    let pass = false
    pass = new RegExp(/(^[A-Z]\w{5,}$)|(\w[])/).test('bcddd')
    if(pass)
    /// vou por aquío expresion regular
    
}