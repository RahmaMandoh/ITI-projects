// Display the area and perimeter of an object created from using Rectangle
// Constructor that has width and height properties and 2 extended methods (using
// prototype property) for calculating area, perimeter (last day task).

function Rectangle(width, height){
    // console.log(this.constructor);
   
    if(this.constructor == Rectangle){
        Rectangle.CountInstances++;
    }
    this.width = width;
    this.height = height;
}

Rectangle.prototype.CalArea = function(){
    return this.width * this.height;
};
Rectangle.prototype.CalPerimter = function(){
    return 2 * (this.height + this.width);
};

Rectangle.prototype.toString = function(){
    return "The rectangle width is " + this.width + ", and higth is " + this.height + 
    ". So, the area will be " + this.CalArea() + ", and the permiter will be " + this.CalPerimter() + ".";
}

Rectangle.CountInstances = 0;
var rec1 = new Rectangle(10,10);
var rec2 = new Rectangle(20,20);

// a. Override toString() function to display a message declaring the width, height,
// area and perimeter of the created object.

var h1 = document.querySelectorAll("h1");
// var h1_2 = document.querySelector("h1");
h1[0].innerText = rec1;
h1[1].innerText = rec2;

// b. Create Class Property that counts numbers of created objects and Class
// method to retrieve it.

// Rectangle.C = 0;
// Rectangle.CountInst = function(){
//     if(this.prototype.constructor == Rectangle){
//         Rectangle.C++;
//     }
//     return "You have " + Rectangle.C + " of instances";
// }
console.log("You have " + Rectangle.CountInstances + " rectangle instances");