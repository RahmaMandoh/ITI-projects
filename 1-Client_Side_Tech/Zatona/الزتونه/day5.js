/******************* scope *********************/

// var is functional scope that mean function only can hide the variable

// اعمل كل مثال لوحده واعمل كومنت للباقي عشان ميطلعش حاجات غريبه

// var x = 10 // find in window object
// function test () {
//     var y = 20
//     console.log(x,y); // 10 , 20
// }
// test()
// console.log(y); // is not defined

////////////////////////////////////////////////

// var x = 10
// function test () {
//     var x = 30
//     var y = 20
//     console.log(x,y); // 30 , 20
// }
// test()
// console.log(x); // 10

//////////////////////////////////////////////////

// var x = 10
// function test () {
//     window.x = 30
//     var y = 20
//     console.log(x,y); // 30 , 20
// }
// test()
// console.log(x); //30

/////////////////////////////////////////////


// var x = 10; //global

// function test() {
//   var a = "A";
//   console.log(x); //=>10

//   test2(); //=> b A 10 & c

//   function test2() {
//     var b = "b";
//     console.log(b, a, x); //=>b A 10
//     // console.log(c); //not defined

//     function test3() {
//       var c = "c";
//       console.log(c); //=>c
//     }

//     test3(); //=>c
//   }
// //   console.log(b); //not defined
// }

// test(); // 10 & b a 10 & c
// console.log(a); //not defined

//////////////////////////////////////////////

// var x = 10;

// function test() {
//   var x = 20; //shadowing
//   console.log(x); => 20
//   console.log(window.x); //10 
// }
// test();
// console.log(x); // 10

// ////////////////////////////////////////////////


// /**************************** Hoisting ***********************/

// console.log(x); //undefined
// var x= 10 

// test(); 
// function test () {
//     console.log(10); // 10
// }

// ////////////////////////////////////////////


// console.log(x()); // x is not a function because undefined()

// var x = function () {
//     console.log(20);
// }
// // every scope has his own hoisting (functional scope)

// // Self invoked function 

// /*

// (function (argument) {

//     // block of code

// })(parameter)

// */

