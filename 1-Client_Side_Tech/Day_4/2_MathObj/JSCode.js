// 2.1 Write a script that ask the user to Enter the value of a circle’s radius in order to calculate
// its area.
// 2.2 Enter another value to calculate its square root and alert the result


// 2.1
alert("You need to calculate a circle area!");
do{
    var radius = prompt("Give me the circle's radius:");
    var NRadius = parseInt(radius);

    function CircleArea(radius){
        return Math.floor(Math.PI * Math.pow(radius,2));
    }
    if(isFinite(NRadius)){
        alert("So, your circlr area is " + CircleArea(NRadius) + ". Note that the area is not a floot value");
    }
    
}while(!isFinite(NRadius));


// 2.2
alert("You need to calculate a circle square root to a value!");
do{
    var root = prompt("Give me the value:");
    var NRoot = parseInt(root);

    function RootFun(val){
        return Math.floor(Math.sqrt(val));
    }
    if(isFinite(NRoot)){
        alert("So, your rooted value is " + RootFun(NRoot) + ". Note that the area is not a floot value");
    }
    
}while(!isFinite(NRoot));
