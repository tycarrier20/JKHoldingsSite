/*
function checkScroll(){
    var startY = $('.navbar').height(); //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
*/
goToDealerships = () => {
    window.location = "dealerships.html";
}

goToBrands = () => {
    window.location = "brands.html";
}
//Test function for making sure page is linked
function sayHello() {
    alert("Hello there");
 }

 (function ($) {

    var previousScroll = 20;
    // scroll functions
    $(window).scroll(function(e) {

        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        
        if (scroll >= previousScroll) {
            $('.navbar').addClass("navbar-hide");
        }else if (scroll < previousScroll) {
            $('.navbar').removeClass("navbar-hide").addClass("navbar-show");
        }
        previousScroll = scroll;

    });
})(jQuery); 

(function ($) {

    // scroll functions
    $(window).scroll(function(e) {
        var scroll = $(window).scrollTop();
        
        if (scroll <= 20) {
            $('.navbar').removeClass("navbar-show",)
        }  
    });
})(jQuery);