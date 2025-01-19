// 1. Write a function that takes any number of parameters and returns them reversed using
// array’s reverse function.

function AnyNumOfPar(){
    console.log(arguments);
    var ParArr = [];
    for(var i=0; i<arguments.length; i++){
        ParArr[i] = arguments[i];
    }
    console.log("The original " + ParArr);
    ParArr.reverse();
    console.log("The reversed " + ParArr);
    return ParArr;
};

var result = AnyNumOfPar("ss", false, 25, undefined, "Rahma");
console.log(result);
