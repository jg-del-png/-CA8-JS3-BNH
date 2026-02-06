// Collect the player's name
let playerName = prompt("Welcome to Bear Ninja Hunter! What is your name?");

// Greet the player with a personalized alert
alert("Hello " + playerName + "! Get ready to play Bear Ninja Hunter!");


// Ask the player to choose a fighter
let playerChoice = prompt("Choose your fighter: Bear, Ninja, or Hunter");

if (playerChoice === null)  {
    
    alert("You canceled the game."); 
    }
else{

playerChoice = playerChoice.toLowerCase();

// Keep asking until the choice is valid
while (playerChoice !== "bear" && playerChoice !== "ninja" && playerChoice !== "hunter") {
  alert("Invalid choice. Please type Bear, Ninja, or Hunter.");
  playerChoice = prompt("Choose Bear, Ninja, or Hunter").toLowerCase();

  
}
}


// Log the result to the console
console.log(playerName + " has chosen " + playerChoice + " as their fighter!");




// Step 3: Generate computer choice
let choices = ["bear", "ninja", "hunter"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Step 4: Determine outcome
let outcome = "";

if (playerChoice === computerChoice) {
  outcome = "It's a tie!";
}
 else if (
  (playerChoice === "bear" && computerChoice === "ninja") ||
  (playerChoice === "ninja" && computerChoice === "hunter") ||
  (playerChoice === "hunter" && computerChoice === "bear")
) 

{
  outcome = "You win!";
}

else {
  outcome = "You lose!";
}

// Step 5: Display results
console.log(playerName + " you chose " + playerChoice + "The computer chose " + computerChoice + outcome);


document.getElementById("gameResults").innerHTML = playerName + " you chose " + playerChoice + ". The computer chose " + computerChoice + ". " + outcome;

let playAgain;
setTimeout(() => {
  playAgain = prompt("Do you want to play again? Type yes or no").toLowerCase();
  if (playAgain === "yes") {
    location.reload();
  } else if (playAgain === "no") {
    alert("Thanks for playing! Goodbye!");
  } else {
    alert("Invalid choice. Please type Yes or No");
    playAgain = prompt("Do you want to play again? Type yes or no").toLowerCase();
  }


}, 3000);

 