// valor para enumerar las tareas
//localStorage.removeItem('tareas')
//localStorage.removeItem('indice')
const mostrarTabla = () => {
  // si no existe en LocalStorage, lo crea
  let listaTareas = JSON.parse(localStorage.getItem("tareas"));
  if (listaTareas === null) {
    listaTareas = [];
    // se guarda un índice y la lista de tareas en LocalStorage
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
    getIndice();
    //  si existe la lista, se pinta
  } else {
    listaTareas.forEach((tarea) => {
      // no inserta las tareas borradas
      if (tarea !== null) {
        printTarea(tarea);
      }
    });
    // el índice siempre será el último de la lista
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
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
    //  si existe la lista, se inserta y se pinta
  } else {
    listaTareas.push(tarea);
    printTarea(tarea);
  }
  // se guarda la lista de tareas de nuevo en el LocalStorage
  localStorage.setItem("tareas", JSON.stringify(listaTareas));
};

// listeners
window.addEventListener("load", mostrarTabla);
document.querySelector('[type="submit"]').addEventListener("click", addTarea);

const borrarRegistro = (e) => {
  let $boton = e.target;
  let listaTareas = JSON.parse(localStorage.getItem("tareas"));
  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i] !== null) {
      if (listaTareas[i][0] == $boton.value) {
        delete listaTareas[i];
        listaTareas = listaTareas.filter((t) => t !== null);
        localStorage.setItem("tareas", JSON.stringify(listaTareas));
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
  $tdPrioridad.textContent = tarea[2];
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

  // Funcionalidad del botón borrar
  $button.addEventListener("click", borrarRegistro);
};

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
