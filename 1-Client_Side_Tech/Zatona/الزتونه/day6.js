/******************** call back function  ************************/

function sum () {
    return num1() + num2()
}
function num1 () {
    return 10 ;
}
function num2 () {
    return 20 ;
}
console.log(sum ());

///////////////////////////////////////////////

var arr = [1, 2, 3];
var arr2 = [];
var x = arr.forEach(function (ele, i, arr) {
  arr2.push(ele)
    // return arr[i]  ❌❌❌❌
});

console.log(arr); // [1,2,3]
console.log(arr2); // [1,2,3]
console.log(x);   // undefined because foreach return undefined although put return 


/*************************************** Closure  ********************************/

// closure is function return function (outer scope and inner scope)

function outer() {
  var x = 10;
  return function inner() {
    return x;
  };
}
var fn = outer(); 
console.log(fn());


/////////////////////////////////////////////////////


function counter() {
  var counter = 0; // every time we call the function it reset the variable
  counter++;
  return counter;
}

console.log(counter()); //1
console.log(counter()); //1
console.log(counter()); //1


///////////////////////////////////////


function counter() {
  var counter = 0;
  function incrementCounter() {
    counter++;
    return counter;
  }
}
counter();
// incrementCounter() // ❌❌❌ you try to acess the function outside the scope

///////////////////////////////////////////////

function counter() {
    var counter = 0;
    return function incrementCounter() {
      counter++; //closure
      return counter;
    };
  }
  
  var fn = counter(); //counter
  console.log(fn()); //1
  console.log(fn()); //2
  console.log(fn()); //3
  console.log(fn()); //4
  
  var fn2 = counter();
  console.log(fn2()); //1  // because call function 
  console.log(fn2()); //2