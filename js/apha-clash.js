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
    playTheGame();
    removeBackgrounColor(currentAlphabetToLower);
  }
});
