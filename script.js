// Create function computerPlay

function computerPlay() {
  let choice = ['rock', 'paper', 'scissors']
  return choice[Math.floor (Math.random() * choice.length)]
}




//Create function playRound(playerSelection, computerSelection) -- make playerSelection case insensitive
//also return the results of playRound

let computerSelection = computerPlay();

let playerScore = 0 ;
let computerScore = 0;

function playRound() {
  
  let playerSelection=prompt('Choose "rock", "paper" or "scissors" ');

  if     (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors' || 
          playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'  ||
          playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
            playerScore += 1
            alert('YOU WIN! COMPUTER CHOSE ' + computerSelection.toUpperCase() + '. ' + playerSelection.toUpperCase() + ' BEATS ' + computerSelection.toUpperCase() + '! Player score: ' + playerScore + ' , Computer score: ' + computerScore + ' .'  )
     }

  else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock' || 
           playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'  ||
           playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
            computerScore += 1
            alert('YOU LOSE! COMPUTER CHOSE ' + computerSelection.toUpperCase() + '. ' + computerSelection.toUpperCase() + ' BEATS ' + playerSelection.toUpperCase() + '! Player score: ' + playerScore + ' , Computer score: ' + computerScore + ' .'  )
  }

  else if (playerSelection.toLowerCase() == computerSelection) {
    alert('TIE GAME! TRY AGAIN! Player score: ' + playerScore + ' , Computer score: ' + computerScore + ' .'  )
  }

  else {
    alert('PLEASE CHOOSE ROCK, PAPER OR SCISSORS')
  }

  
}




// Create function game() that loops playRound five times

function game() {
  playRound()
  playRound()
  playRound()
  playRound()
  playRound()
  if (playerScore > computerScore) {
    alert('Congratulations! You won the game! Final score - player: ' + playerScore + ', computer: ' + computerScore + '. Refresh the page to play again!')
  }

  else if (playerScore  < computerScore) {
    alert('You lost! Try again! Final score - player:' + playerScore + ', computer: ' + computerScore + '. Refresh the page to play again!')
  }

  else {
    alert('Tie Game! Final score - player:' + playerScore + ', computer: ' + computerScore + '. Refresh the page to play again!')
  }
}

game()