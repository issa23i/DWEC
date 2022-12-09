/**
 * 
 */
 fetch('https://randomuser.me/api/') // 1
 .then(response => response.json()) // 2
 .then(console.log) // 3
 .catch(error => console.error('algo salio mal' + error)); // 4
