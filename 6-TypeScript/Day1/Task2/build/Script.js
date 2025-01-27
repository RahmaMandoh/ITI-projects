// Write a function printValueLength that accepts a parameter of type string | string[], string | number[], ...etc. Use type narrowing to safely log the length of the value. (Don't use any)
// function printValueLength(value: unknown): void {}
// printValueLength("hello"); // "String length: 5"
// printValueLength(["a", "b", "c"]); // "Array length: 3"
// printValueLength([1, 2]); // "Array length: 2"
// printValueLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]); // "Array length: 3"
// type arr = (string | string[]) |  (string | number[]) | (string | object[]) | (string | boolean[]);
function printValueLength(v) {
    if (typeof v === "string") {
        console.log("String length: ".concat(v.length));
    }
    else if (Array.isArray(v)) {
        console.log("Array length: ".concat(v.length));
    }
    else {
        console.log("Unsupported type");
    }
}
printValueLength("hello");
printValueLength(["a", "b", "c"]);
printValueLength([1, 2]);
printValueLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]);
