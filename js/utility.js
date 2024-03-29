function hideElementById(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function showElementById(id) {
  const element = document.getElementById(id);
  element.classList.remove("hidden");
}
function setBackgroundColor(alphaId) {
  const alphabetId = document.getElementById(alphaId);
  alphabetId.classList.add("bg-orange-400");
}

function removeBackgroundColor(alphaId) {
  const alphabetId = document.getElementById(alphaId);
  alphabetId.classList.remove("bg-orange-400");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const random = Math.random() * 25;
  const randomIndex = Math.round(random);
  const randomAlphabets = alphabets[randomIndex];

  // console.log(randomAlphabets)
  return randomAlphabets;
}

function getElementValueByID(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementTextToNum = parseInt(elementText);
  return elementTextToNum;
}


function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

