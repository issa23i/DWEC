
const d=document;
export default function darkTheme(btnDark,classDark){//todos los elementos a cambiar tendrán una etiqueta data
    const $themeBtn = d.querySelector(btnDark),
    $selectors=d.querySelectorAll("[data-dark]");
    let sun="☀️", moon="🌙";



    d.addEventListener("click",e=>{
        if (e.target.matches(btnDark)){
            if ($themeBtn.textContent===moon){
                $selectors.forEach(el=>el.classList.add(classDark));
                $themeBtn.textContent=sun;
            }else{
                $selectors.forEach(el=>el.classList.remove(classDark));
                $themeBtn.textContent=moon;
            }
        }
    })
}