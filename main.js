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

