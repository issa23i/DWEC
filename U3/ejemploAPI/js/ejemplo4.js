/**
 * fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(console.log);
*/
fetch("https://reqres.in/ap/users", {
  method: "POST",
  body: JSON.stringify({ 'name': "isa" , 'job': "programadora"}),
})
  .then((response) => {
    console.log(response.status); 
    if(response.ok){
        console.log('todo ok');
    } else {
        console.log('algo salió mal');
    }
    return response.json()})
  .catch((error) => console.log(' IMprimir error  :' + error));
