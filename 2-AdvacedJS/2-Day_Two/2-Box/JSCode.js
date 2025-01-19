// Create your box object that contains books objects, ensure that you can :
// a. count # of books inside box.

// b. `addBook()` create book object and add it to box object content property .
// c. `deleteBook()` delete any of these books in box according to book name or `type`  .
// d. use `toString()` to tell its dimensions and how many books are stored in it.
// e. implement `valueof()` so that if there is more than one box object we can
// a. get total books in these boxes by adding the 

// i.e. box1 has 5 books while box2 has 2 books, box1 + box2 should return 7.

// Note: 

// • there is no inheritance
// • box object has the following properties: height, width, length, numOfBooks,
// volume, material, type, content.
// • The content property contains an array of books.
// • book object has the following properties: name , type, numofChapters, author,
// numPages, publisher, numofCopies.
// • you can define any function needed for both box and book objects.


function Book(Name, BookType, numOfChapters, Auther, numPages, Publisher, numOfCopes){
    this.Name = Name || "Anne with an E";
    this.BookType = BookType || "Dramatic";
    this.numOfChapters = numOfChapters || 5;
    this.Auther = Auther || "Lucy Maud Montgomery";
    this.numPages = numPages || 300;
    this.Publisher = Publisher || "Amazon";
    this.numOfCopes = numOfCopes || 1000;
}

function Box(BoxHeigth, BoxWidth, BoxLength, content, BoxMaterial, BoxType){
    this.BoxHeigth = BoxHeigth || 100;
    this.BoxWidth = BoxWidth || 100;
    this.BoxLength = BoxLength || 100;
    this.BoxMaterial = BoxMaterial || "Paper";
    this.BoxType = BoxType || "Paper";
    this.volume = this.BoxHeigth * this.BoxLength * this.BoxWidth;
    this.content = [];
    this.numOfBooks = 0;
}

Box.prototype = {
    addBook : function(book){
        this.content.push(book);
        this.numOfBooks++;
    } ,
    deleteBook : function(BookName){
        var self = this;
        this.content.forEach(function(ele, i){
            if(ele.Name == BookName){
                self.content.splice(i,1);
                self.numOfBooks--;
            }
        });
        // self.numOfBooks--;
    } ,
    toString: function(){
        return "The dimentions is " + this.BoxWidth + " " + this.BoxHeigth + " " + this.BoxLength +
        " and the number of books is " + this.numOfBooks;
    },
    valueOf : function(){
        return this.numOfBooks;
    }

}

var box1 = new Box(5,6,7);
var box2 = new Box(8,9,10);

var book1 = new Book("book1", "Comedy");
var book2 = new Book("book2", "Drama");
var book3 = new Book("book3", "Fun");

box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);
box1.deleteBook("book3");
box2.addBook(book1);
box2.addBook(book2);
box2.addBook(book3);
console.log(box1+box2);

console.log(box1);