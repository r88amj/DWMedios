// Cambio de color navbar on scroll
$(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});


// Ocultar o mostrar boton contácto
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
        $(".button-red").removeClass("btnred");
    } else {
        $(".button-red").addClass("btnred");
    }
});

// cambiar icono en scroll
var initialSrc = "img/red.svg";
var scrollSrc = "img/white.svg";

$(window).scroll(function () {
    var value = $(this).scrollTop();
    if (value > 50) $(".logo").attr("src", scrollSrc);
    else $(".logo").attr("src", initialSrc);
});


// cambio de pill en tabs on hover
$('#v-pills-tab a').hover(function(e) {
    e.preventDefault()
    $(this).tab('show')
});

 
// ocultar menu desplegable cuando se da click en algun link
$(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});

$(".dropdown-item").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});

// Cerrar navbar collapse con click fuera
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
// cambio de pill en tabs on hover seccion areas
$(".box ul li").hover(function(){
    $(this).trigger('click');
    });


    // cambio de pill en tabs on hover seccion proyectos
$(".projectsBox ul li").hover(function(){
    $(this).trigger('click');
    });