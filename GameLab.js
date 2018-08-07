const playGame = prompt ("Do you want to play a game?");
let userHealth = 40;
let playerHealth = 10;
function randomNumber(min, max) {
 return Math.floor(min + Math.random()*(max+1 - min))
}

if (playGame === "yes"){
const userName = prompt ("Please enter your name");

let win = 0;
while (userHealth > 0 && win < 3) {
  console.log(`${userName} has ${userHealth} health left.`);
  console.log(`Grant has ${playerHealth} health left.`);
  userHealth-=randomNumber(1,2);
  playerHealth-=randomNumber(1,2);
  if (playerHealth <= 0){
    playerHealth=10;
    win++;
    console.log(`${userName} wins!`);
  } else if (userHealth === 0) {
    console.log("Game Over.");
  }
}
} else {
  console.log("Thanks for playing.");
}