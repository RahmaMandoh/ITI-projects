// Apply different styles over a paragraph according
//  to checked radio button. Implement the
// required functions in an external .js file to
//  let TextStyle.html works properly

var para = document.getElementById("PAR");
var parent = document.getElementById("TDA");
// function ChangeAlign(align){
//     console.log(align);
//     para.style.textAlign = align;
// }

parent.addEventListener("click", function(e){
    if(e.target != this){
        console.log(e.target.nextSibling);
        para.style.textAlign = e.target.nextSibling.nodeValue;
    }
})


function ChangeFont(font){
    para.style.fontFamily = font;
}

function ChangeHeight(height){
    para.style.lineHeight = height;
}

function ChangeLSpace(space){
    para.style.letterSpacing = space;
}

function ChangeIndent(index){
    para.style.textIndent = index;
}
function ChangeTransform(tran){
    para.style.textTransform = tran;
}
function ChangeDecorate(deco){
    para.style.textDecoration = deco;
}
function ChangeBorder(border){
    para.style.border = border;
}
function ChangeBorderColor(BC){
    para.style.borderColor = BC;
}
