function getrandomcolor(){
    x = Math.round(Math.random()*255)
    y = Math.round(Math.random()*255)
    z = Math.round(Math.random()*255)
    return `rgb(${x}, ${y}, ${z})`
}

document.querySelector(".box").style.background = getrandomcolor();
document.querySelector(".box1").style.background = getrandomcolor();
