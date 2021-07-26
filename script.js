// Create array with available choices

const choice = ['rock', 'paper', 'scissors'];
console.log(choice);

// Create a function for the computer's play to randomly select rock, paper or scissors and store it in variable

let computerPlay = choice[ Math.floor (Math.random() * choice.length )];
   console.log(computerPlay);


// Create a variable that stores the user's input called playerSelection

let playerSelection = prompt('Choose: ', 'rock, paper or scissors?' );



if (playerSelection == null) {
  alert('Please write a valid term("rock", "paper" or "scissors")')
}
  else if (playerSelection.toLowerCase() == 'rock') {
    if (computerPlay == 'paper') { 
        alert('You lose! Paper beats rock!')
    } else if (computerPlay == 'scissors') {
        alert('You win! Rock beats scissors!')
    } else {
        alert('Draw! Computer also chose rock!')} 

} else if (playerSelection.toLowerCase() == 'paper') {
    if (computerPlay == 'rock') {
        alert('You win! Paper beats rock!')
    } else if (computerPlay == 'scissors') {
        alert('You lose! Scissors beats paper!')
    } else {
        alert('Draw! Computer also chose paper!')
    }

} else if (playerSelection.toLowerCase() == 'scissors') {
    if (computerPlay == 'rock') {
      alert('You lose! Rock beats scissors')
    } else if (computerPlay == 'paper') {
      alert('You win! Scissors beats paper!')
    } else {
      alert('Draw! Computer also chose scissors!')
    }

} else { 
  alert('Please write a valid term("rock", "paper" or "scissors")')};