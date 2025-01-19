// Make your own input type number that accepts numbers only. “using event object”

var InputFild = document.querySelector("input");
console.log(InputFild);
InputFild.addEventListener("keydown", function(event){
    console.log(event);
    if(isFinite(event.key)){
        var parsKey = parseInt(event.key);
    }else{
        event.preventDefault();
    }
})