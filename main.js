$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.parrafito, .formulario1, .formulario2').hide();
    $('.slider').show(); 

$('ul.tabs li a').click (function(){
	$('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.slider').hide();

    var activeTab = $(this).attr('href');
	console.log(activeTab)
    $(activeTab).show();
    return false;
    });
});

function captura(){
    var personas=document.getElementById("info1").value;
    var fechas=document.getElementById("info2").value;
    var destino=document.getElementById("info3").value;
    var plan=document.getElementById("info4").value;
    var email=document.getElementById("info5").value;
    console.log(personas +" "+ fechas +" "+ destino +" "+ plan +" "+ email)
    if (personas==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info1").focus();
    }

    if (fechas==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info2").focus();
    }

    if (destino==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info3").focus();
    }

    if (plan==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info4").focus();
    }

    if (email==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info5").focus();
    }
}

function captura2(){
    var nombre=document.getElementById("info6").value;
    var apellido=document.getElementById("info7").value;
    var numero=document.getElementById("info8").value;
    var mail=document.getElementById("info9").value;
    console.log(nombre +" "+ apellido +" "+ numero +" "+ mail)
    if (nombre==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info6").focus();
    }

    if (apellido==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info7").focus();
    }

    if (numero==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info8").focus();
    }

    if (mail==""){
        alert("Todos los campos son obligatorios");
        document.getElementById("info9").focus();
    }
}