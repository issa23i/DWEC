const d = document, 
w=window,
n=navigator;

export default function networkStatus(){
    const isOnLine=()=>{
        const $div=d.createElement("div");
        if (n.onLine){
            $div.textContent="Conexión OK";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }
        else{
            $div.textContent="Conexión perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(() => d.body.removeChild($div), 3000);
    }
    w.addEventListener("online", e=>isOnLine())
    w.addEventListener("offline", e=>isOnLine())
}