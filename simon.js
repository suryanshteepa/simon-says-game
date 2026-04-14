let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"]; 

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelup();  
    }
})

function gameflash(btn){
btn.classList.add("gameflash");
setTimeout(function() {
    btn.classList.remove("gameflash");
}, 250);
}

function userflash(btn){
btn.classList.add("userflash");
setTimeout(function() {
    btn.classList.remove("userflash");
}, 250);
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameseq.push(randColor);
    gameflash(randbtn);
}

function checkans(idx) {
    // console.log("curr level :" , level);
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
             setTimeout(levelup , 1000) ;
        }
    }else{
         h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press any key to start`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
         },150);
         reset();
    }
} 

function btnpress() {
    console.log(this);
    let btn = this;
    userflash(btn)

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn"); 
for(btn of allBtns) {
    btn.addEventListener("click" , btnpress);
}

function reset() {
    started=false;
    userseq = [];
    gameseq = [];
    level = 0;
}