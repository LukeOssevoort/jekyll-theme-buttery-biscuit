function navbarPadding(el) {
    var navbar = document.getElementById('navbar');
    el.style.paddingTop = navbar.offsetHeight.toString() + "px";
    navbar.classList.add("is-fixed");
}

var container = document.getElementsByClassName("container")[0];

container.onload = navbarPadding(container);