// 2. Make proper updates in your previous code of generating Rectangle object that
// should inherit from Shape Constructor, and create your Square constructor that
// inherits from Rectangle. 
// 3. Prevent creating any object from shape, allow creation of only rectangles and square

// 💫 `Bonus` allow creation of only one square and one rectangle.



function Shap(width) {
    if (this.constructor === Shap) {
        throw new Error("This is an abstract class");
    }
    this.width = width;
}

Shap.prototype = {
    area : function () {
        return this.width * this.width;
    },
    perimeter : function () {
        return 2 * (this.width + this.width);
    },
    displayInfo : function () {
        return "The area is " + this.area() + " and the permeter is " + this.perimeter();
    }
}


// Circle
function Circle(width) {
    if (this.constructor == Circle) {
        Circle.CCountInstances++;
        if(Circle.CCountInstances > 1)
            throw new Error("You can only create one Circle");
    }
    Shap.call(this, width);
}
Circle.prototype = Object.create(Shap.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function(){
    return this.width * this.width * Math.PI;
}

Circle.prototype.perimeter = function(){
    return this.width * 2 * Math.PI;
}

Circle.CCountInstances = 0;

// Square
function Square(width) {
    if (this.constructor == Square) {
        Square.SCountInstances++;
        if(Square.SCountInstances > 1)
            throw new Error("You can only create one Square");
    }
    Shap.call(this, width);
}
Square.prototype = Object.create(Shap.prototype);
Square.prototype.constructor = Square;

Square.SCountInstances = 0;


// Rectangle
function Rectangle(width, height) {
    if (this.constructor == Rectangle) {
        Rectangle.RCountInstances++;
        if(Rectangle.RCountInstances > 1)
            throw new Error("You can only create one Rectangle");
    }
    Shap.call(this, width);
    this.height = height;
}
Rectangle.prototype = Object.create(Shap.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function(){
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function(){
    return 2 * (this.height + this.width);
}
Rectangle.RCountInstances = 0;

var C = new Circle(10);
console.log(C.displayInfo());
// var C2 = new Circle(10);
// console.log(C2.displayInfo());

var S = new Square(10);
console.log(S.displayInfo());
// var S2 = new Square(10);
// console.log(S2.displayInfo());

var R = new Rectangle(10,12);
console.log(R.displayInfo());
// var R1 = new Rectangle(10,12);
// console.log(R1.displayInfo());