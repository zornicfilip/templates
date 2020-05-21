const mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
};

//Sidebar
const mySidenav = document.getElementById("mySidenav");

function openNav() {
    mySidenav.classList.toggle("show_sidebar");
}
function theme0() {
    document.getElementsByTagName("body")[0].className = '';
    document.getElementsByTagName("body")[0].classList.add("theme0");
}
function theme1() {
    document.getElementsByTagName("body")[0].className = '';
    document.getElementsByTagName("body")[0].classList.add("theme1");
}
function theme2() {
    document.getElementsByTagName("body")[0].className = '';
    document.getElementsByTagName("body")[0].classList.add("theme2");
}

//Change color on scroll

window.onscroll = function() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        document.getElementsByTagName("nav")[0].classList.add("scroll");
        document.getElementById("navList").classList.add("menuLight");
    } else {
        document.getElementsByTagName("nav")[0].classList.remove("scroll");
        document.getElementById("navList").classList.remove("menuLight");
    }
};