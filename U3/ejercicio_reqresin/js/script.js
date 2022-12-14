/**
 * con la api reqres.in obtener para todos los usuarios mostrar el firstname e imagen 
 * (no url, sino la imagen) 
cargar todos los usuarios de todas las paginas en el html
(mirar la api para ver cuántqas páginas hay)
hacer un listado con firtsname e imagen

usar postman para conocer la api

gestión de errores


 */

let urlReqres = "https://reqres.in/api/users/";
let user = 1;
let users = 0;
let responseOK = false
let responseOK_ = false
/** */
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

const crearTarjeta = (nombre,imagen) => {
    let $tarjeta = document.createElement('article')
    document.body.insertAdjacentElement('beforeend',$tarjeta)
    let $img = document.createElement('img')
    $img.src = imagen
    $img.alt = 'Avatar de ' + nombre
    $tarjeta.insertAdjacentElement('afterbegin',$img)
    let $p= document.createElement('p')
    $p.textContent = nombre
    $tarjeta.insertAdjacentElement('beforeend',$p)
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