function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
}

setInterval(()=>{
    let randomColor = getRandomColor();
    document.querySelectorAll('.box').forEach(box => { 
        box.style.backgroundColor = randomColor;
    });
},1000)
