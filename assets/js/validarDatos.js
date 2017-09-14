$(document).ready(function () {
    let emailValido = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    let nombreApellidosValido = /^[A-Za-z]+$/;
    let btnValidoDatos = false;
    let btnValidoCorreo = false;
    let nombreCompleto = $("#nombre").val()+$("#apellido").val()
    $("#correo").keydown(validarCorreo);
    $("#nombre, #apellido").keyup(validarNombreApellido);
    localStorage.setItem($("#correo").val(), nombreCompleto);
    function validarCorreo(){
        //console.log(emailValido.test($(this).val()));
        if (emailValido.test($(this).val())) {
            $("#spanCorreo i").attr('class', 'glyphicon glyphicon-ok form-control-feedback');
            console.log('correcto')
            btnValidoCorreo = true;
        }else{
            $("#spanCorreo i").attr('class', 'glyphicon glyphicon-remove form-control-feedback');
            console.log('incorrecto')
            btnValidoCorreo = false;
        }
    }
    function validarNombreApellido(event) {
        console.log(nombreApellidosValido.test($(this).val()));
        let span = $(this).siblings()[1].id;
        if (nombreApellidosValido.test($(this).val())) {            
            $("#"+span).attr('class', 'glyphicon  form-control-feedback')
            console.log('correcto');
            btnValidoDatos = true;
        }else{
            $("#"+span).removeClass("glyphicon-ok").addClass("glyphicon-remove");
            console.log('incorrecto');
            btnValidoDatos = false;
        }
    }
    /*$(":checkbox").on('click', btnSiguiente);
    function btnSiguiente(){
        if($(":checkbox").prop('checked') && btnValidoDatos && btnValidoCorreo){
            $('#irMapa').removeAttr('disabled');
        }else{
            $("#irMapa").attr('disabled', 'disabled');
        }
    }*/
    

});