window.onscroll = function() {myFunction()};

var navbar = document.getElementsByTagName("nav");
var hdr = $('header').height();

function myFunction() {
    if (window.pageYOffset > hdr) {
        navbar.classList.add("nav-scrolled")
    }
    else {
        navbar.classList.remove("nav-scrolled");

    }
}
