// Create an animation on the page that makes an orange marble move to the next location in
// the line every second. Allow the user to stop the animation by placing the cursor on any marble.
// The animation will restart again once the user removes the cursor from that marble.
// Add your own interesting feature to the script that tinkers with the speed or location of images

var current = 0;
var previous;
var array = document.getElementsByTagName("img");
var timeIn;

function move() {
    timeIn = setInterval(function () {
        previous = current;
        if (current < array.length - 1) {
            current++;
        } else if (current == array.length - 1) {
            current = 0;
        }

        array[current].src = "photos/marble2.jpg";
        array[previous].src = "photos/marble1.jpg";
    }, 2000);
}

function stop() {
    clearInterval(timeIn);
}


for (var i = 0; i < array.length; i++) {
    array[i].addEventListener("mouseover", stop);
    array[i].addEventListener("mouseout", move);
}

move();