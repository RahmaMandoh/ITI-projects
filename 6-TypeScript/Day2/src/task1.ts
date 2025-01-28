// Write a generic class Storage<T> that holds an array of items of type T. Add methods to add items and get all items.

// class Storage {}

// const stringStorage = new Storage<string>();
// stringStorage.addItem("hello");
// console.log(stringStorage.getItems()); // ["hello"]

class storage<T>{
    arr : T[] = [];
    addItem(i:T){
        this.arr.push(i);
    }
    getItems() : T[]{
        return this.arr;
    }
}

const stringStorage = new storage<string>();
stringStorage.addItem("hello");
stringStorage.addItem("Rahma");
stringStorage.addItem("Aya");
console.log(stringStorage.getItems()); // ["hello"]