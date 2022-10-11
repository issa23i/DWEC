const contadorPalabras = (frase, palabra) => {
    let ex = new RegExp(palabra, "g");        //Expresión regular
    return frase.match(ex).length;
  };
  console.log(contadorPalabras("hola mundo adios mundo mundo", "mundo"));