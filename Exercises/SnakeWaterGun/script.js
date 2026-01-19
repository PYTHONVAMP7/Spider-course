let opt = {
  1: "Snake",
  2: "Water",
  3: "Gun",
};
let opt1 = {
  S: "Snake",
  W: "Water",
  G: "Gun",
};
a = false;
b = 1;

function swg() {
  while (a === false) {
    let i = Math.floor(Math.random() * 3 + 1);
    let ropt = opt[i];
    alert("Write Snake for S, Water for W and Gun for G");
    console.log("Computer choice: " + ropt);

    let uopt = prompt("Choose an option").toUpperCase();
    if (uopt !== "S" && uopt !== "W" && uopt !== "G") {
      alert("Please choose an valid option");
      uopt = prompt("Choose an option").toUpperCase();
    }

    if (
      (uopt === "S" && ropt === "Water") ||
      (uopt === "W" && ropt === "Gun") ||
      (uopt === "G" && ropt === "Snake")
    ){
      console.log("You just won in " + b + " attempts");
      a = true;
    } 
    else {
    console.log("Your choice: " + opt1[uopt]);
      console.log("Better Luck Next Time");
      b++;
    }
  }
}

swg();
