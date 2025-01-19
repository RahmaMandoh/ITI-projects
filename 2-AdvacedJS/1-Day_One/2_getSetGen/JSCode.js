// Create your own custom object that has getSetGen as function value, this
// function should generate setters and getters for the properties of the caller
// object .

// This object may have description property of string value if needed.
// Let any other created object can use this function property to generate
// getters and setters for his own properties

var OBJECT={
    id : "UI_46",
    loaction : "Egypt",
    addr: "Cairo",
    display: function(){},
    getSetGen : function(){
        var self = this;
        for(var key in this){
            if(typeof self[key] != "function"){
                (function(){
                    var value = self[key];
                Object.defineProperty(self, key, {
                    set: function(val){
                        value = val;
                    },
                    get: function(){
                        return value;
                    },
                });
                })()
            }
        }
    },
}


// console.log(OBJECT);
OBJECT.getSetGen();
// console.log(OBJECT.id);
OBJECT.id = 10;
OBJECT.addr = "Giza";
// console.log(OBJECT);

var user = { name: "Ali", age: 10 };
OBJECT.getSetGen.call(user);
console.log(user);