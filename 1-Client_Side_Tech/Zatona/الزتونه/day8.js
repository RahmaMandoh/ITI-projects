/************************** set time out ***************************/


// Don't forget name is reserved word for window object 
// inside set time out in object console.log(this.name) ----> "" not undefined



function second() {
  setTimeout(function () {
    console.log("second");
  }, 2000);
}

function first() {
  console.log("first");
  second();
  console.log("third");
}

first();  // first third second

////////////////////////////////////////////////

setTimeout(function () {
  console.log("after 5 sec");
}, 5000);

console.log("hi hamada");

setTimeout(function () {
    console.log("after 3 sec");
}, 3000);   

  // hi hamada - after 3 sec - after 5 sec

///////////////////////////////////////////////////////

var a = [1, 2, 3];
for (var i = 0; i < a.length; i++) {
    setTimeout(function () {
      console.log(a[i]);
    }, 2000);
} // undefined undefined undefined 

////////////////////////////////////////////


var a = [1, 2, 3];
for (var i = 0; i < a.length; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(a[x]);
    }, 2000);
  })(i);
} // 1,2,3


////////////////////////////////////


var obj = {
  username: "mai",
  age: 20,
  display: function () {
    console.log(this); //obj
    console.log(this.username, this.age);

    var self = this; //self pattern
    setTimeout(function () {
      console.log(this); //window
      console.log(self);
      console.log(self.username, self.age);
    }, 2000);

    function test() {
      console.log(this); //window
      console.log(this.username, this.age);
    }
    test();
  },
};

obj.display();
