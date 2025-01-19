// Write a script that takes from the user n values and returns their sum, stop receiving
// values from user when he enters 0 or sum exceeds 100, check that the entered data is
// numeric and inform the user with the total sum of the entered values. (use do while
// loop)


alert("If you need to exit enter 0, your limit is 100.");

var NCurrentInputSum = 0;
do{
    UserInput = prompt("The current sum number is: " + NCurrentInputSum +
        ", enter new number to sum it, too");
    if(isFinite(UserInput)  && UserInput !== ""){
        console.log(UserInput === "")  
        NCurrentInputSum = NCurrentInputSum + parseInt(UserInput)
        console.log(NCurrentInputSum)
    }
}while(UserInput !== null && UserInput != 0 && NCurrentInputSum < 100 );
alert("You have exit the system.");





