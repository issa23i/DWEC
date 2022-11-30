const $form = document.querySelector('form')

const validar = (e) => {
    let radio = validarSexo()
    let checbox = validarDispositivo()
    if(!radio || !checbox){
        e.preventDefault()
        error(e,'No enviado, revise los campos')
    }
} 

$form.addEventListener('submit',validar)

const validarDispositivo = () => {
    let dispositivos = document.querySelectorAll('[name="dispositivos"]')
    for (const disp of dispositivos) {
        if(disp.checked==true) return true
    }
    //si no ha sido seleccionado ninguno, entonces
    error(dispositivos[dispositivos.length-1],'No ha seleccionado ningún dispositivo')
    return false
}

const validarSexo = () => {
    let sexos = document.querySelectorAll('[name="genero"]')
    for (const sexo of sexos) {
        if(sexo.checked==true) return true
    }
    // si no ha sido seleccionado ninguno, entonces 
    error(sexos[sexos.length-1],'No ha seleccionado un sexo')
    return false
}

const error = (elemento, mensaje) => {
    let p = document.createElement('p')
    p.textContent = mensaje
    p.style = ('color:red')
    elemento.insertAdjacentElement('afterend',p)
    setTimeout(() => {
        p.remove()
    }, 5000);
}