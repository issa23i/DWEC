const esPalindromo = (w) => {

   return w === w.split("").reverse().toString().replaceAll(",","")
   
}

console.log(esPalindromo("esso123oo321osse"));