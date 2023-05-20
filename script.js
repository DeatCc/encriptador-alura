var botonEncriptar = document.querySelector(".button-encriptar");
var botonDesencriptar = document.querySelector(".button-desencriptar");
var muñeco = document.querySelector(".muñeco");
var contenidoParrafo = document.querySelector(".contenido-parrafo");
var resultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


function encriptar (){
    ocultarAdelante();
    var cajatexto = recuperartexto();
    resultado.textContent = encriptartexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto= recuperartexto();
    resultado.textContent = desencriptartexto(cajatexto);
}

/*min 36*/