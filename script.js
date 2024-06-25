console.log("Hello world")

function getComputerChoice()
{
    const choices = ["rock", "paper", "scissor"];

    k = Math.random();
    if(k<=0.33){
        return choices[0];
    }
    else if(k<=0.66){
        return choices[1];
    }
    else{
        return choices[2];
    }
}

function getHumanChoice()
{
    let choice;
    while(true)
    {
        choice = String(prompt("Enter choice"));
        let newt  = "" + choice.toLowerCase();
        if ((newt == "rock") || (newt=="paper")||(newt=="scissor"))
        {
            return newt;
            break
        }
        else
        {
            alert("Enter a valid choice")
        }
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock"){
        if(computerChoice == "paper"){
            return 0;
        }
        else if(computerChoice == "rock"){
            return 2;
        }
        else{
            return 1;
        }
    }
    else if (humanChoice == "paper"){
        if(computerChoice == "paper"){
            return 2;
        }
        else if(computerChoice == "rock"){
            return 1;
        }
        else{
            return 0;
        }
    }
    else if(humanChoice=="scissor"){
        if(computerChoice == "paper"){
            return 1;
        }
        else if(computerChoice == "rock"){
            return 0;
        }
        else{
            return 2;
        }
    }
}



let humanScore = 0, computerScore = 0;

let gamerounds = 5;
while(gamerounds > 0){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if(result === 0){
        console.log("Round: " + String(gamerounds) + " || " +  "You lose! " + computerChoice + " beats " + humanChoice + "." );
    }
    if(result === 1){
        console.log("Round: " + String(gamerounds) + " || " + "You win! " + humanChoice + " beats " + computerChoice + "." );
    }
    if(result === 2){
        console.log("Round: " + String(gamerounds) + " ||  "+  "Its a tie! " + humanChoice + "--" + computerChoice + "." );
    }
    gamerounds -= 1;
}