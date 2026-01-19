// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Nigga")
//         },1000);
//     })
// }

//immediate ivoke function

// (async function main(){
//     let a = await sleep()
//     console.log(a)   
// })()

//let multiple variable 

// let [x,y, ...z] = [1,5,7,8,9,10,11,12,13]
//     console.log(x)
//     console.log(y)
//     console.log(z)

//Destructuring

// let obj = {
//     a:"Aigga",
//     b:"Bigga",
//     c:"Cigga"
// }

// let {a,b}= obj
// console.log(a,b)

// let arr = [1,4,6]

// console.log(sum(...arr))

n = Number(prompt("Enter a number"))

function factorial(num){
    if(num===0){
        return 1;
    }
    return num * (factorial(num-1))
}

a = factorial(n)
console.log(a)



