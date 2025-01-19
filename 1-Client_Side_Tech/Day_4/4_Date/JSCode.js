// 1.2. Make a function that takes date string as a parameter, and returns the Day
// name (Saturday, Sunday,) of the given date.

do{
    var dateString = prompt("Please, enter a string to retun a date: ");
}while(dateString === "");

function DateStr (str){
    //mm-dd-yyyy
    const date = new Date(str);
    arrDate = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    const dayIndex = date.getDay();
    console.log(dayIndex);
    // alert("Its " + arrDate[dayIndex]);
    return "Its " + arrDate[dayIndex]

}

var str = DateStr(dateString);
alert(str)

//It still need handling dd/

