/**
14. Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800
 */

let net, disc
net = 1000 
disc = 20
const total = (net,disc) => net-(net*disc/100)
console.log(total(net,disc));