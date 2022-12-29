/// CONSTANTES ////////////////////////////////////
const url = "www.thecocktaildb.com/api/json/v1/1/";
const d = document;
const $select = d.querySelector("select");
const $input = d.querySelector("input");
const $searchBtn = d.querySelector("button");

/// EVENTOS //////////////////////////////////////
const seleccion = (e) => {
  $input.className = "hidden";
  $searchBtn.className = "hidden";
  let valor = e.target.value;
  switch (valor) {
    case "s":
      $input.className = "";
      $searchBtn.className = "neonText";
      break;
    case "c":
      categoryList();
      break;
    case "i":
      ingredientList();
      break;
    case "g":
      glassList();
      break;
    case "a":
      alcoholList();
      break;
    default:
      break;
  }
};

/// LISTENERS ////////////////////////////////////
$select.addEventListener("change", seleccion);

/// FUNCIONES ////////////////////////////////////
const categoryList = () => {
  // listar por categorías
  console.log("listar por categorías");
};

const ingredientList = () => {
  // listar por ingredientes
  console.log("listar por ingredientes");
};

const glassList = () => {
  // listar por tipo de vaso
  console.log("listar por tipo de vaso");
};

const alcoholList = () => {
    //listar por tipo de alcohol
    console.log("listar por tipo de alcohol");
}
