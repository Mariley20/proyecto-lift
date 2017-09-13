$(document).ready(function () {
    let emailValido = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    let nombreApellidosValido = /^[A-Za-z]+$/;

    $("#correo").keydown(validarCorreo);
    $("#nombre, #apellido").keyup(validarNombreApellido);

    function validarCorreo(){
        //console.log(emailValido.test($(this).val()));
        if (emailValido.test($(this).val())) {
            $("#spanCorreo i").attr('class', 'glyphicon glyphicon-ok form-control-feedback')
        }else{
            console.log('entro')
            $("#spanCorreo i").attr('class', 'glyphicon glyphicon-remove form-control-feedback')
        }
    }
    function validarNombreApellido() {
        console.log(nombreApellidosValido.test($(this).val()));
        if ($(this).val() != "" && nombreApellidosValido.test($(this).val())) {            
            $(".error").fadeOut();            
            return false;        
        }
    }
});