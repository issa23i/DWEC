
// CONSTANTES
const $btn = d.getElementById('crearBtn')

// EVENTOS
const addUser = () => {
    // recoger valores
    let formData = new FormData()
    let fName = d.getElementById('fName').value
    formData.append('fName',fName)
    let lName = d.getElementById('lName').value
    formData.append('lName',lName)
    let email = d.getElementById('email').value
    formData.append('email',email)
    let avatar = d.getElementById('avatar').value
    formData.append('avatar', avatar)

    
    
    let url = 'http://localhost:3000/results'
    fetch(url, {
        method: 'POST',
        body: formData
      })
    .then(res => res.ok)
    .then(res=> console.log(res.ok))
    .catch(err => console.error(err))

}

// LISTENERS
$btn.addEventListener('click',addUser)

