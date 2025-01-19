do{
    var UserMessage = prompt("Please, enter a message!");
}while(typeof(UserMessage) !== "string" && !(isNaN(UserMessage)));

for(i = 1; i<=6; i++){
    document.write('<h' + i + ' style = "color:pink;">' + UserMessage + '</h' + i + '>');
}