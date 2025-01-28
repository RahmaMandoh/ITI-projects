// Write a generic class Storage<T> that holds an array of items of type T. Add methods to add items and get all items.
// class Storage {}
// const stringStorage = new Storage<string>();
// stringStorage.addItem("hello");
// console.log(stringStorage.getItems()); // ["hello"]
var storage = /** @class */ (function () {
    function storage() {
        this.arr = [];
    }
    storage.prototype.addItem = function (i) {
        this.arr.push(i);
    };
    storage.prototype.getItems = function () {
        return this.arr;
    };
    return storage;
}());
var stringStorage = new storage();
stringStorage.addItem("hello");
stringStorage.addItem("Rahma");
stringStorage.addItem("Aya");
console.log(stringStorage.getItems()); // ["hello"]
