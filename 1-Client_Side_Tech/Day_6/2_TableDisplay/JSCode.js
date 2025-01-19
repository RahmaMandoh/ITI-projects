//1.a Ask the user for number of persons wanted to be entered (the value
// should be a number)

do{
    var NumOfPersons = prompt("Please, enter the number of persons you want to add at the table");
}while(!isFinite(NumOfPersons) || NumOfPersons === "");

var NNumOfPersons = parseInt(NumOfPersons);

/*1.b then ask for users’ information sequentially.
name : length should be more than 3 and less than 10 characters => 3 < name < 10
age : should be greater than 10 and less than 60.*/

var NameArr = [];
var AgeArr = [];

for ( var i = 0 ; i < NNumOfPersons ; i++){
    do{
        var userName = prompt("Enter user number " + (i+1) + " name:");
    }while(!isNaN(userName) || userName.length < 3 || userName.length > 10);
    NameArr.push(userName);
    do{
        var userAge = prompt("Enter user number " + (i+1) + " age:");
    }while(!isFinite(userAge) || userAge < 10 || userAge > 60);
    var NUserAge = parseInt(userAge);
    AgeArr.push(NUserAge);
}
console.log(NameArr);
console.log(AgeArr);

// 1.c print users’ information in HTML Table
var table = document.getElementById("myTable"); 
for( var i = 0 ; i < NameArr.length ; i++){
    var row = document.createElement("tr");
    // console.log(row);
    row.innerHTML = "<td>" + (i+1) +"</td><td>" + NameArr[i] +"</td><td>" + AgeArr[i] +"</td>";
    table.appendChild(row);
}
console.log(row);


