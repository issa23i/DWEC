const mostrarTabla = () => {
    // si no existe en LocalStorage, lo crea
    let listaTareas = localStorage.getItem('tareas')
    if(listaTareas === null){
        listaTareas = []
        
    } else {

    }
}


// listeners
window.addEventListener('load',mostrarTabla)