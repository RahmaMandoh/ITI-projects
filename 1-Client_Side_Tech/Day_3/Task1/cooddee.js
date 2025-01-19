alert("Welcome to my site!");

do{
    var username = prompt("Please, enter your name:");
}while(!username || isFinite(username));
console.log(typeof(username));
console.log(username);


do{
    var userColor = prompt("Please, could you choose either Red, Green, or Blue:");
}while(userColor == "");
console.log(typeof(userColor))

    switch(userColor){
        case "Red":
        case "red":
        case "RED":
            document.write('<h1 style="color : red;"> Welcome '+ username +'!</h1>');
            break;
        case "Green":
        case "green":
        case "GREEN":
            document.write('<h1 style="color : green;"> Welcome '+ username +'!</h1>');
            break;
            case "Blue":
            case "blue":
            case "BLUE":
                document.write('<h1 style="color : green;"> Welcome '+ username +'!</h1>');
                break;
            case "":
                console.log(typeof(userColor));
              
                    break;
            default:
                document.write('<h1 style="color : pink;"> Welcome '+ username +'!</h1>'); 
                
    }

