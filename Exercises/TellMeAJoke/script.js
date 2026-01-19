const setup = document.querySelector("#jokeDisplay1")
const punchline = document.querySelector("#jokeDisplay2")

const btn = document.querySelector("#jokeBtn")

btn.addEventListener("click", async function jokefetch() {
    try{        
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
            
        let data = await response.json()
        
        setup.innerText = "''  "+data.setup+ "  ''"

        punchline.innerText = "=>  "+data.punchline

    }
    catch(error){
        console.log(error)
    }  
})