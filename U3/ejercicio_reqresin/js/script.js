
// constantes
const $btn = document.querySelector('button')
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
    e.preventDefault()
    $input = document.getElementById("num_usuario")
    let id = $input.value
    let urlUser = urlReqres+id
    fetch(urlUser)
    .then(json => json.json())
    .then(data => {
        let email = data['data']['email']
        let first_name  = data['data']['first_name']
        let last_name = data['data']['last_name']
        let avatar = data['data']['avatar']
        mostrarUsuario(email,first_name,last_name,avatar)
    })
    
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

// listeners
$btn.addEventListener('click',seleccionarUsuario)
