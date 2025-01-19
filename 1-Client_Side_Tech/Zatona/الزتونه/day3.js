// /* function file */

// // example one

// // console.log(total(1,2)); ----> total is not a function because hosting now is var total = undefined

// var total = function (x,y) {
//  return x+y ;
// }

// console.log(total);
// console.log(total());
// console.log(total(10,20));

// // example two 

// function num1 () {
//     return 10 ;
// }
// function num2 () {
//     return 20 ;
// }

// var total = num1() + num2()
// var total2 = num1 + num2
// console.log(total);
// console.log(total2);

// // no code execute after return and throw error 

// /* ************************************************************************** */

// /*  script of day 3  */ 

// console.log(3 > 2 > 1)  //false because 3 > 2 --> true true(1) > 1 --> false

// var x = "mai" && "hamada" && true && 10;
// console.log(x); // last true value if all true

// var x = "mai" && "hamada" && false && 10;
// console.log(x); // first false value

// var x = "mai" || "hamada" || false || 10;
// console.log(x);  //first true value

// var x = 0 || false || "false"
// console.log(x); // last false value

// console.log(!!"mai") // not not turn values to boolean

// var x = 1 
// switch (x) {
//     case 1:
//         console.log(1);
//     case 2:
//     console.log(2);

//     default:
//     console.log(3);
    
// }  // it log 1,2,3 because no break;

// // condition ? //piece of code :  /piece of code ---> syntax of ternary operator

// var x = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(i); 
//   x++;
// }
// console.log(x, i); // 10 , 10


// var x = "mai"
// console.log(isNaN(x)); //true
// console.log(isFinite(x)); //false


// /* ************************ intro to object ******************************/
// var key = "name"
// var obj = {
//     name: "Negm",
//     age :25
// }

// console.log(obj.name); //Negm
// console.log(obj.key);  //undefined
// console.log(obj[key]); //Negm




