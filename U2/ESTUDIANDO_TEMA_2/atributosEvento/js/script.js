const $d = document
const $body = $d.body
const $table = $d.querySelector('table')

console.log($table.DOCUMENT_TYPE_NODE);
console.log($table.DOCUMENT_POSITION_PRECEDING);
console.log($table.COMMENT_NODE);
console.log($table.accessKey);
console.log($table.accessKeyLabel);
console.log($table.click);
console.log($table.createTBody);
console.log($table.attributes);
console.log($table.namespaceURI);

const propiedades = (e) => {
    console.log(e.timeStamp);
    console.log(e.type);
    console.log(e.view);
    console.log(e.x);
    console.log(e.y);
    console.log(e.shiftKey);
    console.log(e.altKey);
    console.log(e.metaKey);
}

//$body.addEventListener('click',propiedades)
//$body.addEventListener('dblclick', e => console.log(e.altKey))


