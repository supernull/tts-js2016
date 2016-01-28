// Define a hands array with the values 'rock', 'paper', and 'scissors';
// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
// Define two objects for two players. Each player has name and getHand() properties.
// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)
// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

var hands = ['rock','paper','scissors']

function getHand() {
  return hands[parseInt(Math.random()*10)%3]
}

var player1 = {
  name: 'Alice',
  hand: getHand(),
  wins: 0
}

var player2 = {
  name: 'Bob',
  hand: getHand(),
  wins: 0
}

function playRound(player1,player2) {
  var hand1 = getHand();
  var hand2 = getHand();
  var player1Win = 0;
  var player2Win = 0;

  console.log(player1.name + " throws " + hand1 + "! " + player2.name + " throws " + hand2 + "!");

  if ( hand1===hand2 ) {
     var winner = "It's a tie!"
  } else if ((hand1=="scissors" && hand2=="paper") || (hand1=="rock" && hand2=="scissors") || (hand1=="paper" && hand2=="rock")) {
      var winner = player1.name + " wins!";
      player1.wins++
  }  else {
      var winner = player2.name + " wins!";
      player2.wins++ }

    console.log(winner);
    return winner
  }

function playGame(player1,player2,playUntil) {
  while(player1.wins < playUntil && player2.wins < playUntil) {
      playRound(player1,player2);
  }

 console.log(player1.name + " won " + player1.wins + " times. " + player2.name + " won " + player2.wins + " times.")

   if(player1.wins > player2.wins) {
      var gameWinner = player1.name;
    } else {
      var gameWinner = player2.name;
    }
  return gameWinner + " wins the whole game!"
}

console.log(playGame(player1,player2,5));
