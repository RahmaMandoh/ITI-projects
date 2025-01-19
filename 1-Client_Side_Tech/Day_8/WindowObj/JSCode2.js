var word = "Welcome To Second Page";
var index = 0;
function display(){
    if(index < word.length){
        document.getElementById("Head").innerHTML += word[index];
        index++;
        setTimeout(display,100);
    }
}

display();
setTimeout(function(){
    close("index2.html");
} ,5000);