import STRIPE_KEYS from './stripe-keys.js'

const d = document,
$donacion = d.getElementById('donacion'),
$template = d.getElementById('cafe'),
$fragment = d.createDocumentFragment();

fetch('https://api.stripe.com/v1/products', {
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
})
.then(res => {
    console.log(res);
    return res.json()
})
.then(json => console.log(json))

fetch('https://api.stripe.com/v1/prices', {
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
})
.then(res => {
    console.log(res);
    return res.json()
})
.then(json => console.log(json))