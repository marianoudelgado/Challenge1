/*

var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();

    var copyText = document.querySelector("#msg");
    var campoCopiado =  copyText.value;
    document.execCommand("#btn-copy");
    console.log(campoCopiado);

});
*/
var copyTextareaBtn = document.querySelector('#btn-copy');

copyTextareaBtn.addEventListener('click', function(event) {
            var copyTextarea = document.querySelector('#msg');
            copyTextarea.select();
            var largoTexto = copyTextarea.value;
        if(largoTexto.length > 0){
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
                swal("Copiando", "Su mensaje esta en el portapapeles", "success");
                

            } catch (err) {
                console.log('Oops, unable to copy');
                swal("Error!" , "Lo siento no pudo ser copiado", "error");
            }
        }else{
            swal("Error!" , "El campo no puede estar vacio", "error");
        }
            copyTextarea.value = "";
});