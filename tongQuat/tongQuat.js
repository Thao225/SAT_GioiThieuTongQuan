window.onload = function(){
    let btn=document.querySelector("#menuRutGon>i")
    let thanhMenu = document.querySelector("nav.mucLucs")
    btn.onclick = function () {
        thanhMenu.style.display="block"
    }
    let closemenu = document.getElementById("closeMenu")
    closemenu.onclick = function () {
        thanhMenu.style.display="none"
    }
    
    let coMucLucs=document.querySelectorAll(".coMucLuc");
    let thongTinTQs=document.querySelectorAll("nav.thongTinTQ");
    for (let i = 0; i < coMucLucs.length; i++) {
        coMucLucs[i].onclick=function(){
            if (thongTinTQs[i].classList.contains("haha")) {
                thongTinTQs[i].classList.remove("haha");
            }
            else
            {
                thongTinTQs[i].classList.add("haha");
            }
        }
        
    }

}