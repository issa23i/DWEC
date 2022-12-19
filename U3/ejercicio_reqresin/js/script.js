
// constantes
const $btn = document.querySelector('button') // boton primer formulario mostrar usuario
const $btn2 = document.getElementById('boton_objeto') // boton segundo formulario enviar usuario
const $btn3 = document.getElementById('boton_cambiar') // botón tercero cambiar usuario
const $btn4 = document.getElementById('boton_eliminar') // último botón de eliminar
const urlReqres = "https://reqres.in/api/users/";


// acceso API

let user = 1;
let users = 0;
let responseOK = false
let responseOK_ = false

/** Mostrar todos */
fetch(urlReqres)
.then(response => {
    responseOK = response.ok
    return response.json()
})
.then(data => {
    users = data['total']
    if(responseOK){
        while(user<=users){
            let urlUser = urlReqres + user;
            llamar(urlUser)
            user++
        }
    }
    return data
})
.catch((error) => console.log("Error" + error));


/** Mostrar el seleccionado */
const seleccionarUsuario = (e) => {
    responseOK = false
    e.preventDefault()
    $input = document.getElementById("num_usuario")
    let id = $input.value
    let urlUser = urlReqres+id
    fetch(urlUser)
    .then(response => {
        responseOK = response.ok
        return response.json()
    })
    .then(data => {
        if(responseOK){
            let email = data['data']['email']
            let first_name  = data['data']['first_name']
            let last_name = data['data']['last_name']
            let avatar = data['data']['avatar']
            mostrarUsuario(email,first_name,last_name,avatar)
        } else {
            console.log('No pudo completarse la carga del usuario');
        }
    })
    .catch((error) => console.log('Error : ' + error))
}

const llamar = (url) => {
    fetch(url)
            .then(response => {
                responseOK_ = response.ok
                return response
            })
            .then((response) => response.json())
            .then(data_ => {
                if(responseOK_){
                    crearTarjeta(data_['data']['first_name'],data_['data']['avatar'])
                }
            })
            .catch((error) => console.log("Error" + error));
}


// vista

const crearTarjeta = (nombre,imagen) => {
    let $tarjeta = document.createElement('article')
    document.body.insertAdjacentElement('afterbegin',$tarjeta)
    let $img = document.createElement('img')
    $img.src = imagen
    $img.alt = 'Avatar de ' + nombre
    $tarjeta.insertAdjacentElement('afterbegin',$img)
    let $p= document.createElement('p')
    $p.textContent = nombre
    $tarjeta.insertAdjacentElement('beforeend',$p)
}

const mostrarUsuario = (email,nombre,apellido,avatar) => {
    let $divShow = document.getElementById('show')
    let $tarjeta = document.createElement('article')
    $divShow.insertAdjacentElement('afterbegin',$tarjeta)
    let $img = document.createElement('img')
    $img.src = avatar
    $img.alt = 'Usuario seleccionado: ' + nombre
    $tarjeta.insertAdjacentElement('afterbegin',$img)
    let $pApellido = document.createElement('p')
    $pApellido.textContent = apellido
    $tarjeta.insertAdjacentElement("beforeend",$pApellido)
    let $pNombre = document.createElement('p')
    $pNombre.textContent = nombre
    $tarjeta.insertAdjacentElement("beforeend",$pNombre)
    let $pEmail = document.createElement('p')
    $pEmail.textContent = email
    $tarjeta.insertAdjacentElement("beforeend",$pEmail)
}


// nuevo usuario

const addUsuario = (e) => {

    // evitar que se envíe el formulario
    e.preventDefault()

    // recoger valores del formulario
    let email = document.getElementById('email').value
    let first_name = document.getElementById('first_name').value
    let last_name = document.getElementById('last_name').value
    let avatar = document.getElementById('avatar').value

    // crear el objeto Usuario
    let newUser = new Usuario(email,first_name,last_name,avatar)

    // guardar el objeto Usuario en Local Storage
    localStorage.setItem('usuario',newUser)

    // Enviar usuario 
    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({ user: newUser})
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

const actualizarUsuario = (e) => {
    
    // evitar que se envíe el formulario
    e.preventDefault()

    // recoger valores del formulario
    let email = document.getElementById('email_change').value

    // importar usuario del local Storage
    let usuario = localStorage.getItem('usuario')
    // cambiar en el objeto usuario, el email
    usuario.email = email

    // Actualizar email del usuario 
    fetch("https://reqres.in/api/users/13", {
        method: "PUT",
        body: JSON.stringify({ user: usuario})
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

const eliminarUsuario = (e) => {
    
    // evitar que se envíe el formulario
    e.preventDefault()

    // recoger valores del formulario
    let id = document.getElementById('id_usuario').value

    // eliminar del local storage
    localStorage.removeItem('usuario')

    // Eliminar
    fetch(`https://reqres.in/api/users/${id}`, {
    method: "DELETE"
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

// listeners
$btn.addEventListener('click',seleccionarUsuario)
$btn2.addEventListener('click',addUsuario)
$btn3.addEventListener('click',actualizarUsuario)
$btn4.addEventListener('click',eliminarUsuario)