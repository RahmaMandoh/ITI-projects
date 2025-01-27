// Question: Create a function that takes literal types "red" | "yellow" | "blue" and returns their hexcode colors

// type Color = unknown;

// function getColorCode(color: Color): string {}

type color = "red" | "yellow" | "blue";

function getColorHexcode(c : color) : string{
    var hex : string = "0";
    if(c == "red"){
        hex = "#FF0000";
    }else if (c == "yellow"){
        hex = "#FFFF00";
    }else if(c == "blue"){
        hex = "#0000FF";
    }else{
        throw `This color is not defined`;
    }
    return `The color ${c} in hexcode is ${hex}`;
}

console.log(getColorHexcode("red"));