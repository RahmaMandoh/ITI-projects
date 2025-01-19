// - Posts
    
//     Make your own interface to display post title and body by requesting
//     posts from this API: https://jsonplaceholder.typicode.com/posts

// var UserContainer = document.getElementsByClassName("UserContainer")[0];
// var xhrUsers = new XMLHttpRequest();
// xhrUsers.open("get", "Post.json");
// xhrUsers.send();

// xhrUsers.addEventListener("readystatechange", function(){
//     if(xhrUsers.readyState == 4){
//         if(xhrUsers.status == 200){
//             //Return array of users objs from json file
//             var usersArr = JSON.parse(xhrUsers.response);
//             displayUsers(usersArr);
//         }
//     }
// });

// function displayUsers(arr){
//     arr.forEach(function(user, index, users){
//         var div = document.createElement("div");
//         div.classList.add("user");
//         div.innerHTML = "<h2>"+ user.title +"</h2><h3>"+ user.body +"</h3>";
//         UserContainer.append(div);
//     });
// }

//I need to handle the 4 states: 1-load 2-error 3-full data 4-empty state

// first handling loading state
var UserContainer = document.getElementsByClassName("UserContainer")[0];
var LoadingState = document.getElementsByClassName("LoadingState")[0];
var Err = document.getElementsByClassName("Error")[0];
var EmptyState = document.getElementsByClassName("EmptyState")[0];
var btn = document.getElementsByTagName("button")[0];
var xhrUsers = new XMLHttpRequest();
xhrUsers.open("get", "Post.json");
// xhrUsers.open("get", "EmptyFile.json");
btn.addEventListener("click", function(){
    console.log("hello")
    xhrUsers.send();
});

xhrUsers.addEventListener("readystatechange", function(){
    console.log(xhrUsers.status);
    if(xhrUsers.readyState == 3){
        LoadingState.classList.remove("LoadingState");
    }
    if(xhrUsers.readyState == 4){
        if(xhrUsers.status == 200){
            //setTime to semiole loading
            setTimeout(function(){
                LoadingState.classList.add("LoadingState");
                //Return array of users objs from json file
                var usersArr = JSON.parse(xhrUsers.response);
                //3-handling empty state
                if(usersArr.length == 0){
                    EmptyState.classList.remove("EmptyState");
                }else{
                    displayUsers(usersArr);
                }
                
            }, 2000)
        } // 2-handling errors
        else{
            Err.classList.remove("Error");
            LoadingState.classList.add("LoadingState");
        }
    }
});

function displayUsers(arr){
    arr.forEach(function(user, index, users){
        var div = document.createElement("div");
        div.classList.add("user");
        div.innerHTML = "<h2 id = 'titleContent'>"+ user.title +"</h2><h3 id = 'bodyContent'>"+ user.body +"</h3>";
        UserContainer.append(div);
    });
}
