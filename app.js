let herramienta = ["pencil", "brush", "eraser"];
x = 0;
let activo = false;

let pencil = document.getElementById("pencil");
let brush = document.getElementById("brush");
let eraser = document.getElementById("eraser");

let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let color3 = document.getElementById("color-3");

let rojo = false;
let verde = false;
let naranja = false;

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 800, 400);

let puedoDibujar = false;

function checkColor() {
  if (rojo) {
    pincel.fillStyle = "#FC3939";
  } else if (verde) {
    pincel.fillStyle = "#6CFF80";
  } else if (naranja) {
    pincel.fillStyle = "#FFB950";
  }
}

function dibujarCirculo(evento) {
  if (puedoDibujar) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    if (document.getElementById("pencil").hasAttribute("active")) {
      pincel.fillStyle = checkColor();
      pincel.beginPath();
      pincel.arc(x, y, 5, 0, 2 * 3.14);
      pincel.fill();
    } else if (document.getElementById("brush").hasAttribute("active")) {
      pincel.fillStyle = checkColor();
      pincel.beginPath();
      pincel.arc(x, y, 10, 0, 2 * 3.14);
      pincel.fill();
    } else if (document.getElementById("eraser").hasAttribute("active")) {
      pincel.fillStyle = "white";
      pincel.beginPath();
      pincel.arc(x, y, 10, 0, 2 * 3.14);
      pincel.fill();
    }
  }
}

function habilitarDibujar() {
  puedoDibujar = true;
}

function deshabilitarDibujar() {
  puedoDibujar = false;
}

pantalla.onmousemove = dibujarCirculo;

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;

// este switch si funciona
function elegirHerramienta(e) {
  if (e.target.id !== "") {
    switch (e.target.id) {
      case "pencil":
        console.log("pencil");
        e.target.toggleAttribute("active");
        eraser.removeAttribute("active");
        brush.removeAttribute("active");
        break;
      case "brush":
        console.log("brush");
        e.target.toggleAttribute("active");
        pencil.removeAttribute("active");
        eraser.removeAttribute("active");
        break;
      case "eraser":
        console.log("eraser");
        e.target.toggleAttribute("active");
        brush.removeAttribute("active");
        pencil.removeAttribute("active");
        break;
      default:
    }
  } else if (e.target.id == "" && e.target.parentNode.id !== "") {
    switch (e.target.parentNode.id) {
      case "pencil":
        console.log("pencil");
        e.target.parentNode.toggleAttribute("active");
        eraser.removeAttribute("active");
        brush.removeAttribute("active");
        break;
      case "brush":
        console.log("brush");
        e.target.parentNode.toggleAttribute("active");
        pencil.removeAttribute("active");
        eraser.removeAttribute("active");
        break;
      case "eraser":
        console.log("eraser");
        e.target.parentNode.toggleAttribute("active");
        pencil.removeAttribute("active");
        brush.removeAttribute("active");
        break;
      default:
    }
  } else {
    console.log("nada");
  }
}

function elegirColor(e) {
  switch (e.target.id) {
    case "color-1":
      e.target.toggleAttribute("active");
      color2.removeAttribute("active");
      color3.removeAttribute("active");
      rojo = true;
      verde = false;
      naranja = false;
      break;
    case "color-2":
      e.target.toggleAttribute("active");
      color1.removeAttribute("active");
      color3.removeAttribute("active");
      verde = true;
      rojo = false;
      naranja = false;
      break;
    case "color-3":
      e.target.toggleAttribute("active");
      color1.removeAttribute("active");
      color2.removeAttribute("active");
      naranja = true;
      rojo = false;
      verde = false;
      break;
    default:
  }
}

document.addEventListener("click", elegirHerramienta);

document.addEventListener("click", elegirColor);
