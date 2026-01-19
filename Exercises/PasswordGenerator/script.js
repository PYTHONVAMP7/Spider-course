const generatebtn = document.querySelector("#generateBtn")

const generatedpass = document.querySelector(".pass")

let balpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let salpha = "abcdefghijklmnopqrstuvwxyz"

let schar = "!@#$%^&*()_+-=[]{}|;:,.<>?"

let result = ""


generatebtn.addEventListener("click", function pass(){
    let j = Math.floor(Math.random()*1+1)

    for(let i=0;i<=j;i++){       
        let b = Math.floor(Math.random()*26)
        let s = Math.floor(Math.random()*26)
        let sc = Math.floor(Math.random()*25)
        let a = Math.floor(Math.random()*9)
        result += balpha[b]+salpha[s]+schar[sc]+a
    }
    let textarea = document.createElement("p")
    generatedpass.append(textarea)
    textarea.textContent = result
    result = ""
    
})