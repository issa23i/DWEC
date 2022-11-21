const d=document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

    //vamos a crear un span debajo del input
    $inputs.forEach(input=>{
        const $span=d.createElement("span");
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("contact-form-error","none");
        input.insertAdjacentElement("afterend",$span);

    })

    //validamos a medida que se introduce el texto, si no con evento submit
    d.addEventListener("keyup",e=>{
        if (e.target.matches(".contact-form [required]")){
            let $input =e.target, 
            pattern = $input.pattern || $input.dataset.patter;

            if(pattern && $input.value!==""){
                let regex=new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
            if(!pattern){
                return $input.value===""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
                }
            


        }

    })

    d.addEventListener("submit",e=>{
        e.preventDefault();//hay que eliminarlo si se envía, por ejemplo, con https://formsubmit.co/your@email.com
        const $loader = d.querySelector(".contact-form-loader"),
         $response = d.querySelector(".contact-form-response");

         $loader.classList.remove("none");
         setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove ("none");
            $form.reset();
            setTimeout(()=>$response.classList.remove ("none"),3000)
         }, 3000);
    })
}