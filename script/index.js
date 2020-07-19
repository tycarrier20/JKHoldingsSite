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

