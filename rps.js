function getComputerChoice(){
    const random = Math.random()
    if (random < 1/3 ){
        return  "rock"
    }
    else if (random < 2/3 ){
        return "paper"
    }
    else{
        return "scissors"
    }
};

function getHumanChoice(){
    const choice = prompt("Please enter your choice (rock/paper/scissors):")
    if (choice.toLowerCase() === "rock"){
        return "rock"
    }
    else if (choice.toLowerCase() === "paper"){
        return "paper"
    }
    else if (choice.toLowerCase() === "scissors"){
        return "scissors"
    }
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice , computerChoice){
        humanChoice= humanChoice.toLowerCase()
        if (humanChoice === computerChoice){
            console.log(`It's a tie! you both chose ${humanChoice}`)
        }
        else if ((humanChoice === "rock" && computerChoice === "scissors") || ( humanChoice === "scissors" && computerChoice === "paper") || (humanChoice=== "paper" && computerChoice === "rock")){
            humanScore += 1
            console.log(`Congrats you win the game! ${humanChoice} beats ${computerChoice}.`)
        }
        else{
            computerScore += 1
            console.log(`Ohh sorry you lose! ${computerChoice} beats ${humanChoice}.`)
        }
    }
    // for (let i= 1 ; i < 6; i++){
        
    //     console.log(`Round ${i}`)
    //     const humanSelection = getHumanChoice()
    //     const computerSelection = getComputerChoice()
    //     playRound(humanSelection, computerSelection)
    // }
    const head = document.querySelector(".head")
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    const btn3 = document.createElement("button")
    btn1.textContent = "rock"
    btn2.textContent = "paper"
    btn3.textContent = "scissors"

    head.append(btn1 , btn2 ,btn3)
    btn1.addEventListener("click", (e)=>{
        const computerSelection = getComputerChoice()
        playRound(e.target.textContent, computerSelection)
    })
    btn2.addEventListener("click", (e)=>{
        const computerSelection = getComputerChoice()
        playRound(e.target.textContent, computerSelection)
    })
    btn3.addEventListener("click", (e)=>{
        const computerSelection = getComputerChoice()
        playRound(e.target.textContent, computerSelection)
    })
    console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`)
    if (humanScore == computerScore){
        console.log(`You both got the same score! ${humanScore}`)
        console.log("Refresh to play again")
    }
    else if (humanScore > computerScore){
        console.log("Congratulation you'er the winner!")
        console.log("Refresh to Play again")
    }
    else{
        console.log("Sorry! you lose the game")
        console.log("Refresh to Try again")
    }

}

playGame()



