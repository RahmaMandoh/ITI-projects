var next = document.getElementById("next");
var prev = document.getElementById("prev");
var slideshow = document.getElementById("slideshow");
var stop = document.getElementById("stop");
var img1 = document.images[0];

var imgArr = ["Photo/1.jpg", "Photo/2.jpg", "Photo/3.jpg", "Photo/4.jpg", "Photo/5.jpg", "Photo/6.jpg"];
var Count = 0;

// Initialize with the first image
img1.src = imgArr[Count];

next.addEventListener("click", function () {
    if (Count < imgArr.length - 1) {
        Count++;
        img1.src = imgArr[Count];
        console.log(Count);
    }
});

prev.addEventListener("click", function (e) {
    if (Count > 0) {
        Count--;
        img1.src = imgArr[Count];
        console.log(Count);
    }
});

var time;
slideshow.addEventListener("click", function () {
    var i = Count; // Start from the current image
    function SS() {
        img1.src = imgArr[i];
        i = (i + 1) % imgArr.length; // Loop back to the start
        time = setTimeout(SS, 2000);
    }
    SS();
});

stop.addEventListener("click", function () {
    clearTimeout(time);
});