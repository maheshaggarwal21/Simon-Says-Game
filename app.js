let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if(!started) {
        started = true;
        console.log("Game Started");
    }
})
