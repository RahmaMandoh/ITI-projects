/***************************** problems in closure and self invoked functions *******************/

var arr = [];
for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log("i", i);
    });
  ;
}
arr[0](); //i 5 because call function after loop finish
arr[1](); // i 5 


/////////////////////////////////////////////

var arr = [];
for (var i = 0; i < 5; i++) {
  //outer scope
  (function () {
    var x = i
    arr.push(function () {
      //inner scope
      console.log("i", x);
    });
  })();
}
arr[0](); //i 0
arr[1](); //i 1 -----> because closure in self invoked function 


///////////////////////////////////////////


var arr = [];
for (var i = 0; i < 5; i++) {
  //outer scope
  (function (x) {
    arr.push(function () {
      //inner scope
      console.log("i", x);
    });
  })(i);
}

arr[0](); //i 0
arr[1](); //i 1 -----> because closure in self invoked function 

console.log(arr); //five function body 




/* ---------------------------------- this ---------------------------------- */
// this -> caller function "context"

// global function statement


//case 1
function test() {
  console.log(this); //window
}
test();


//case 2
var obj = {
  test: function () {
    console.log(this); //obj
  },
};
obj.test();


//case 3
btn.addEventListener("click", function(event){
    console.log(this); // btn
});