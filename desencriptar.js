/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var botonEncriptar = document.querySelector("#btn-desencriptar");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();

    var textoEncriptar = document.querySelector("#textoEncriptar");
    var texto = textoEncriptar.value;
    var filtro = 'abcdefghijklmnñopqrstuvwxyz';

    if(texto.length > 0){
        for (var i=0; i<texto.length; i++)
        {
            if(filtro.indexOf(texto.charAt(i)) != -1){

                var textoListo = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
                var campoTexto = document.querySelector("#msg");
                campoTexto.value = textoListo;
                swal("Desencriptando", "Visualice su mensaje..", "success");
                
        }else{
                swal("Error!" , "El campo no puede contener caracteres especiales", "error");
            }
        }
    }else{
    swal("Error!" , "El campo no puede estar vacio", "error");
    }
    textoEncriptar.value = "";
});

