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
  // let khoas=document.querySelectorAll(".truo")
  // let truong=document.querySelector(".truongs .truong");
  // let coSos=document.querySelectorAll(".truongs .truong .coSos");
  // let nutChuyens=document.querySelectorAll(".truongs .nutchuyen li");
  // let trai=document.getElementById("muiChuyenTrai");
  // let phai=document.getElementById("muiChuyenPhai");
  // let nut=0;
  // let doDai=coSos.length-1;
  // function taiLaiCoSo(){
  //   let ktrTrai=coSos[nut].offsetLeft;
  //   truong.style.right= `${-ktrTrai}px`;
  //   let nutCuoi=document.querySelector(".truongs .nutChuyen li.nut");
  //   nutCuoi.classList.remove('nut');
  //   nutChuyens[nut].classList.add('nut');
  //   clearInterval(taiLai);
  //   taiLai= setInterval(()=>{phai.click()},5000)
  // }

  // phai.onclick=function(){
  //   if(nut+1>doDai)
  //   {
  //     nut=0;
  //   }
  //   else{
  //     nut+=1;
  //   }
  //   taiLaiCoSo();
  // }
  // trai.onclick=function(){
  //   if(nut-1<0){
  //     nut=doDai;
  //   }
  //   else{
  //     nut=nut-1;
  //   }
  //   taiLaiCoSo();
  // }
  // let taiLai=setInterval(()=>{phai.click()},5000);

  // nutChuyens.forEach((li,key)=>{
  //   li.addEventListener('click',function(){
  //     nut=key;
  //     taiLaiCoSo();
  //   })
  // })



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
