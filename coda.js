document.getElementById("sidenav-button").addEventListener("click", toggleNav);

function toggleNav() {
    navSize = document.getElementById("sidenav").style.width;
    if (navSize == 384) {
        return closeNav();
    }
    return openNav();
}

function closeNav() {
    document.getElementsById("sidenav").style.width = "0px";
}
function openNav() {
    document.getElementsById("sidenav").style.width = "384px";
}