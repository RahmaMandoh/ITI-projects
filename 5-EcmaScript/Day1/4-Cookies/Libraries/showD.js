let showData = document.getElementById("showData");
let Userimg = document.getElementById("imgVal");
let UseName = document.getElementById("name");
let logOut = document.getElementById("logOut");
let Counter = document.getElementById("Counter");
Userimg.setAttribute("src", getCookie("Gender"));
UseName.textContent = `Welocme, ${getCookie("Name")}`;
// console.log(getAllCookies());

logOut.addEventListener("click", function(){
    deleteCookie("Name");
    deleteCookie("Age");
    deleteCookie("Gender");
    deleteCookie("Color");
    deleteCookie("LoadingCounter");
    location.replace("./index.html");
});

window.addEventListener("load", function(){
    let LoadingCounter = parseInt(getCookie("LoadingCounter"));
    console.log(LoadingCounter);
    LoadingCounter++;
    
    setCookie("LoadingCounter", LoadingCounter);
    Counter.textContent = `you opened ${getCookie("LoadingCounter")}`;
    
});

let color = getCookie("Color");
document.body.style.color = color;