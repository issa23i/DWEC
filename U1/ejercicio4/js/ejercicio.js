//Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
//hasta introducir un número negativo y entonces mostrar el resultado.

let num, suma=0, res, media, i=0, prod=1, res2;
 
num = parseInt(prompt("Introduce un numero: "));
 
while (num>0) {
    i++;
 
    res = suma+num;
    alert(`${suma} + ${num} = ${res}`);
    suma = res;
 
    res2 = prod*num;
    alert(`${prod} x ${num} = ${res2}`);
    prod = res2;
   
    num = parseInt(prompt("Introduce un numero: "));
};
 
media = suma/i;
 
alert(`la media es: ${media}`);
 

