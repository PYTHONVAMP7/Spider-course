
let animal = {
    canrun: true
}


let cat = {
    meow : true
}

// cat.__prototype__ = animal;

class Animal {
    constructor(name,number){
        this.name = name
        console.log("OBJ is created")
        this.number = number
    }
    eats(){
        console.log("Khale")
    }
    jumps(){
        console.log("Good boy jumps")
    }
}

class Lion extends Animal{

}


let a = new Animal("Bunny",5)

console.log(a)

let l = new Lion("Shera", 69)