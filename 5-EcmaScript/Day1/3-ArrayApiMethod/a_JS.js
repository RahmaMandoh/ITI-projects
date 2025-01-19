// a. test that every element in the given array is a string 
let fruits = ["apple", "strawberry","banana", "orange",
    "mango"];

let a = fruits.every(function(ele){
    return isNaN(ele);
});

console.log("This is a "+ a);

// b. test that some of array elements starts with "a"
var b = fruits.some(function(ele){
    return ele.startsWith("a");
});

console.log("This is b "+b);

// c. generate new array filtered from the given array with only elements that
// starts with "b" or "s"
var c = fruits.filter(function(ele){
    return ele.startsWith("b") || ele.startsWith("s");
});


console.log("This is c "+c);

// d. generate new array each element of the new array contains a string
// declaring that you like the give fruit element 

// “I like ” + fruit[0]


let d = fruits.map(function(ele){
    return `I like ${ele}`;
});


// e. use forEach to display all elements of the new array from previous point.
d.forEach(function(ele){
    console.log(ele);
});