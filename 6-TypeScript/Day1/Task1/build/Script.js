// Question: Create a function that takes literal types "red" | "yellow" | "blue" and returns their hexcode colors
function getColorHexcode(c) {
    var hex = "0";
    if (c == "red") {
        hex = "#FF0000";
    }
    else if (c == "yellow") {
        hex = "#FFFF00";
    }
    else if (c == "blue") {
        hex = "#0000FF";
    }
    else {
        throw "This color is not defined";
    }
    return "The color ".concat(c, " in hexcode is ").concat(hex);
}
console.log(getColorHexcode("red"));
