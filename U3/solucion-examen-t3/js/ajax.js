"use strict"
/*GENERICO*/
const checkResponse = response => {
    if (!response.ok) throw new Error("Código del estado no encontrado");
    return response;
}

/*RANDOMUSER*/
const mostrarUsuarios=()=>{
    const sexoSelect = document.querySelector("#usuarios");
    const sexo = sexoSelect.options[sexoSelect.selectedIndex].value;
    fetch('http://localhost:3000/results')
    .then(checkResponse)
    .then(response => response.json())
    .then(json => pintar(json,sexo))
    .catch(error => console.log(error));



}

function pintar(json,sexo) {
    //guardo solo 10 y mujeres u hombres dependiendo de 
    (sexo==="mujeres")? sexo="female":sexo="male"
    const jsonFiltrado = json.filter ((usuario)=>usuario.gender===sexo)
    for (let i = 0; i < 10; i++) {
        let img = document.createElement("IMG");
        img.setAttribute("height", "200px");
        img.setAttribute("width", "200px");
        img.setAttribute("src", jsonFiltrado[i].picture.medium);
        document.body.appendChild(img);
    }
}
const botonMostrarUsuarios= document.querySelector("#mostrarBtn");
botonMostrarUsuarios.addEventListener("click",mostrarUsuarios);



/*REQRES*/
const nuevoID= (arrayJson) => {
    console.log(arrayJson);
    arrayJson[arrayJson.length-1].id++
}

const guardarUsuario=(id)=>{
     //obtener los valores del formulario
     const fName=document.querySelector("#fName").value;
     const lName=document.querySelector("#lName").value;
     const email=document.querySelector("#email").value;
     const avatar=document.querySelector("#avatar").value;
    fetch("http://localhost:3000/data", {
        method: "POST",
        body: JSON.stringify({
            //id: id,
            email: email,
            first_name: fName,
            last_name: lName,
            avatar: avatar
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(checkResponse)
    //.then(response => response.json())
    //.then(json => pintar(json))
    .catch(error => console.log(error));
}
const crearUsuario= ()=>{
   
    
    fetch('http://localhost:3000/data')
    .then(checkResponse)
    .then(response => response.json())
    .then(json => nuevoID(json))
    .then (id=> guardarUsuario(id))
    .catch(error => console.log(error));
    


}
const botonCrearUsuario= document.querySelector("#crearBtn");
botonCrearUsuario.addEventListener("click",crearUsuario);

/*FORMULARIO*/
/*
const url = "https://formsubmit.co/ajax/javier.ferrer@iesmartinezm.es";
const form = document.querySelector(".miFormulario");
const post = (url, body) => fetch(url, {
    method: "POST",
    body
});

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    fetchFormulario(id);
})


const id = "javier.ferrer@iesmartinezm.es";
const fetchFormulario = async (id) => {
    try {
        const res = await fetch(`https://formsubmit.co/ajax/${id}`, {
            method: "POST",
            body: new FormData(form)
        });
        const json = await res.json();
        console.log(json);
    } catch (err) {
        console.error(err);
    }
}*/