// Create a parent window that opens a child window. The new window should close after 5 seconds.

var btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    open("index2.html","","left=300,top=300,width=500,height=500");
});