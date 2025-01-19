// 4.1
function AccOnlyTwoP (par1, par2){
    if (arguments.length !== 2){
        throw ("Please, correct the arguments. You shoud have only two args.");

    }else{
        return true;
    }
}

// console.log(AccOnlyTwoP(5,3,4));

// 4.2
function AddNVal (){
    var sum = 0;
    for( i = 0 ; i < arguments.length ; i++){
        if(typeof(arguments[i]) != "number"){
            throw("Your args " +i +" are not numerical.");
        }
        // console.log(arguments[i]);
        sum += arguments[i]; 
    }
    return sum;
    // var sum = 0;
    // var Nsum = parseInt(sum); 
    // for(i = 0 ; i < arguments.length ; i++){
    //     if(Number(arguments[i])){
    //         console.log("Your args " +i +" are numerical.");
        // }//else if(!Number(arguments[i])){
    //         console.log("Your args " +i +" are not numerical.");
    //     }
    //     return sum += arguments[i];
    // }
}

console.log(AddNVal(5,5,5,"s"));
// When I add string "s" for example, I get error
// && the sum didn't work