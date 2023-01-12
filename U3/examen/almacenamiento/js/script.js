const d = document
const $btn = d.querySelector('button')




///     EVENTOS
const enviar = () => {
    let nombreEntrada = d.getElementById('nombre').value
    let puntosEntrada = d.getElementById('puntos').value
    let entrada = {nombre:nombreEntrada,puntos:puntosEntrada}
    let puntuaciones = cargarPuntuaciones()
    puntuaciones.push(entrada)
    ordenar(puntuaciones)
    guardarPuntuaciones(puntuaciones)
    resetTabla()
    cargarTabla()
} 

const borrar = (ev) => {
    let puntuaciones = cargarPuntuaciones()

    if(ev.target.className === 'borrar'){
        let id = ev.target.id
        puntuaciones = puntuaciones.filter(el => el.nombre !== puntuaciones[id].nombre)
        guardarPuntuaciones(puntuaciones)
        resetTabla()
        cargarTabla()
    }
}



///     LISTENERS
$btn.addEventListener('click',enviar)
d.addEventListener('click', borrar)

//      FUNCIONES
const cargarPuntuaciones = () => {
    let puntuaciones = []
    if( localStorage.isabel !== undefined ){
        puntuaciones = JSON.parse(localStorage.getItem('isabel'))
    } else {
        localStorage.setItem('isabel', JSON.stringify(puntuaciones))
    }
    return puntuaciones    
}
const ordenar = (puntuaciones) => puntuaciones.sort((a,b) =>  b.puntos-a.puntos)
const guardarPuntuaciones = (puntuaciones) => {
    localStorage.setItem('isabel', JSON.stringify(puntuaciones))
}

const cargarTabla = () => {
    let $table = d.querySelector('table')

    let puntuaciones = cargarPuntuaciones()
    let num = puntuaciones.length
    if(num>3){
        num = 3
    }
    for (let i = 0; i < num; i++) {
        let $tr = d.createElement('tr')
        $tr.className = 'row'
        let $td_nombre = d.createElement('td')
        $td_nombre.textContent = puntuaciones[i].nombre
        let $td_puntos = d.createElement('td')
        $td_puntos.textContent = puntuaciones[i].puntos
        let $td_boton = d.createElement('td')
        let $btn_borrar = d.createElement('button')
        $btn_borrar.textContent = 'Borrar nota'
        $btn_borrar.id = i
        $btn_borrar.className = 'borrar'
        $td_boton.appendChild($btn_borrar)
        $table.insertAdjacentElement('beforeend',$tr)
        $tr.insertAdjacentElement('beforeend',$td_nombre)
        $tr.insertAdjacentElement('beforeend',$td_puntos)
        $tr.insertAdjacentElement('beforeend',$td_boton)
    }
}
const resetTabla = () => {
    let $rows = d.querySelectorAll('.row')
    $rows.forEach(r=> {
        r.remove()
    });
}
cargarTabla()