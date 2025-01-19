// Using rest operator and spread operator return min and max value from any array.


// 💡 note: array length is not fixed return min and max value and display each of
// them separately after function call.

console.log(getMinMax(10,100,0,1,1000));

function getMinMax(...arr){
    // let arr = [];
    // for(let i = 0; i < arguments.length; i++){
    //     arr.push(arguments[i]);
    // }
    // console.log(arr);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return `The array min is ${min} and the max is ${max}.`;
}