window.onscroll = function() {
    // Menu with 768
    let btn=document.querySelector("#menuRutGon>i");
    let thanhMenu = document.querySelector("nav.mucLucs");
    btn.onclick = function () {
        thanhMenu.style.display="block";
    }
    let closemenu = document.getElementById("closeMenu");
    closemenu.onclick = function () {
        thanhMenu.style.display="none";
    }


    let coMucLucs=document.querySelectorAll(".coMucLuc");
    let thongTinTQs=document.querySelectorAll(".thongTinTQ");
    for (let i = 0; i < coMucLucs.length; i++) {
        coMucLucs[i].onmouseenter=function(){
            thongTinTQs[i].style.display="flex";
            thongTinTQs[i].onmouseleave=function(){
                thongTinTQs[i].style.display="none";
            }
        }
        
    }
}