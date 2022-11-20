const d=document;

export default function slider(){
    const $nextBtn =d.querySelector(".slider-btns .next"),
     $prevBtn =d.querySelector(".slider-btns .prev"),
     $slides =d.querySelectorAll(".slider-slide");

     let pos=0;
    d.addEventListener("click",e=>{
        if (e.target===$prevBtn){
            e.preventDefault();
            $slides[pos].classList.remove("active");
            pos--;
            if (pos<0){
                pos=$slides.length-1;
            }
            $slides[pos].classList.add("active");
        }
        else if (e.target===$nextBtn){
            e.preventDefault();
            $slides[pos].classList.remove("active");
            pos++;
            if (pos>=$slides.length){
                pos=0;
            }
            $slides[pos].classList.add("active");
        }
    })
}