const d = document;
export function shortcuts(event) {
  //info
  /* console.log(event.type);
console.log(event.key);
console.log(event.keyCode);/deprecated en su lugar usar event.code
console.log(`ctrl: ${event.ctrlKey}`);
console.log(`alt: ${event.altKey}`);//cuidado porque al pulsar ALT+a puede salir un carácter especial y la validación de abajo ya no vladría. 
console.log(`shift: ${event.shiftKey}`); */

  if (event.key === "a" && event.ctrlKey)
    alert("Has lanzado alerta con el teclado");
}

let x = 0,
  y = 0;

export function moveBall(event, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    //obtener los limites del círculo y el rectángulo
    limitsBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  //console.log(event.code);

  switch (event.code) {
    //usar preventDefault para evitar el desplazamiento en el scroll
    case "ArrowLeft":
      if (limitsBall.left - 5 > limitStage.left) {
        event.preventDefault();
        x--;
      }
      break;
    case "ArrowUp":
      if (limitsBall.top - 5 > limitStage.top) {
        event.preventDefault();
        y--;
      }
      break;
    case "ArrowDown":
      if (limitsBall.bottom + 5 < limitStage.bottom) {
        event.preventDefault();
        y++;
      }
      break;
    case "ArrowRight":
      if (limitsBall.right + 5 < limitStage.right) {
        event.preventDefault();
        x++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
