// Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key.

window.addEventListener("keydown",
    function(event){
        console.log(event.keyCode + " this is ASCII for " + event.key);

        var AsciiCodeVal = event.keyCode;

        if(event.altKey && /^[a-zA-Z]$/.test(event.key)){
            this.alert("You clicked both of alt key and "+ event.key);
        }else if(event.ctrlKey && /^[a-zA-Z]$/.test(event.key)){
            this.alert("You clicked both of ctrl key and "+ event.key);
        }else if(event.shiftKey && /^[a-zA-Z]$/.test(event.key)){
            this.alert("You clicked both of shift key and "+ event.key);
        }

    }
)

// else if (AsciiCodeVal == event.altKey){
//     this.alert("You clicked on alt key");
// }else if (AsciiCodeVal == event.ctrlKey){
//     this.alert("You clicked on ctrl key");
// }else if (AsciiCodeVal == event.shiftKey){
//     this.alert("You clicked on shift key");
// }
// else if(AsciiCodeVal != event.shiftKey || AsciiCodeVal != event.altKey || AsciiCodeVal != event.ctrlKey){
//     this.alert("The value of ASCII Code is "+ AsciiCodeVal);
// }