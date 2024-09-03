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

let mouse=document.querySelectorAll("a")
mouse.onmouseenter=function () {
    this.style.cursor="pointer"
}



}



  


// sau 5 giây thì dừng lại
// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

// video
// var video = document.querySelector("video"),
// container = document.querySelector("#container");

// var setVideoDimensions = function() {
// var w = video.videoWidth;
// var videoRatio = (w / h).toFixed(2);

// var containerStyles = window.getComputedStyle(container),
//   minW = parseInt(containerStyles.getPropertyValue("width")),
//   minH = parseInt(containerStyles.getPropertyValue("height"));
// var widthRatio = minW / w,
//   heightRatio = minH / h;
// let newWidth = 0;
// let newHeight = 0;
// if (widthRatio > heightRatio) {
//   newWidth = minW;
//   newHeight = Math.ceil(newWidth / videoRatio);
// } else {
//   newHeight = minH;
//   newWidth = Math.ceil(newHeight * videoRatio);
// }

// video.style.width = newWidth + "px";
// video.style.height = newHeight + "px";
// };
// video.addEventListener("loadedmetadata", setVideoDimensions, false);
// window.addEventListener("resize", setVideoDimensions, false);