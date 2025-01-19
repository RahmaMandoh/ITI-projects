var image = document.getElementById('header')
image.style.marginRight= "-740px";
//console.log(image);

var copy = image.cloneNode(true);

document.body.append(copy);
copy.style.marginLeft="0";

var list = document.getElementById('navigation')
// console.log(list)
list.style.width="100px";

var items = document.getElementById('nav')
items.style.marginLeft="400px";
items.style.listStyle="circle";

var listitems = document.querySelectorAll("li")
console.log(listitems);

listitems.forEach( (item, point) => {
    if (point % 2 == 0){
        item.style.marginLeft = "5px"
    }else{
        item.style.marginRight = "5px"
    }  
});



