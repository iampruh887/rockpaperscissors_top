console.log("Hello world");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
let gameActive = true;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const k = Math.random();
  if (k <= 0.33) return choices[0];
  else if (k <= 0.66) return choices[1];
  else return choices[2];
}

function handleChoice(choice) {
  if (!gameActive) return;
  gameActive = false;

  const elements = {
    rock: rock,
    paper: paper,
    scissor: scissor,
  };

  // Add chosen class to selected element and notchosen to others
  Object.entries(elements).forEach(([key, element]) => {
    if (key === choice) {
      element.classList.add("chosen");
    } else {
      element.classList.add("notchosen");
    }
  });

  // Wait a bit before showing computer's choice
  setTimeout(() => {
    const computerChoice = getComputerChoice();
    const computerElement = elements[computerChoice];

    // Remove notchosen from computer's choice and add computer-choice class
    computerElement.classList.remove("notchosen");
    computerElement.classList.add("computer-choice");

    // Determine winner and show result
    setTimeout(() => {
      const result = playRound(choice, computerChoice);
      if (result === 0) {
        // human lost
        elements[choice].classList.add("destroy");
        computerScore++;
      } else if (result === 1) {
        // human won
        computerElement.classList.add("destroy");
        humanScore++;
      } else {
        // tie
        elements[choice].style.border = "10px green solid";
        computerElement.style.border = "10px green solid";
      }

      // Update score display
      updateScore();
    }, 1000);

    // Reset after delay
    setTimeout(resetGame, 2500);
  }, 300);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 2; // Tie
  }

  if (humanChoice === "rock") {
    return computerChoice === "paper" ? 0 : 1;
  } else if (humanChoice === "paper") {
    return computerChoice === "scissor" ? 0 : 1;
  } else if (humanChoice === "scissor") {
    return computerChoice === "rock" ? 0 : 1;
  }
}

function resetGame() {
  [rock, paper, scissor].forEach((element) => {
    element.classList.remove(
      "chosen",
      "notchosen",
      "computer-choice",
      "destroy",
    );
    element.style.border = "";
  });
  gameActive = true;
}

function updateScore() {
  console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

rock.addEventListener("click", () => handleChoice("rock"));
paper.addEventListener("click", () => handleChoice("paper"));
scissor.addEventListener("click", () => handleChoice("scissor"));
