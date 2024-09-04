window.onscroll = function() {
     //---------- HIỆU ỨNG CHO THANH MENU KHI TRƯỢT TRANG -----------------------------------------------------------//
     const menu = document.querySelector("#menu");
     const scrollY = window.scrollY; //số pixel đã được cuộn dọc theo trục Y
     const gioithieuKhoa=document.querySelector(".truongs")
     const footer = document.getElementById("footer")
     console.log(scrollY);
     if (scrollY > 0) {
         menu.style.position="fixed"
         menu.style.opacity = 0.9
         } 
         else {
             menu.style.position="relative"
             menu.style.opacity = 1
         }

}


