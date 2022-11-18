const d=document,
w=window;
export default function scrollTopButton(btnScroll){
    const $scrollBtn=d.querySelector(btnScroll);
    w.addEventListener("scroll",e=>{
        let scrollTop=w.pageYOffset || d.documentElement.scrollTop;//si la primera propiedad no existe, usar la segunda
        if (scrollTop>600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }


    })

    d.addEventListener ("click", e=>{
        if (e.target.matches(btnScroll)){
            window.scrollTo({bevavior:"smooth",top:0})
        }
    })

}