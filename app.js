let herramienta;
let color;

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.strokeStyle = "white";
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 1200, 600);

let puedoDibujar = false;

function start(evento) {
  pincel.beginPath();
  pincel.moveTo(
    evento.pageX - pantalla.offsetLeft,
    evento.pageY - pantalla.offsetTop
  );
  puedoDibujar = true;
  evento.preventDefault();
}

function dibujar(evento) {
  if (puedoDibujar) {
    pincel.lineTo(
      evento.pageX - pantalla.offsetLeft,
      evento.pageY - pantalla.offsetTop
    );
    pincel.strokeStyle = color;
    pincel.linecap = "round";
    pincel.lineJoin = "round";
    if (herramienta == "pencil") {
      pincel.lineWidth = 5;
      pincel.stroke();
    } else if (herramienta == "brush") {
      pincel.lineWidth = 10;
      pincel.stroke();
    } else if (herramienta == "eraser") {
      pincel.strokeStyle = "white";
      pincel.lineWidth = 10;
      pincel.stroke();
    } else if (herramienta == "forms") {
      pincel.fillStyle = color;
      pincel.fill();
      pincel.linecap = "none";
      pincel.lineJoin = "none";
    }
  }
  evento.preventDefault();
}

function stop(evento) {
  if (puedoDibujar) {
    pincel.stroke();
    pincel.closePath();
    puedoDibujar = false;
  }
  evento.preventDefault();
}

function habilitarDibujar() {
  puedoDibujar = true;
}

pantalla.addEventListener("touchstart", start, false);
pantalla.addEventListener("touchmove", dibujar, false);
pantalla.addEventListener("mousedown", start, false);
pantalla.addEventListener("mousemove", dibujar, false);

pantalla.addEventListener("touchend", stop, false);
pantalla.addEventListener("mouseup", stop, false);
pantalla.addEventListener("mouseout", stop, false);

function elegirHerramienta(element) {
  for (x = 0; x < 4; x++) {
    element.parentNode.children[x].removeAttribute("active");
  }
  herramienta = element.id;
  element.toggleAttribute("active");
}

function elegirColor(element) {
  for (x = 0; x < 4; x++) {
    element.parentNode.children[x].removeAttribute("active");
  }
  color = window
    .getComputedStyle(element, null)
    .getPropertyValue("background-color");
  element.toggleAttribute("active");
}
