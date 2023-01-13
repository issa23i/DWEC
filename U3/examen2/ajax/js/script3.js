const $form = document.querySelector('.miFormulario')

const enviarForm = (e) => {
    e.preventDefault()
    let formData1 = new FormData($form)
    let url = 'https://formsubmit.co/ajax/ipaslop262@iesmartinezm.es'
    
    fetch(url,{
        method: 'POST',
        body: formData1
      })
    .then(res => console.log(res.ok))
}

$form.addEventListener('submit',enviarForm)