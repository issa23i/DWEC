/**
 * PROMISE ESTADOS PENDIENTE ACEPTADA RECHAZADA
 * - FETCH DEVUELVE VER OK,STATUS
 *
 *
 *
 * OPERACIONES CON FETCH
 * - CREATE INSERT POST
 * - READ SELECT GET
 * UPDATE UPDATE PUT/PATGCH
 * DELETE DELETE DELETE
 * --> https://reqres.in/
 *
 *
 *
 * user-agent simula un navegador o dispositivo
*/
fetch("http://localhost:3333/todos/5", {
  method: "PUT",
  body: JSON.stringify({
    userId: 1,
    id: 5,
    title: "hello task",
    completed: false,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  /**
fetch("http://localhost:3333/todos/1", {
  method: "PATCH",
  body: JSON.stringify({
    completed: false,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
 */

/** 
fetch("https://jsonplaceholder.typicode.com/todos/1", {
method: "DELETE"
})
.then(response => {
    console.log(response);
    console.log(response.status);
    return response.json()})
.then(json => console.log(json))
*/
/** 
const id = "ditto";
const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await res.json();
    console.log(json);
    //if (!res.ok) throw new Error ("Ocurrió un error al solicitar los datos");
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
  } catch (err) {
    console.error(err);
  }
};
fetchPokemon(id);

async function getUser(id) {
  if (id) {
    return await db.user.byId(id);
  } else {
    throw "Invalid ID!";
  }
}
try {
  let user = await getUser(123);
} catch (err) {
  console.error(err);
}
*/