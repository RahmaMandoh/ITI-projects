// Using Constructor method for creating Objects, write a script that allows
// you to create a rectangle object that : 
// • Should have width and height properties.
// • Implement two methods for calculating its area and perimeter.
// • Implement displayInfo() function to display a message declaring the
// width, height, area and perimeter of the created object.


function Rectangle(width, height){
    this.width = width || 1;
    this.hight = height || 1;   
};

Rectangle.prototype.CalArea = function(){
    return this.width * this.hight;
};
Rectangle.prototype.CalPerimter = function(){
    return 2 * (this.hight + this.width);
};

Rectangle.prototype.display = function(){
    return "The rectangle width is " + this.width + ", and higth is " + this.hight + 
    ". So, the area will be " + this.CalArea() + ", and the permiter will be " + this.CalPerimter() + ".";
};

var rectangleOne = new Rectangle(20,10);
console.log(rectangleOne.display());