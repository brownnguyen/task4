let menuButton = document.querySelector('.menu__button');
let headerDrawer = document.querySelector('.header-drawer');
let header = document.querySelector('.header');
menuButton.onclick = function () {
    menuButton.classList.toggle('active');
    if (menuButton.classList.contains('active')) {
        headerDrawer.classList.add('expand')
    }
    else {
        headerDrawer.classList.remove('expand');
    }
}
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        header.classList.add("stick");
    }
    else {
        header.classList.remove('stick')
    }
    if (window.pageYOffset > window.innerHeight / 2) {
        document.querySelector('#backTop').style.opacity = 1;
        document.querySelector('#backTop').style.visibility = "visible"
    }
    else {
        document.querySelector('#backTop').style.opacity = 0;
        document.querySelector('#backTop').style.visibility = "hidden"
    }
}
window.onload = function () {
    $('.slice__content').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false
    });
    var $statusActive = $('.number .active');
    var $statusTotal = $('.number .total');
    var $slickElement = $('.img-man');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $statusActive.text("0" + i)
        $statusTotal.text("0" + slick.slideCount);
    });
    $slickElement.slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
        }
    });
}
$('#backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});