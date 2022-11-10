// 4. Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón
// sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM).
// También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
// elementos desaparecidos (pero no los eliminados).

const $d = document;
const $body = $d.body;

const hideDelete = () => {
  // Array de los tres $p
  const pes = $d.querySelectorAll('p');
  console.log(pes);
  for (const p of pes) {
    p.addEventListener("mouseout", pHidden);
    p.addEventListener("click", pDelete);
  }
};

const pDelete = () => {
  this.remove();
};

const pHidden = () => {
  this.classList = ["oculto"];
};
hideDelete();
