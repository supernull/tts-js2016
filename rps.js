// ASSIGNMENT: 1. create a rock paper scissors game that runs until one player has three wins
// - Store the player names and number of wins for each player in variables
// - Use a while loop to run the game until one player has 3 wins-
// - Use parseInt(Math.random()*10)%3 to generate a number between 0 and 2 (0 == rock, 1 == paper, 2 == scissors)
// - Output each players hand to the console
// - Use if or switch statement to determine a winner of the round
// - Output the round winner's name to the console.
// - Keep track of how many rounds each player has won
// - When one player wins 3 rounds, announce that player's name as the game winner.

//Gather players
var player1 = "Alice";
var player2 = "Bob";

//Init their scores
var player1Tally = 0;
var player2Tally = 0;

console.log("Now playing: " + player1 + " vs. " + player2);

//Function to assign hands

function assignHands() {
  player1Score = parseInt(Math.random()*10)%3;
  player2Score = parseInt(Math.random()*10)%3;
}

//Converting a number score to a hand. There has to be a better way to do this.

function numberToHand() {
  switch(player1Score) {
    case 0:
      player1Hand = "rock";
      break;
    case 1:
      player1Hand = "paper";
      break;
    case 2:
      player1Hand = "scissors"
      break;
    default:
     console.log("Math no longer works!");
    }
    console.log(player1 + " throws: " + player1Hand);

    switch(player2Score) {
      case 0:
        player2Hand = "rock";
        break;
      case 1:
        player2Hand = "paper";
        break;
      case 2:
        player2Hand = "scissors"
        break;
      default:
       console.log("Math no longer works!");
      }
    console.log(player2 + " throws: " + player2Hand);
}

//Function to compare hands
function compareHands() {

  switch(player1Hand + "-" + player2Hand)  {
    case "rock-paper" :
      console.log("Paper beats rock. " + player2 + " wins the round!");
      player2Tally++;
      break;

    case "scissors-paper" :
        console.log("Scissors beat paper. " + player1 + " wins the round!");
        player1Tally++;
        break;

    case "paper-rock" :
        console.log("Paper beats rock. " + player1 + " wins!");
        player1Tally++;
        break;

    case "paper-scissors" :
      console.log("Scissors beat paper. " + player2 + " wins!");
      player2Tally++;
      break;

    case "scissors-rock" :
      console.log("Rock beats scissors. " + player2 + " wins!");
      player2Tally++;
      break;

    case "rock-scissors" :
      console.log("Rock beats scissors. " + player1 + " wins!");
      player1Tally++;
      break;

    default :
     console.log("Tie!");
     break;
  }
}

function printTally() {  console.log("Tally: " + player1 + " scored: " + player1Tally + " | " + player2 + " scored: " + player2Tally); }

//Declare winner, add to their tally

var theWinner = 0;
var roundCount = 1;

function isWinner() {
  if (player1Tally === 3) {
    var theWinner = player1 + " wins the game!";
  }
  if (player2Tally === 3) {
    var theWinner = player2 + " wins the game!";
  }
  if(theWinner) {console.log(theWinner)}
}

//Round loop UNTIL a player's score is 3
while (player1Tally < 3 && player2Tally < 3 ) {
  console.log("Round " + roundCount + "!");
  assignHands();
  numberToHand();
  compareHands();
  printTally();
  roundCount++
  isWinner();
}
