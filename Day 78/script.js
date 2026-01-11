let messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

let i = 0;
let j = 0;
let head = document.querySelector("#head");

function randomDelay() {
    return Math.floor(Math.random() * 6000) + 1000;
}

function showMessage() {
    if (i >= messages.length) return;

    head.textContent = "";

    let typingInterval = setInterval(() => {
        if (j < messages[i].length) {
            head.textContent += messages[i][j];
            j++;
        } else {
            clearInterval(typingInterval);
            j = 0;
            blinkDots();
        }
    }, 80);
}

function blinkDots() {
    let dots = 0;

    let dotInterval = setInterval(() => {
        if (dots < 3) {
            head.textContent += ".";
            dots++;
        } else {
            head.textContent = head.textContent.replace(/[.]/g, "");
            dots = 0;
        }
    }, 200);

    setTimeout(() => {
        clearInterval(dotInterval);
        i++;
        showMessage();
    }, randomDelay());
}

showMessage();
