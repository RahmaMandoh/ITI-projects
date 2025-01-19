// function f1


function f1(x, y) {
    // z undef
    // zz undef
    if (x > 3) { // fale
      var z = 3; //he did not see this
    } else { 
      var zz = 3; // zz = 3
    }
    console.log(z, zz); // => undif , 3
}

f1(1, 3); // x=1, y=3 => undef , 3


alert(zzz); // => not def 
//if we write var zzz = 300; => the alert will popup with undef val.
zzz = 300;

// So, the final result would be: undef, 3, undef (myfirst anws)
// The correct ans: undef, 3, not def. => Search why

// alert throw not def becouse zzz is not declired by (var)
// Variables declared with var are function-scoped.
// Variables declared with let and const are block-scoped.
// Variables that are assigned a value without being declared 
// (i.e., without var, let, or const) are treated as global variables by JavaScript, even if the assignment occurs inside a function.