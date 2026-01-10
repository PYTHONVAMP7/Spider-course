let btn = document.getElementById("btn")

function getrandomcolor(){
    x = Math.round(Math.random()*255)
    y = Math.round(Math.random()*255)
    z = Math.round(Math.random()*255)
    return `rgb(${x}, ${y}, ${z})`
}
function wtf(event){
    if(event.key === "Tab"){  
        console.log("You just pressed tab key")
        setInterval(function(){      
            document.querySelector(".box").style.background = getrandomcolor()
            console.log(getrandomcolor())
        },1000)
    }
}

// btn.addEventListener("click",click)
document.body.addEventListener("keydown" ,wtf)

// setTimeout(function(){
//       document.querySelector(".box").style.background = getrandomcolor()
// },2000)

//click
// btn.addEventListener("click",click)

//right click
// btn.addEventListener("contextmenu",click)

//keydown
// document.querySelector("#btn").addEventListener("keydown")


