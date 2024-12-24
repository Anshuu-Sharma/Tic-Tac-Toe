console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let turnSound = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn  = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = () =>{
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () =>{
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e  =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.turn_indicator').innerText = boxtexts[e[0]].innerHTML + " Won";
            gameOver= true;
            document.querySelector('.info_area_container').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("turn_indicator")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset
let reset = document.getElementById('reset_btn');
reset.addEventListener('click', () =>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("turn_indicator")[0].innerText = "Turn for " + turn;
    document.querySelector('.info_area_container').getElementsByTagName('img')[0].style.width = "200px";
})