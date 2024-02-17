// function play(){
//     const homeSection = document.getElementById('home');

//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

function play() {
  const homeSection = hideElementById("home");

  const playgroundSection = showElementById("playground");
  playTheGame();
}

function playTheGame() {
  const alphabet = getARandomAlphabet();

  const CurrentAlphabet = document.getElementById("alphabet");
  CurrentAlphabet.innerText = alphabet;

  // generate a random alphabet
  // getARandomAphabet();
  setBackgroundColor(alphabet);
}

document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;

  const currentAlphabet = document.getElementById("alphabet");
  const currentAlphabetText = currentAlphabet.innerText;

  const currentAlphabetToLower = currentAlphabetText.toLowerCase();

  if (playerPressed === currentAlphabetToLower) {
    console.log("ok");

    const score = getElementValueByID('score');
    const newScore = score + 1;

    setElementValueById('score', newScore);
    // score increasing
    // const score = document.getElementById("score");
    // const scoreText = score.innerText;
    // const scoreTextToNum = parseInt(scoreText);
    // const newScore = scoreTextToNum + 1;
    // score.innerText = newScore;

    // start a new round
    playTheGame();
    removeBackgrounColor(currentAlphabetToLower);
  } else {
    // life decreasing
    //  const life = document.getElementById('life');
    //  const lifeText = life.innerText;
    //  const lifeTextToNum = parseInt(lifeText);
    //  const newLife = lifeTextToNum - 1;
    //  life.innerText = newLife;
  }
});
