// DECLARE VARIABLES AND GET ELEMENTS
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let targetValue = '';
let targetAlt = '';

const container = document.getElementById('container');
const messageCont = document.getElementById('msg-container');
const message = document.getElementById('message');
const buttons = document.getElementById('btn-container');
const pScore = document.getElementById('infoPScore');
const cScore = document.getElementById('infoCScore');

// CREATE FUNCTION endGame
function endGame() {

  // HIDE RPS BUTTONS AND CREATE RESET BUTTON
  buttons.setAttribute('style', 'display: none');
  messageCont.setAttribute('style', 'position:absolute');
  messageCont.setAttribute('style', 'bottom:80');
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'RESET GAME';
  resetBtn.setAttribute('id', 'resetBtn');
  container.insertBefore(resetBtn,messageCont);

  // DECLARE OVERALL WINNER
  if (playerScore === 5 ) {
    message.textContent = 'Congratulations! You beat the computer! You were the first to reach 5 points!';
  } else if (computerScore === 5) {
    message.textContent = 'Tough luck, you lost! Computer was the first to reach 5 points! Try Again!';
  }

}




// CREATE FUNCTION FRESHGAME
function freshGame() {

  
  //SET INITIAL VALUES
  playerSelection = '';
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = 'Player: ' + playerScore;
  cScore.textContent = 'Computer: ' + computerScore;
  message.textContent= "Press any of the three buttons above to select your champion! Good Luck!";
  buttons.setAttribute('style','display:flex');
  messageCont.style.position = '';
  messageCont.style.bottom = '';

  window.addEventListener('click', function(e) {
    
  // CREATE FUNCTION startGame
  function startGame() {

  


    // STORE COMPUTER CHOICE IN VARIABLE CALLED computerSelection AND RETURN IT

    function computerPlay() {
      let choice = ['rock', 'paper', 'scissors']
      return choice[Math.floor (Math.random() * choice.length)]
    }

    let computerSelection = computerPlay();
    

  
    // STORE VALUE OF USER'S CLICK IN playerSelection AND RETURN IT
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

    //CALL FUNCTION checkSelection;
    checkSelection(); 
    console.log(playerSelection);



  // PLAYROUND FUNCTION
    // COMPARE playerSelection TO computerSelection
    // MODIFY SCORE
    // DECLARE WINNER
    // DECLARE SCORE

  function playRound() {
    if (playerSelection == 'rock' && computerSelection == 'scissors' || 
                playerSelection == 'paper' && computerSelection == 'rock'  ||
                playerSelection == 'scissors' && computerSelection == 'paper') {
                playerScore += 1;
                console.log('pscore win:' +playerScore);
                console.log('cscore:' +computerScore);
                message.textContent = 'YOU WIN! COMPUTER CHOSE ' + computerSelection.toUpperCase() + '. ' + playerSelection.toUpperCase() + ' BEATS ' + computerSelection.toUpperCase() + '!' ;
                pScore.textContent = 'Player: ' + playerScore;
                cScore.textContent = 'Computer: ' + computerScore;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock' || 
               playerSelection == 'rock' && computerSelection == 'paper'  ||
               playerSelection == 'paper' && computerSelection == 'scissors') {
                computerScore += 1;
                console.log('pscore lose:' +playerScore);
                console.log('cscore:' +computerScore);
                message.textContent ='YOU LOSE! COMPUTER CHOSE ' + computerSelection.toUpperCase() + '. ' + computerSelection.toUpperCase() + ' BEATS ' + playerSelection.toUpperCase() + '!' ;
                pScore.textContent = 'Player: ' + playerScore;
                cScore.textContent = 'Computer: ' + computerScore;
    } else if (playerSelection == computerSelection) {
      console.log('pscore tie:' +playerScore);
      console.log('cscore tie:' +computerScore);
        message.textContent = 'TIE GAME! TRY AGAIN!' ;
        pScore.textContent = 'Player: ' + playerScore;
        cScore.textContent = 'Computer: ' + computerScore;
    };

    function checkEnd() {
      if (playerScore == 5 || computerScore == 5) {

        function resetClick() {
          container.removeChild(resetBtn);
          freshGame();
        }

        endGame();
        resetBtn.addEventListener('click', resetClick);      
      }
    };

    //  CALL FUNCTION CHECKEND
    checkEnd()
    
    
    
    
  }

  //CALL FUNCTION playRound
  playRound();
    
  }
  startGame();
  });
  
}


freshGame();

 

