// **Promises**

// 1. Make your own interface to create tabs and display usernames by requesting users from the link below using Ajax ES6 fetch function: https://jsonplaceholder.typicode.com/users

// Note: handle the response with promises using then and catch methods.

// 1. When a user tab is clicked display its posts’ titles by requesting the posts from the link below using Ajax ES6 fetch function:

// https://jsonplaceholder.typicode.com/posts?userId=userId

// Note:

// - handle the response with promises using Async and await.
// - do not get the posts of all users on page load, the user tab must be clicked to request its posts.

fetch("users.json").then(response => response.json())
.then(users => {
    document.querySelector('.showBtns').innerHTML =''
    users.forEach(user => {
        let button = document.createElement("button");
        button.setAttribute('id',`${user.id}`)
        button.innerHTML = user.name
        document.querySelector(".showBtns").append(button)
    });

    document.querySelector('.showBtns').addEventListener('click',(e)=>{
        if(e.target != this){

            let btnId = e.target.id;
            getposts(btnId);
        }
    })

}).catch(()=>document.write(`<h1>there is an error loading your data</h1>`));
    
async function getposts(btnId){
    document.querySelector('.showData').innerHTML ='<h1>loading...</h1>'
    try{
        let p = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${btnId}`);
    let posts = await p.json(); //result is posts array 
    console.log(posts);
    document.querySelector('.showData').innerHTML =''
    posts.forEach(post =>{
       let postDiv =document.createElement('div')
       postDiv.classList.add('post')
       postDiv.innerHTML =`<h2>${post.body}</h2><p>${post.body}</p>`
        document.querySelector('.showData').append(postDiv)
    })
    
    }catch(err){
        document.write(`<h1>there is an error loading your data</h1>`)
    }
}