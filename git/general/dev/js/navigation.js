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

//Dropdown
function myFunction() {
    document.querySelector(".dropdown div").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}