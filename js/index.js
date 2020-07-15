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
    if(window.pageYOffset > 100){
        header.classList.add("stick");
    }
    else{
        header.classList.remove('stick')
    }
}