function setCookie(key, value){
    document.cookie = `${key} = ${value}`;
}

function getCookie(key){
    const arr = document.cookie.split("; ");
    let val;
    arr.forEach((ele) =>{
        const[cookieKey, value] = ele.split("=");
        if((cookieKey == key)){
            val = value;
        }
    });
    return val;
}

function getAllCookies(){
    const arr = document.cookie.split("; ");
    const arrAll=[];
    arr.forEach((ele) =>{
        const[cookieKey, value] = ele.split("=");
        arrAll.push([cookieKey, value]);
    });
    return arrAll;
}

function hasCookie(key){
    const arr = document.cookie.split("; ");
    let bool = false;
    for (let ele of arr){
        const[cookieKey, value] = ele.split("=");
        if(cookieKey == key){
            bool = true;
            break;
        }
    }
    return bool;
}

function deleteCookie(key){
    const oldDate = new Date(11 - 10 - 2024);
    document.cookie = `${key} =value ; expires =${oldDate}`;
}

