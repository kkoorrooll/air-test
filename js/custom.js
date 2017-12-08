// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }),
    $('.custSlider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        autoplaySpeed: 800,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
// Form Popup
    
    // открыть по кнопке
    $('.showForm').click(function() { 
        $('.overForm').fadeIn();
    });

    // закрыть крестиком
    $('.closeForm').click(function() { 
        $('.overForm').fadeOut();
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.popupForm');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.overForm').fadeOut();
        }
    });
    
    //Post
    
    $(".callback").submit(function() {
        $.ajax({
            type: "POST",
            url: "./mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".callback").trigger("reset");
        });
        return false;
    });
    
    //Docs Popup
    $('.image-popup').magnificPopup({
        type: 'image'
    });
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: $('.single-page-nav').outerHeight()
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
})