const imagenes = [
  "imagenes/ima1.png",
  "imagenes/ima2.png",
  "imagenes/ima3.jpg"
];
let imagenActual = 0;

function mostrarImagen(direccion) {
  imagenActual = (imagenActual + direccion + imagenes.length) % imagenes.length;
  document.getElementById("imagenGaleria").src = imagenes[imagenActual];
}

document.getElementById("boton-anterior").addEventListener("click", () => mostrarImagen(-1));
document.getElementById("boton-siguiente").addEventListener("click", () => mostrarImagen(1));
