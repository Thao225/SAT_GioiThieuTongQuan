window.onload=function(){

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate_animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



  let truong = document.querySelector(".truong")
    let coSos = document.querySelectorAll(".coSos")
    let truongs = document.querySelector(".truongs")
    var current = 0;
    var w = truongs.offsetWidth;
    console.log(w);
    const changeImg = function() {
        if (current == coSos.length-1) {
            truong.style.transition = 'transform 0s';
            truong.style.transform = `translateX(${0}px)`;
            current = 0; 
        }
        else {
            current++;
            truong.style.transform = `translateX(${-w * current}px)`;
        }
    }
    let clear = setInterval(() => { changeImg()}, 5000);
    let prev = document.getElementById("muiChuyenTrai")
    let next = document.getElementById("muiChuyenPhai")
    console.log(prev, next)
        prev.onclick = function() {
            clearInterval(clear);
            if (current == 0) {
                current = coSos.length-1; 
                truong.style.transition = 'transform 0s';
                truong.style.transform = `translateX(${-w * current}px)`;
            }
            else {
                current--;
                truong.style.transform = `translateX(${-w * current}px)`;
            }
            clear = setInterval(() => { changeImg()}, 5000); 
        }
        next.onclick = function() {
            clearInterval(clear);
            changeImg();
            clear = setInterval(() => { changeImg()}, 5000);
        }

}
