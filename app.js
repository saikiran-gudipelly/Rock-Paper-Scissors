let userScore = 0;
let computerScore = 0;

let compGen = () => {
    let options = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    let compChoice = options[randomIdx];
    return compChoice;
}

const Draw = () => {
    console.log("game was draw");
}

let uscore = document.querySelector(".user-score");
let cscore = document.querySelector(".comp-score");
let msg = document.querySelector("#msg");

const showWinner = (userWin) => {
    if(userWin){
        msg.innerHTML = "You Win";
        msg.style.backgroundColor = "green";
       uscore.innerHTML = userScore++;
    }
    else{
        msg.innerHTML = "You Lose";
        msg.style.backgroundColor = "red";
        cscore.innerHTML = computerScore++;
    }
}

const playGame = (userChoice) => {
    //user choice
    console.log("user's choice " ,userChoice);
    //computer generated choice
    let computerChoice = compGen();
    console.log("computer choice ", computerChoice);

    if(userChoice === computerChoice){
         msg.innerHTML = "Game was Draw";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
        Draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
         userWin = computerChoice === "rock" ? true : false
        }
        else{
           
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    

     
       

    }
    
let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
