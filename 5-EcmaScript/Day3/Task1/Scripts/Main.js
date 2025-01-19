// Using ES6 new Syntax & features:
// Write a script to create different shapes (rectangle, square, circle) make
// all of them inherits from shape class.
// a. each shape contains two functions to calculate its area and its
// parameter.
// b. Display the area and each object parameter in your console by
// overriding toString().
// c. Make your classes in an external file and import them in a module
// to create objects.

import { Shap } from "./Shap.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";
import { Circle } from "./Circle.js";


// let sm = new Shap(1,2);
// console.log(sm.toString());

let r = new Rectangle(1,2);
console.log(r);
let s = new Square(2);
console.log(s);
let c = new Circle(5);
console.log(c);
let p = document.querySelectorAll("p");

p[0].innerText = r;
p[1].innerText = s;
p[2].innerText = c;