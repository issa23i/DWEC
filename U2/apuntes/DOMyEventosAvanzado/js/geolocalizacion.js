const d= document,
n=navigator;

export default function getGeolocation(id){
    const $id=d.getElementById(id),
    options={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge: 0
    };

    const success=position=>{
        let coords=position.coords;
        $id.innerHTML=
        `
        <p>Tu posición actual es:</p>
        <ul>
        <li>Latitud: ${coords.latitude}<b></b></li>
        <li>Longitud: ${coords.longitude}<b></b></li>
        <li>Precisión: ${coords.accuracy}<b></b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps </a>
        `
    }
    const error =err=>{
        $id.innerHTML=`<p><mak>Error ${err.code}:${err.message}</mak></p>`
        console.error(`Error ${err.code}: ${err.message}`)
    }

    n.geolocation.getCurrentPosition(success,error,options);//con wathPosition tendríamos un watch
}