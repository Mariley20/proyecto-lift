$(document).ready(function () {
    let emailValido = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    let nombreApellidosValido = /^[A-Za-z]+$/;

    $("#correo").keydown(validarCorreo);
    $("#nombre, #apellido").keyup(validarNombreApellido);

    function validarCorreo(){
        //console.log(emailValido.test($(this).val()));
        if (emailValido.test($(this).val())) {  
            console.log("entro") 
            $("#spanCorreo").attr('class', 'glyphicon glyphicon-ok form-control-feedback')
        }else{
            console.log('entro')
            $("#spanCorreo").attr('class', 'glyphicon glyphicon-remove form-control-feedback')
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

/*
        
    $(".boton").click(function () {        
        $(".error").remove();        
        if ($(".nombre").val() == "") {            
            $(".nombre").focus().after("<span class='error'>Ingrese su nombre</span>");            
            return false;        
        } else if ($(".email").val() == "" || !emailValido.test($(".email").val())) {            
            $(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");            
            return false;        
        }    
    });    
    $(".nombre, .apellidos").keyup(function () {        
        if ($(this).val() != "") {            
            $(".error").fadeOut();            
            return false;        
        }    
    });    
    $(".email").keyup(function () {            });
});
*/