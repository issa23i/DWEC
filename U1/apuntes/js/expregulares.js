// Notacion literal
const r = /.a.o/i;

// Notacion de objeto
r = new RegExp(".a.o", "i");
r = new RegExp(/.a.o/, "i");


r.test("gato"); // true

r.test("pato"); // true

r.test("perro"); // false

r.test("DATO"); // true (el flag i permite mayus/mints)

r = /[aeiou]/i; // RegExp que acepta vocales (mayus/minus)

r.test("a"); // true (es vocal)
r.test("E"); // true (es vocal, y tiene flag «i»)
r.test("t"); // false (no es vocal)

r = /[^aeiou]/i; // RegExp que acepta lo que no sea vocal (mayus/minus)

r.test("a"); // false
r.test("E"); // false
r.test("T"); // true
r.test("m"); // true

 r = /casa|cama/; // RegExp que acepta la primera o la segunda opcién

r.test("casa"); // true
r.test("cama"); // true
r.test("capa"); // false

 

r = /mas/i;
r.test("Formas"); // false (no empieza por “mas”)
r.test("Master"); // true

r.test("Masticar"); // true

r = /do$/i;

r.test("Vivido"); // true
r.test("Domino"); // fal^se

r = /fo\b/; // el contrario de \b es \B (que no acaba la palabra)

r.test("Esto es un parrafo de texto."); // true (tras "fo" hay un limite de palabra (espacio)

r.test("Esto es un parrafo."); // true (tras "fo" hay un signo de puntuación
r.test("Un circulo es una forma."); // false (tras "fo" sigue la palabra)
r.test("Frase que termina en fo"); // true (tras "fo" termina el string)

// ‘a’ aparece @ o mas veces en el string
r = /a*/;

r.test(""); // true ('a' aparece @ veces)
r.test("a"); // true (‘a' aparece 1 veces)
r.test("aa"); // true ('a' aparece 2 veces)
r.test("aba"); // true ('a' aparece 2 veces)
r.test("bbb"); // true ('a' aparece @ veces)
// ‘a’ aparece 1 0 mas veces (equivalente a /aa*/)
r = /a+/;

r.test(""); // false ('a' aparece 0 veces)
r.test("a") // true
r.test("aaa") // true

r = /disparos?/i;

r.test("Escuché disparos en la habitacion."); // true
r.test("Efectué un disparo al sujeto."); // true
r.test("La pistola era de agua."); // false

// Un namero formado de 2 digitos (del 0 al 9)
r = /[0-9]{2}/;

r.test(42); // true
r.test(88); // true
r.test(1); // false
r.test(100); // true

r = /^[0-9]{2}$/;
r.test(4); // false
r.test(55); // true
r.test(100); // false

r = /^[8-9]{3, }$/;

r.test(33); // false
r.test(4923); // true

r = /^[0-9]{2,5}$/;
r.test(2); // false

r.test(444); // true
r.test(543213); // false
