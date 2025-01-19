// I need to make requst my promises

// const p = new Promise(function(resolve, reject){
//     // request
//     setTimeout(function(){
//         let ids = [1, 2, 3];
//         if(ids){
//             resolve(ids);
//         }else{
//             reject("Ides are not found");
//         }
//     }, 2000);
// });
// p.then(function(ids){
//     console.log(ids);
//     getUserById(ids[0]);
// }).catch(function(err){
//     console.log(err);
// });

// function getUserById(id){
//     const getUser = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let user = {
//                 id: id,
//                 cartId: 2,
//             };
    
//             if(user){
//                 resolve(user);
//             }else{
//                 reject("Cart is not found")
//             }
//         },5000)
//     });
    
//     getUser.then(function(user){
//         console.log(user);
//     }).catch(function(err){
//         console.log(err);
//     });
// }

// The previous code is not the good code to do
// The petter way is to do it as:
// p.then().then().then.cath() -> like this.

// const getIdes = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let id = [1, 2, 3];
//         if(id){
//             resolve(id);
//         }else{
//             reject("The id is not found.");
//         }
//     },2000);
// });

// getIdes.then(function(id){
//     console.log(id);
//     return getUserById(id[1]); //Retuning the next promis so the then could read it
// }).then(function(user){
//     console.log(user);
//     return getCartByUser(user.cartId);
// }).then(function(user){
//     console.log(user);
// }).catch(function(err){
//     console.log(err);
// });

// function getUserById(id){
//     const getUser = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let user = {
//                 id: id,
//                 cartId: 2,
//             };
    
//             if(user){
//                 resolve(user);
//             }else{
//                 reject("User is not found.")
//             }
//         },5000)
//     });
//     return getUser; //We should return a promise, so the other then could read it.
// }

// function getCartByUser(id){
//     const getCart = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let cart = {
//                 id: id,
//                 items : ["Apple", "Banana", "Watermillon"],
//             };
//             if(cart){
//                 resolve(cart);
//             }else{
//                 reject("Cart is not found.");
//             }
//         }, 3000);
//     });
//     return getCart; //I have to return a promise
// }


/////////////////////////////////////////////////////////
//Second part

const getIdes = new Promise(function(resolve, reject){
    setTimeout(function(){
        let id = [1, 2, 3];
        if(id){
            resolve(id);
        }else{
            reject("The id is not found.");
        }
    },2000);
});

// getIdes.then(function(id){
//     console.log(id);
//     return getUserById(id[1]); //Retuning the next promis so the then could read it
// }).then(function(user){
//     console.log(user);
//     return getCartByUser(user.cartId);
// }).then(function(user){
//     console.log(user);
// }).catch(function(err){
//     console.log(err);
// });

function getUserById(id){
    const getUser = new Promise(function(resolve, reject){
        setTimeout(function(){
            let user = {
                id: id,
                cartId: 2,
            };
    
            if(user){
                resolve(user);
            }else{
                reject("User is not found.")
            }
        },5000)
    });
    return getUser; //We should return a promise, so the other then could read it.
}

function getCartByUser(id){
    const getCart = new Promise(function(resolve, reject){
        setTimeout(function(){
            let cart = {
                id: id,
                items : ["Apple", "Banana", "Watermillon"],
            };
            if(cart){
                resolve(cart);
            }else{
                reject("Cart is not found.");
            }
        }, 3000);
    });
    return getCart; //I have to return a promise
}

// async await
async function test(){
    let ids = await  getIdes;
    console.log(ids);
    let user = await getUserById(ids[0]);
    console.log(user);
    let cart = await getCartByUser(user.cartId);
    console.log(cart);
}
test();