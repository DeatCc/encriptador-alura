var botonEncriptar = document.querySelector(".button-encriptar");
var botonDesencriptar = document.querySelector(".button-desencriptar");
var botonCopiar = document.querySelector(".button-copy")
var contenedor = document.querySelector(".temporal")
var resultado = document.querySelector(".texto-resultado")
var inicio = document.querySelector(".box-copy")

function princpio (){
    inicio.classList.add("ocultar")
    resultado.classList.add("ocultar")
}

function encriptar(){
   
     ocultarContenedor();
    resultado.textContent = encriptadora(recuperarTexto());
}

function desencriptar(){
    ocultarContenedor();
    resultado.textContent = desencriptadora(recuperarTexto());
}

function recuperarTexto(){
    var areaTexto = document.querySelector(".box-text"); 
    return areaTexto.value;
}

function ocultarContenedor(){
        contenedor.classList.add("ocultar")
        inicio.classList.add("agregar")
        resultado.classList.add("agregar")
}



function encriptadora(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
        
    }
    return textoFinal;
}


function desencriptadora(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;
}


function copiar(){
var texto = document.querySelector(".texto-resultado");
var copy = document.querySelector(".button-copy")

navigator.clipboard.writeText(texto.textContent);

}







princpio()

botonCopiar.onclick = copiar;
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
