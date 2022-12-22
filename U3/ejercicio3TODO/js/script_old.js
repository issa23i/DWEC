

const mostrarTabla = () => {
  // si no existe en LocalStorage, lo crea
  let listaTareas = JSON.parse(localStorage.getItem("tareas"));
  if (listaTareas === null) {
    listaTareas = [];
    // se guarda un índice y la lista de tareas en LocalStorage
    guardarTareas(listaTareas)
    getIndice();
    // recargar página para que surta efecto
    window.location.reload()
    //  si existe la lista, se pinta
  } else {
    listaTareas.forEach((tarea) => {
      // no inserta las tareas borradas
      if (tarea !== null) {
        printTarea(tarea);
      }
    });
  }
};

const addTarea = (e) => {
  // que el formulario no se envíe
  e.preventDefault();

  // recoger el formulario
  let $inputText = document.getElementById("tarea");
  let textoTarea = $inputText.value;
  let $inputPrioridad = document.querySelector('[name="prioridad"]');
  let prioridadTarea = $inputPrioridad.value;

  let indiceTarea = getIndice();
  let tarea = [indiceTarea, textoTarea, prioridadTarea];

  // si no existe en LocalStorage, lo crea
  let listaTareas = JSON.parse(localStorage.getItem("tareas"));
  if (listaTareas === null) {
    listaTareas = [];
    guardarTareas(listaTareas)
    //  si existe la lista, se inserta y se pinta
  } else {
    listaTareas.push(tarea);
    printTarea(tarea);
  }
  // se guarda la lista de tareas de nuevo en el LocalStorage
  guardarTareas(listaTareas)
};

const borrarRegistro = (e) => {
    let $boton = e.target;
    let listaTareas = JSON.parse(localStorage.getItem("tareas"));
    for (let i = 0; i < listaTareas.length; i++) {
      if (listaTareas[i] !== null) {
        if (listaTareas[i][0] == $boton.value) {
          delete listaTareas[i];
          listaTareas = listaTareas.filter((t) => t !== null);
          guardarTareas(listaTareas)
          // recargar página para que aparezca la lista borrada
          window.location.reload()
          return true;
        }
      }
    }
    return false;
  };

const printTarea = (tarea) => {
    let $tbody = document.querySelector("tbody");
    let $tr = document.createElement("tr");
    // insertar antes del cierre de la etiqueta tbody
    $tbody.insertAdjacentElement("afterend", $tr);
    // Celdas para texto, prioridad, botón borrar
    let $tdTexto = document.createElement("td");
    $tdTexto.textContent = tarea[1];
    let $tdPrioridad = document.createElement("td");
    $tdPrioridad.textContent = getTextoPrioridad(tarea[2]);
    // El botón borrar lleva el índice de la tarea
    let $tdButton = document.createElement("td");
    let $button = document.createElement("button");
    let indice = tarea[0];
    $button.value = indice;
    $button.textContent = "Borrar";
    $tdButton.appendChild($button);
  
    $tr.appendChild($tdTexto);
    $tr.appendChild($tdPrioridad);
    $tr.appendChild($tdButton);
  
    // Funcionalidad del botón borrar //// listener ///////////////////////////////////////////////
    $button.addEventListener("click", borrarRegistro);
  };

// listeners /////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", mostrarTabla);
document.querySelector('[type="submit"]').addEventListener("click", addTarea);


/**
 * Si el índice no existe lo crea,
 * si existe, le suma uno
 * @returns Indice con autoincremento
 */
const getIndice = () => {
  let indice = localStorage.getItem("indice");
  if (indice === null) {
    localStorage.setItem("indice", 0);
    indice = localStorage.getItem("indice");
  } else {
    indice++;
    localStorage.setItem("indice", indice);
  }
  return indice;
};

const ordenarTareas = (tareas) => {
    // ordenar de mayor prioridad a menor
    tareas.sort( (t1,t2) => t2[2]-t1[2])
    // recargar página para que surta efecto
    window.location.reload()
}

const guardarTareas = (tareas) => {
    ordenarTareas(tareas)
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

const getTextoPrioridad = (num) => {
    switch (parseInt(num) ) {
        case 1:
            return "Alta"
            break;
        case 2:
            return "Media"
            break;
        case 3:
            return "Baja"
            break;
        default:
            return "No definida"
            break;
    }
}