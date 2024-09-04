window.onscroll = function() {
    // Menu with 768
    let btn=document.querySelector("#menuRutGon>i")
    let thanhMenu = document.querySelector("nav.mucLucs")
    btn.onclick = function () {
        thanhMenu.style.display="block"
    }
    let closemenu = document.getElementById("closeMenu")
    closemenu.onclick = function () {
        thanhMenu.style.display="none"
    }
}