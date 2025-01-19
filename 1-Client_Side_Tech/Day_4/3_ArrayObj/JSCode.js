// 3.1 Fill an array of 3 elements from the user, and apply each of the following mathematical
// operations on it (+, *, /). Format the output as shown in Fig


alert("Please, enter for me 3 values. Note you could not divid by ZERO!");
elementsArr = [];
for(var i=0; i<3 ; i++){
    do{
        elementsArr[i] = prompt("Value number " + (i+1) + " is:");
    }while(!isFinite(elementsArr[i]) || elementsArr[i] == 0);
    elementsArr[i] = parseInt(elementsArr[i]);
}

var Add = 0;
var Multiply = 1;
var Divid = elementsArr[0];
for( var i = 0 ; i < elementsArr.length ; i++){
    Add += elementsArr[i];
    Multiply *= elementsArr[i];
}
for (var i = 1; i < elementsArr.length -1; i++) {
    Divid /= elementsArr[i];   
}

document.write("<h1>Adding--Multiplying--Dividing 3 values</h1>");
document.write("<hr width='100%' size='2'>");

document.write('<p><span style = "color:red;font-weight: 600;"> Sum of 3 values</span> <span style = "color:black; font-weight: 400;">' + elementsArr[0]
    + ' + '  + elementsArr[1] + ' + ' + elementsArr[2] + ' = ' + Add + '. </span></p>'); //=>join

document.write('<p><span style = "color:red;font-weight: 600;"> Multiply of 3 values</span> <span style = "color:black; font-weight: 400;">' + elementsArr[0]
    + ' * '  + elementsArr[1] + ' * ' + elementsArr[2] + ' = ' + Multiply + '. </span></p>');
    
document.write('<p><span style = "color:red;font-weight: 600;"> Divid of 3 values</span> <span style = "color:black; font-weight: 400;">' + elementsArr[0]
    + ' / '  + elementsArr[1] + ' / ' + elementsArr[2] + ' = ' + Divid + '. </span></p>');



// 3.2 Fill an array of 5 elements from the user, sort it in descending and ascending
// orders then display the output as shown in Fig

alert("Please, enter 5 elements, to sort them for you descending & ascending.");
SortArr = [];
for(var i=0; i<5 ; i++){
    do{
        SortArr[i] = prompt("Element number " + (i+1) + " is:");
    }while(!isFinite(SortArr[i]) || SortArr[i] === "");
    SortArr[i] = parseInt(SortArr[i]);
}

ascendingArr = SortArr.slice().sort(function(a, b){return a - b}); //=>what did slice do & sort function
console.log("This is a arr " + ascendingArr);
descendingArr = ascendingArr.slice().reverse();
console.log("This is d arr " + descendingArr);
console.log("This is the original arr " + SortArr);

document.write("<h1>Sorting</h1>");
document.write("<hr width='100%' size='2'>");
document.write('<p> <span style = "color : red;"> You have entered the values of </span> <span>' + SortArr[0] + ', ' + 
    SortArr[1] + ', ' + SortArr[2] + ', ' + SortArr[3] + ', ' + SortArr[4] + '</span></p>'
);
document.write('<p> <span style = "color : red;"> Your values after being sorted descending </span> <span>' + descendingArr[0] + ', ' + 
    descendingArr[1] + ', ' + descendingArr[2] + ', ' + descendingArr[3] + ', ' + descendingArr[4] + '</span></p>'
);
document.write('<p> <span style = "color : red;"> Your values after being sorted ascending </span> <span>' + ascendingArr[0] + ', ' + 
    ascendingArr[1] + ', ' + ascendingArr[2] + ', ' + ascendingArr[3] + ', ' + ascendingArr[4] + '</span></p>'
);