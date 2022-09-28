//Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
let horas,minutos,segundos;
let segundosF,minutosF,horasF;

horas=23;
minutos=59;
segundos=59;

segundosF=segundos+1;
minutosF=minutos;
horasF=horas;

if(segundosF===60){

    segundosF=0;
    minutosF++;

    if(minutosF===60){

        minutosF=0;
        horasF++;

        if(horasF===24){
    
            horasF=0;
        }
    }  
}

console.log(`${horasF}    ${minutosF}   ${segundosF}  `);



setSecond()
setMinut()
setHour()
showTime()
