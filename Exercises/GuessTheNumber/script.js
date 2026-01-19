
alert("Welcome to 'Guess The Number' game! Try to guess the number between 1 and 100.");

const a = Math.floor(Math.random()*100+1)
console.log(a)

let b;
let c =0;

do {
    b = Number(prompt("Enter a number"))
    c++
    if(a>b){
        alert("Higher")
    }
    else if(a<b){
        alert("Lesser")
    }
    else{
        alert("You guessed it correct in "+ c +" attempts")
    }
    
} while (a!==b);