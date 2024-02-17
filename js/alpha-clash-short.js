function play() {
    //hide 
  const homeSection = hideElementById("home");
  const playgroundSection = showElementById("playground");
  hideElementById('final-score');
  setElementValueById('life',5);
  setElementValueById('score',0);
  playTheGame();
}

function playTheGame() {
  const alphabet = getARandomAlphabet();

  const CurrentAlphabet = document.getElementById("alphabet");
  CurrentAlphabet.innerText = alphabet;
  setBackgroundColor(alphabet);
}

document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;

  if(playerPressed === 'Escape'){
    gameOver();
  }

  const currentAlphabet = document.getElementById("alphabet");
  const currentAlphabetText = currentAlphabet.innerText;

  const currentAlphabetToLower = currentAlphabetText.toLowerCase();

  if (playerPressed === currentAlphabetToLower) {
    console.log("ok");

    const score = getElementValueByID("score");
    const newScore = score + 1;
    setElementValueById("score", newScore);

    // start a new round
    removeBackgroundColor(currentAlphabetToLower);
    playTheGame();

  } else {

    const life = getElementValueByID('life');
    const newLife = life - 1;
    setElementValueById('life', newLife);

    if(newLife === 0){
        gameOver();
    }
  }
});


function gameOver(){
    hideElementById('playground');
    showElementById('final-score'); // 
    const lastScore = getElementValueByID('score')
    setElementValueById('total-score', lastScore);

    //
    const alphabetColor = document.getElementById('alphabet');

    const alphabetColorText = alphabetColor.innerText;
    removeBackgroundColor(alphabetColorText);
}


