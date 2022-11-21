const d=document, 
n=navigator;

export default function webCam(id){
    const $video=d.getElementById(id);
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true,audio:false})
        .then((stream)=>{
            $video.srcObject=stream;
            $video.play()
        })
        .catch((err)=>{
            const $mensajeError=d.createElement("div");
            $mensajeError.innerHTML=`<p><mark>${err}</mark></p>`
            $video.insertAdjacentElement("beforebegin",$mensajeError)
            console.error(`Sucedió el siguiente error ${err}`)
        })
    }
}