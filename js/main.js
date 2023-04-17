let inputMensaje = document.getElementById("inputMensaje");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let mensajeFinal = document.getElementById("mensajeFinal");
let imagenMensajeFinal = document.getElementById("imagenMensajeFinal");
let mensajeUno = document.getElementById("mensajeUno");
let mensajeDos = document.getElementById("mensajeDos");
let contMensajeFinal = document.getElementById("contenedorMensajeFinal");
let btnCopiar = document.getElementById("btnCopiar");

function encriptadorTexto(texto) {
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}
function desencriptadorTexto(texto) {
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}

btnEncriptar.addEventListener("click", () => {
  if (inputMensaje.value == "") {
    imagenMensajeFinal.classList.remove("oculto");
    mensajeUno.classList.remove("oculto");
    mensajeDos.classList.remove("oculto");
    contMensajeFinal.classList.remove("ajustar-texto");
    btnCopiar.classList.remove("mostrar-btn-copiar");

    mensajeFinal.innerText = "";
  } else {
    imagenMensajeFinal.classList.add("oculto");
    mensajeUno.classList.add("oculto");
    mensajeDos.classList.add("oculto");
    contMensajeFinal.classList.add("ajustar-texto");
    btnCopiar.classList.add("mostrar-btn-copiar");
    mensajeFinal.innerText = encriptadorTexto(inputMensaje.value);
  }
});

btnDesencriptar.addEventListener("click", () => {
  if (inputMensaje.value == "") {
    imagenMensajeFinal.classList.remove("oculto");
    mensajeUno.classList.remove("oculto");
    mensajeDos.classList.remove("oculto");
    contMensajeFinal.classList.remove("ajustar-texto");
    btnCopiar.classList.remove("mostrar-btn-copiar");

    mensajeFinal.innerText = "";
  } else {
    mensajeFinal.innerText = desencriptadorTexto(inputMensaje.value);
  }
});

btnCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(mensajeFinal.innerText);
});
