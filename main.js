$(document).ready(function(){
    $('nav.nav1 a:first').addClass('active');
    $('').hide();
    $('').show(); 

    $('nav.nav1 a').click(function(){
        $('nav.nav1 a').removeClass('active');
        $(this).addClass('active');
        $('').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});

