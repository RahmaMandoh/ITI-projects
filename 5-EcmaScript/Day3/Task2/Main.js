// create a dynamic object using Proxy such that it has only the following properties

// a∙ name property that accepts only string of 7 characters.

// b∙ address property that accepts only string value.

// c∙ age property that accepts numerical value between 25 and 60.

    let obj = {
        Name : "Rahma",
        address : "Zahraa Maadi",
        age: 23,
    }

let handler = {
    get: function(target, prop, prox){
        // console.log(target, prop. prox);
        if(!target.hasOwnProperty(prop)){
            throw `This property is not found.`
        }
        return target[prop];
    },
    set: function(target, prop, val ,prox){
        if(!(prop in target)){
            throw `This property is not found.`
        }
        if(prop == "Name"){
            if(typeof val != "string"){
                throw `This proberty should be strings only`;
            } else if(val.length > 7){
                throw `This property should be less then 7 char.`
            }
        }else if (prop == "address"){
            if(typeof val != "string"){
                throw `This proberty should be strings only`;
            }
        } else if (prop == "age"){
            if(typeof val != "number"){
                throw `This proberty should be integers.`
            }else if( val < 25 || val > 100){
                throw `This property should be between 25 & 100.`;
            }
        }
        
        return target[prop] = val;
    },
}
let prox = new Proxy(obj, handler);
try {
    prox.Name = "Aya";
    console.log(prox.Name);
} catch (err) {
    console.error(`Error: ${err}`);
}

try {
    prox.address = "Maadi";
    console.log(prox.address);
} catch (err) {
    console.error(`Error: ${err}`);
}

try {
    prox.age = 25;
    console.log(prox.age);
} catch (err) {
    console.error(`Error: ${err}`);
}

try {
    prox.age = 65; // This will throw an error
} catch (err) {
    console.error(`Error: ${err}`);
}

try {
    prox.Name = "Ali"; // This will throw an error because it should have exactly 7 characters
} catch (err) {
    console.error(`Error: ${err}`);
}
