"use strict";
// 40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
// este formato dd/mm/aaa.
const yearsOld = (birdtday) => {
    let dateOfBirdtday = new Date(birdtday)
    let now = new Date()
    console.log(now.getDate() + '  ' + dateOfBirdtday.getDate());
    if(now.getMonth()>dateOfBirdtday.getMonth()){
        return now.getFullYear()-dateOfBirdtday.getFullYear() 
    } else if (now.getDate()>=dateOfBirdtday.getDate()){
        return now.getFullYear()-dateOfBirdtday.getFullYear() 
    } else {
        return now.getFullYear()-dateOfBirdtday.getFullYear() -1
    }
}

console.log(yearsOld('1975/11/01'));