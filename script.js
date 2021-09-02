let playerScore = 0;
let computerScore = 0;
let playerSelection;

const container = document.getElementById('container');
const messageCont = document.getElementById('msg-container');
const message = document.getElementById('message');
const buttons = document.getElementById('btn-container');
const pScore = document.getElementById('infoPScore');
const cScore = document.getElementById('infoCScore');




function startGame(){
  message.textContent= "Press any of the three buttons above to select your champion! Good Luck!";
  playerScore = 0;
  computerScore = 0;
  buttons.setAttribute('style','display:flex');
  messageCont.style.position = '';
  messageCont.style.bottom = '';

  window.addEventListener('click', function(e) {

    // console.log('target: ' + e.target.value);
    // console.log('value: ' + e.target.alt);
  
    function computerPlay() {
      let choice = ['rock', 'paper', 'scissors']
      return choice[Math.floor (Math.random() * choice.length)]
    }
  
      let computerSelection = computerPlay();
  
    function checkSelection() {
      if (e.target.value || e.target.alt === 'rock') {
        playerSelection = 'rock';
      } else if (e.target.value || e.target.alt === 'paper') {
        playerSelection = 'paper';
      } else if (e.target.value || e.target.alt === 'scissors') {
        playerSelection = 'scissors';
      } else playerSelection = '';
      return playerSelection;
    }
  
    function endGame() {
       
      buttons.setAttribute('style', 'display: none');
      messageCont.setAttribute('style', 'position:absolute');
      messageCont.setAttribute('style', 'bottom:80');
      const resetBtn = document.createElement('button');
      resetBtn.textContent = 'RESET GAME';
      resetBtn.setAttribute('id', 'resetBtn');
      container.insertBefore(resetBtn,messageCont);
      

      function resetGame() {
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = 'Player: ' + playerScore;
        cScore.textContent = 'Computer: ' + computerScore;
        container.removeChild(resetBtn);
        startGame();
      }
  
      
     
      resetBtn.addEventListener('click', resetGame);
      playerScore= 0 ;
      computerScore= 0;
      
    }
  
    function playRound() {
      if (playerSelection == 'rock' && computerSelection == 'scissors' || 
              playerSelection == 'paper' && computerSelection == 'rock'  ||
              playerSelection == 'scissors' && computerSelection == 'paper') {
                playerScore += 1;
                console.log('pscore:' +playerScore);
                console.log('cscore:' +computerScore);
                message.textContent = 'YOU WIN! COMPUTER CHOSE ' + computerSelection.toUpperCase() + '. ' + playerSelection.toUpperCase() + ' BEATS ' + computerSelection.toUpperCase() + '!' ;
                pScore.textContent = 'Player: ' + playerScore;
                cScore.textContent = 'Computer: ' + computerScore;
      } else if (playerSelection == 'scissors' && computerSelection == 'rock' || 
               playerSelection == 'rock' && computerSelection == 'paper'  ||
               playerSelection == 'paper' && computerSelection == 'scissors') {
                computerScore += 1;
                console.log('pscore:' +playerScore);
                console.log('cscore:' +computerScore);
                message.textContent ='YOU LOSE! COMPUTER CHOSE ' + computerSelection.toUpperCase() + '. ' + computerSelection.toUpperCase() + ' BEATS ' + playerSelection.toUpperCase() + '!' ;
                pScore.textContent = 'Player: ' + playerScore;
                cScore.textContent = 'Computer: ' + computerScore;
      } else if (playerSelection == computerSelection) {
        message.textContent = 'TIE GAME! TRY AGAIN!' ;
        console.log('pscore:' +playerScore);
        console.log('cscore:' +computerScore);
      } 
  
      if (playerScore == 5 || computerScore == 5) 
        endGame();
        
    }
  
    
  
    checkSelection();
  
    playRound();

    if (playerScore === 5 ) {
      message.textContent = 'Congratulations! You beat the computer! You were the first to reach 5 points!';
    } else if (computerScore === 5) {
      message.textContent = 'Tough luck, you lost! Computer was the first to reach 5 points! Try Again!';
    }
  
    
  
  })
}

startGame();

    




