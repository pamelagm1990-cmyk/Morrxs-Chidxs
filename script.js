
function calcularPrecio(precioUnitario, cantidad) {
  const total = precioUnitario * cantidad;
  return total;
}

function comprar(cantidad) {
  return cantidad <= 5;
}
const botoncomprar= document.querySelector("#boton-comprar");
const contadorplayeras = document.querySelector("#contador-playeras");
function verificarDisponibilidad(cantidad) {
  return cantidad > 0;
}
botoncomprar.addEventListener("click", function() {
  console.log("El usuario hizo clic");

  let playerasDisponibles = Number(contadorplayeras.textContent);

    if (verificarDisponibilidad(playerasDisponibles)) {

        playerasDisponibles = playerasDisponibles - 1;

        contadorplayeras.textContent = playerasDisponibles;

        mensaje.textContent = "¡Compra realizada! Gracias por tu compra.";

    } else { botoncomprar.textContent = "No disponible";
        botoncoprar.disabled = true;

        mensaje.textContent = "Lo sentimos, ya no hay playeras disponibles.";
  }
});
