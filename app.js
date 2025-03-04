started = false;
gameSeq = [];
userSeq = [];

document.addEventListener("keypress", function() {
    if(!started) {
        started = true;
        console.log("Game Started");
    }
})