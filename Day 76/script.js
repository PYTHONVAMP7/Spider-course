async function getData(){
    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data;
}

async function main() {
   
    console.log(await getData())
}
main()


// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve (455);
//         }, 3500);
//     })
// }
// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve (455);
//         }, 3500);
//     })
// }

// async function main(){

//     console.log("Loading modules")
    
//     let data = await getData()

//     console.log(data)
    
//     console.log("Load Data")
    
//     console.log("process data")
// }
// main()

// settle means resolve or reject
// resolve means prmoise has settled successfully
// reject means promise has not settled successfully