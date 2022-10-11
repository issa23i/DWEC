// let newText = text.replace(/á/g, "a")
const esPalindromo = (frase) => {
  //Lo pasamos a minúsculas
  frase = frase.toLowerCase();
  //Le quitamos las tildes (no comprueba solo la primera ocurrencia porque tiene la g de global)
  frase = frase.replace(/á/g, "a");
  frase = frase.replace(/é/g, "e");
  frase = frase.replace(/í/g, "i");
  frase = frase.replace(/ó/g, "o");
  frase = frase.replace(/ú/g, "u");
  //Le quitamos espacios y carácteres especiales.
  frase = frase.replace(/[\W]/g, "");
  //Le damos la vuelta a la frase para compararla y reemplazamos las , por nada ya que al pasarlo de array a cadena, nos pone comas
  let fraseVolteada;
  fraseVolteada = frase.split("").reverse().join().replaceAll(",", "");
 
  if (frase == fraseVolteada) {
    return true;
  }
  return false;
};
let frase = "Salás";
console.log(esPalindromo(frase));