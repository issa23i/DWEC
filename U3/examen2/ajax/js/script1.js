
///     CONSTANTES
const d = document
const $btnImages = d.getElementById('mostrarBtn')

///     EVENTOS
const mostrarImagenes = () => {
    let $select = d.getElementById('usuarios')
    let genero = $select.value
    let $div = d.getElementById('contenedor3')
    let srcImage
    switch (genero) {
        case 'mujeres':
            genero = 'female'
            break;
        case 'hombres':
            genero = 'male'
            break;
        default:
            break;
    }
    let url = `http://localhost:3000/results?gender=${genero}`
    console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {
           srcImage = el.picture.medium
           let $img = d.createElement('img')
           $img.src = srcImage
           $div.appendChild($img)
        });
        return data
    })
    .catch(er => console.error(er))

}

///     LISTENERS
$btnImages.addEventListener('click', mostrarImagenes)