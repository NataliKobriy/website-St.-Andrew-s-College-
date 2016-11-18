$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

$("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
});
//$('.carousel').carousel({
//    interval: 2000
//});
var g = new Gallery(document.querySelectorAll('#gallery .photos img'), function () {
});
function Gallery (img, onrange) {
    var i = 0;

    var timer = setInterval(show, 3000);

    function show() {

        img[i].className = ' ';
        i++;
        if (i >= img.length) {
            i = 0;
            onrange();
        }
        img[i].className = 'showed';

    }
}