//let herramienta = ["pencil", "brush", "eraser"];

let pencil = document.getElementById("pencil");
let brush = document.getElementById("brush");
let eraser = document.getElementById("eraser");

let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let color3 = document.getElementById("color-3");
let color4 = document.getElementById("color-4");

let rojo = false;
let verde = false;
let naranja = false;
let negro = false;

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.strokeStyle = "white";
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 1200, 600);

let puedoDibujar = false;

function checkColor() {
  if (rojo) {
    pincel.strokeStyle = "#FC3939";
  } else if (verde) {
    pincel.strokeStyle = "#6CFF80";
  } else if (naranja) {
    pincel.strokeStyle = "#FFB950";
  } else if (negro) {
    pincel.strokeStyle = "#000000";
  }
}

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
    pincel.strokeStyle = checkColor();
    pincel.linecap = "round";
    pincel.lineJoin = "round";
    if (document.getElementById("pencil").hasAttribute("active")) {
      pincel.lineWidth = 5;
      pincel.stroke();
    } else if (document.getElementById("brush").hasAttribute("active")) {
      pincel.lineWidth = 10;
      pincel.stroke();
    } else if (document.getElementById("eraser").hasAttribute("active")) {
      pincel.strokeStyle = "white";
      pincel.lineWidth = 10;
      pincel.stroke();
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
      color4.removeAttribute("active");
      rojo = true;
      verde = false;
      naranja = false;
      negro = false;
      break;
    case "color-2":
      e.target.toggleAttribute("active");
      color1.removeAttribute("active");
      color3.removeAttribute("active");
      color4.removeAttribute("active");
      verde = true;
      rojo = false;
      naranja = false;
      negro = false;
      break;
    case "color-3":
      e.target.toggleAttribute("active");
      color1.removeAttribute("active");
      color2.removeAttribute("active");
      color4.removeAttribute("active");
      rojo = false;
      verde = false;
      negro = false;
      naranja = true;
      break;
    case "color-4":
      e.target.toggleAttribute("active");
      color1.removeAttribute("active");
      color2.removeAttribute("active");
      color3.removeAttribute("active");
      naranja = false;
      rojo = false;
      verde = false;
      negro = true;
      break;
    default:
      naranja = false;
      rojo = false;
      verde = false;
      negro = false;
  }
}

document.addEventListener("click", elegirHerramienta);

document.addEventListener("click", elegirColor);
