export default function hamburgerMenu(panelBtn,panel,menuLink){
    const d=document;
    d.addEventListener("click",e=>{
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){//para que se active también al pulsar en el span dentro del buttón
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");//para animar el botón
        }

        if (e.target.matches(menuLink)){//para cerrar el menú al presionar cualquier enlace del mismo.
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}