// 1. write a script that allows you to create a rectangle object that

// • Should have width and height properties.
// • Implement two methods for calculating its area and perimeter return value.
// • Implement displayInfo() function to display a message declaring the width, height,
// area and perimeter of the created object.

let RectangleObj ={
    width : 50,
    hight: 100,
    CalcArea: function(){
        area = RectangleObj.width * RectangleObj.hight;
        return area;
    },
    CalcPerimeter: function(){
        perimeter = 2 * (RectangleObj.width + RectangleObj.hight);
        return perimeter;
    },
    DisplayInfo: function(){
        var width = RectangleObj.width;
        var hight = RectangleObj.hight;
        var area = RectangleObj.CalcArea();
        var perimeter = RectangleObj.CalcPerimeter();
        console.log("The rectangle width is " + width + ", the hight is " + ", the area is "
            + area +", the perimeter is " + perimeter + "."
        )
    },
};
// RectangleObj.hight(100);
RectangleObj.DisplayInfo();



