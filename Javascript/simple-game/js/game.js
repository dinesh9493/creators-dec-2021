var mario = document.getElementById("mario"); 
var cactus = document.getElementById("cactus"); 

function jump() {
    mario.classList.add("make-it-jump");
    setTimeout(() => {
        mario.classList.remove("make-it-jump");
    }, 1000);
}


var jumping = setInterval(() => {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft > 0 && cactusLeft < 40 && marioTop >= 200) {
        alert("Ouch...!!!");
    }
}, 10);
