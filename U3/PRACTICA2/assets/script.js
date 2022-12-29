/// CONSTANTES ////////////////////////////////////
const url = "https://www.thecocktaildb.com/api/json/v1/1/";
const d = document;
const $select = d.querySelector("select");
const $searchBtn = d.querySelector("button");

/// EVENTOS //////////////////////////////////////
const seleccion = (e) => {
  borrarResultados()
  borrarListados()
  borrarDetalle()
  let $input = d.querySelector("input");
  let $divListados = d.querySelector("#listados");
  $input.className = "hidden";
  $searchBtn.className = "hidden";
  let valor = e.target.value;
  switch (valor) {
    case "s":
      $input.className = "";
      $searchBtn.className = "neonText";
      break;
    case "i":
      $input.className = "";
      $searchBtn.className = "neonText";
      break;
    case "c":
      listarCategorias();
      break;
    case "ii":
      listarIngredientes();
      break;
    case "g":
      listarVasos();
      break;
    case "a":
      listarAlcohol();
      break;
    default:
      break;
  }
};

const buscar = async () => {
  borrarResultados()
  borrarDetalle()
  borrarListados()
  let $input = d.querySelector("input");
  let tipo = d.querySelector("select").value;
  let palabra = $input.value;
  let urlSearch = ''
  if(tipo === 's'){
    urlSearch = `${url}search.php?${tipo}=${palabra}`;
  } else if( tipo === 'i'){
    urlSearch = `${url}filter.php?${tipo}=${palabra}`;
  }
  try {
    let res = await fetch(urlSearch);
    let resOk = await res.ok;
    if (resOk) {
      const data = await res.json();
      await mostrarBebidas(data);
    } 
  } catch (error) {
    sinResultados()
    console.error(error);
  }
  };

  
/// LISTENERS ////////////////////////////////////
$select.addEventListener("change", seleccion);
$searchBtn.addEventListener("click", async () =>{
  await buscar()
});
// los articles aún no existen, por lo que añado
// el listener al body, sólo se ejecutará
// si coincide la clase 'detalle'
d.body.addEventListener('click',(e) => {
  if(e.target.className === 'detalle'){
    mostrarDetalle(e.target.getAttribute('data-name'))
  }
})

/// FUNCIONES ////////////////////////////////////
const listarCategorias = async () => {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  let $divListados = d.querySelector('#listados')
  try {
    let res = await fetch(url)
    let resOk = await res.ok
    if(resOk){
      let data = await res.json()
      let categorias = await data['drinks']
      for (const c of categorias) {
        let $h2 = d.createElement('h2')
        $h2.textContent = c['strCategory']
        $divListados.appendChild($h2)
      }
    }
  } catch (error) {
    console.error(error)
  }
};

const listarIngredientes = async () => {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
  let $divListados = d.querySelector('#listados')
  try {
    let res = await fetch(url)
    let resOk = await res.ok
    if(resOk){
      let data = await res.json()
      let ingredientes = await data['drinks']
      for (const i of ingredientes) {
        let $h2 = d.createElement('h2')
        $h2.textContent = i['strIngredient1']
        $divListados.appendChild($h2)
      }
    }
  } catch (error) {
    console.error(error)
  }
};

const listarVasos = async () => {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
  let $divListados = d.querySelector('#listados')
  try {
    let res = await fetch(url)
    let resOk = await res.ok
    if(resOk){
      let data = await res.json()
      let vasos = await data['drinks']
      for (const v of vasos) {
        let $h2 = d.createElement('h2')
        $h2.textContent = v['strGlass']
        $divListados.appendChild($h2)
      }
    }
  } catch (error) {
    console.error(error)
  }
};

const listarAlcohol = async () => {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'
  let $divListados = d.querySelector('#listados')
  try {
    let res = await fetch(url)
    let resOk = await res.ok
    if(resOk){
      let data = await res.json()
      let alcohol = await data['drinks']
      for (const a of alcohol) {
        let $h2 = d.createElement('h2')
        $h2.textContent = a['strAlcoholic']
        $divListados.appendChild($h2)
      }
    }
  } catch (error) {
    console.error(error)
  }
};

const mostrarBebidas = (data) => {
  let numResultados = data["drinks"].length
  let bebidas = data["drinks"]
  let $resultados = d.querySelector('#resultados')
  if( numResultados<1 ){
    // si no hay resultados
    sinResultados()
  } else {
    let fragment = d.createDocumentFragment()
    for (const bebida of bebidas) {
      // pintar tarjeta
      let name = bebida['strDrink']
      let image = bebida['strDrinkThumb']
      fragment.appendChild(crearTarjeta(name,image))
    }
    $resultados.appendChild(fragment)
    let articles = $resultados.querySelectorAll('article')
    console.log(articles);
  }
};

const crearTarjeta = ( str, img) => {
  let $article = d.createElement('article')
  $article.setAttribute('data-name',str.replace(' ','_'))
  $article.className = 'detalle'
  let $img = d.createElement('img')
  $img.src = img
  $img.alt = str
  $img.className = 'detalle'
  $img.setAttribute('data-name',str.replace(' ','_'))
  $article.appendChild($img)
  let $h2 = d.createElement('h2')
  $h2.textContent = str
  $h2.className = 'neonText detalle'
  $h2.setAttribute('data-name',str.replace(' ','_'))
  $article.appendChild($h2)
  return $article
}

const mostrarDetalle = async (id) => {
  console.log(id);
  let urlSearch = `${url}search.php?s=${id}`;
  try {
    let res = await fetch(urlSearch)
    let resOk = await res.ok
    if( resOk ) {
      let data = await res.json()
      let bebida = await data['drinks'][0]
      let nombre = await bebida['strDrink']
      let instruccionesES = await bebida['strInstructionsES']
      let instrucciones = await bebida['strInstructions']
      let imagen = await bebida['strDrinkThumb']
      let categoria = await bebida['strCategory']
      let tipoVaso = await bebida['strGlass']
      let ingredientes = []
      let medidas = []
      for (let i = 0; i < 15; i++) {
        await ingredientes.push(bebida[`strIngredient${i}`]) 
        await medidas.push(bebida[`strMeasure${i}`])
      }
      
      await crearDetalle(nombre, instruccionesES, instrucciones
                    , imagen, categoria, tipoVaso, ingredientes
                    , medidas)
    }
  } catch (error) {
    console.error(error)
  }
}

const crearDetalle = (nombre, instruccionesES, instrucciones
  , imagen, categoria, tipoVaso, ingredientes
  , medidas) => {
    // primero borrar los resultados
    borrarResultados()
    let $divDetalle = d.querySelector('#detalle')
    let $divImagen = d.querySelector('#imagen')
    let $divdescrip = d.querySelector('#descripcion')
    let $divReceta = d.querySelector('#receta')

    // imagen
    let $imagen = d.createElement('img')
    $imagen.src = imagen
    $imagen.alt = nombre
    $divImagen.appendChild($imagen)


    // detalles
    let $h1Nombre = d.createElement('h1')
    $h1Nombre.textContent= `${nombre}`
    $divdescrip.appendChild($h1Nombre)
    let $pcategoria = d.createElement('p')
    $pcategoria.textContent = `Categoría : ${categoria}`
    $divdescrip.appendChild($pcategoria)
    let $pVaso = d.createElement('p')
    $pVaso.textContent = `Tipo de Vaso : ${tipoVaso}`
    $divdescrip.appendChild($pVaso)
    let $h3Ingredientes = d.createElement('h3')
    $h3Ingredientes.textContent = 'Ingredientes'
    $divdescrip.appendChild($h3Ingredientes)
    for (let i = 1; i < ingredientes.length; i++) {
      if(ingredientes[i]!==null){
        let $p = d.createElement('p')
        let medida = medidas[i]
        if(medida==null){
          medida = '-'
        }
        $p.textContent = `${ingredientes[i]} : ${medida}`
        $divdescrip.appendChild($p)
      }
    }

    // receta
    let $h3Receta = d.createElement('h3')
    $h3Receta.textContent = 'Preparación'
    $divReceta.appendChild($h3Receta)
    console.log(instrucciones);
    if(instruccionesES===null){ 
      // en ingles, si no están en español
      let $p = d.createElement('p')
        $p.textContent = instrucciones
        $divReceta.appendChild($p)
    } else {
      let $p = d.createElement('p')
        $p.textContent = instruccionesES
        $divReceta.appendChild($p)
    }
  }

const borrarResultados = () => {
  let $result = d.querySelector('#resultados')
  $result.childNodes.forEach(element => {
    element.className = 'hidden'
  });
}

const sinResultados = () => {
  let $resultados = d.querySelector('#resultados')
  let p = d.createElement('p')
  p.textContent = 'No hubo resultados'
  $resultados.appendChild(p)
}

const borrarDetalle = () => {
  let $imagen = d.querySelector('#imagen')
  let $descripcion = d.querySelector('#descripcion')
  let $receta  = d.querySelector('#receta')
  $imagen.childNodes.forEach(element => {
    element.className = 'hidden'
  });
  $descripcion.childNodes.forEach(element => {
    element.className = 'hidden'
  });
  $receta.childNodes.forEach(element => {
    element.className = 'hidden'
  });
}

const borrarListados = () => {
  let $listados = d.querySelector('#listados')
  $listados.childNodes.forEach(element => {
    element.className = 'hidden'
  });
}
