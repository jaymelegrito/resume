window.onscroll = function() {myFunction()};

var navbar = document.getElementsByTagName("nav");
var header = document.getElementsByTagName("header");
var ht = header.height;

function myFunction() {
    if (window.pageYOffset > ht) {
        navbar.classList.add("nav-scrolled")
    }
    else {
        navbar.classList.remove("nav-scrolled");
    }
}