let num1;
let num2;
 
let auxiliar;
 
/*pARSE iNT PARA CAMBIAR EL TIPO DE sTRING A INT*/
 
num1=parseInt(prompt("Introduzca el primer num"));
num2=parseInt(prompt("Introduzca el segundo num"));
 
 
 
if(num1>num2){
 
auxiliar=num1;
num1=num2;
num2=auxiliar;
 
}
 
for (let index = num1+1; index < num2; index++) {
   
    console.log(index);
   
}
