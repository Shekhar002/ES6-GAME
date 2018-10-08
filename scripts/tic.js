window.addEventListener("load", bindEvents);

var isXorZero = false;

var buttons;
var gameEnd = false;

function showTic() {
    console.log("Tic");
    if(gameEnd==false){
        if(this.innerText.trim().length == 0){
            this.innerText = isXorZero?"X":"0";
            isXorZero = !isXorZero;
            isGameOver();
        }
    }

    // this.innerText = "Hello";
}

function bindEvents(){
    buttons = document.querySelectorAll("#btn");
    for(let button of buttons) {
        button.addEventListener("click", showTic);
    }
}

function isNotBlank(button) {
    return button.innerText.trim().length == 0?false:true;
}

function isRowSame(first, second, third) {
    if(isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third])){
        return buttons[first].innerText == buttons[second].innerText && buttons[first].innerText == buttons[third].innerText;
    }
    return false;
}

function isGameOver() {
    if(isRowSame(0,1,2)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
    else if(isRowSame(3,4,5)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
    else if(isRowSame(6,7,8)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
    else if(isRowSame(0,4,8)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
    else if(isRowSame(0,3,6)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
    else if(isRowSame(1,4,7)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
    else if(isRowSame(2,5,8)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
    else if(isRowSame(2,4,6)){
        document.querySelector("#results").innerText = "GAME OVER";
        gameEnd = true;
    }
}
function reset(){
    var btn = document.querySelectorAll("#btn");
    for(let i=0;i<btn.length;i++){
        btn[i].innerText= '';
    }
    gameEnd=false;
    document.querySelector("#results").textContent="";
}
bindEvents();
