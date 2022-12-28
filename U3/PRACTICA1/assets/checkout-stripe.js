import stripeKeys from './stripe-keys.js';
import STRIPE_KEYS from './stripe-keys.js'

const d = document,
$donacion = d.getElementById('donar'),
$template = d.getElementById('donacion-template'),
// se crea un fragmento para no sobrecargar la carga del dom al añadir elementos dinámicamente
$fragment = d.createDocumentFragment();
let fetchOptions = {
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
}

let prices, products

const moneda = num => `${num.slice(0, -2)},${num.slice(-2)} €`

Promise.all([
    fetch('https://api.stripe.com/v1/products',fetchOptions),
    fetch('https://api.stripe.com/v1/prices', fetchOptions),
])
.then((responses) => Promise.all(responses.map(res => res.json())))
.then(json => {
//    console.log(json)
    products = json[0].data
    prices = json[1].data
//    console.log(products, prices);
    // de cada id juntamos el precio y el producto
prices.forEach(el => {
    let productData = products.filter(product => product.id === el.product)
    console.log(productData);

    // a la pasarela de pago hay que enviarle el id, por eso se le añade un atributo data-price
    $template.querySelector('.donacion').setAttribute("data-price",el.id)
    $template.querySelector('img').src = productData[0].images[0]
    $template.querySelector('img').alt = productData[0].name
    $template.querySelector('figcaption').innerHTML = `
    ${productData[0].name}
    <br>
    ${moneda(el.unit_amount_decimal)} ${el.currency}
    `

    // clonar template con todo lo que tiene internamente, para añadir todos los productos
    let $clone = d.importNode($template,true)
    $fragment.appendChild($clone)
});
$donacion.appendChild($fragment)
})
.catch(err => {
    console.log(err)
    let message = err.statusText || 'Ocurrió un error cargando la API de Stripe'
    $donacion.innerHTML = `<p> Error ${err.status} : ${message}</p>`
})

d.addEventListener('click',(e) => {
    if(e.target.matches('.donacion *')){
        let price = e.target.parentElement.getAttribute('data-price')
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems:[{price,quantity:1}]
            ,mode:'payment'
            ,successUrl:'http://127.0.0.1:5500/U3/PRACTICA1/assets/stripe-success.html'
            ,cancelUrl:'http://127.0.0.1:5500/U3/PRACTICA1/assets/stripe-cancel.html'
        })
        .then((res) => {
            if (res.error){
                $donacion.insertAdjacentHTML('afterend',res.error.message)
            }
        })
    }
})