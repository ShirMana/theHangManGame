var countries = [
  "argentina",
  "angola",
  "austria",
  "cuba",
  "israel",
  "greece",
  "poland",
  "germany",
  "spain",
  "italy",
  "hungary",
  "australia",
  "malta",
  "mexico",
  "morocco",
  "nepal",
  "panama",
  "peru",
  "slovakia",
  "slovenia",
  "somalia",
  "sweden",
  "switzerland",
  "thailand",
  "turkey",
  "uganda",
  "ukraine",
  "uruguay",
  "uzbekistan",
  "vanuatu",
  "venezuela",
  "vietnam",
  "yemen",
  "zambia",
  "zimbabwe",
];

let tries = 10;
let letterGuessed = [];
let response = "";
let wordStat = null;

document.getElementById("tries").innerHTML = tries;

const selectRandomWord = () => {
  response = countries[Math.floor(Math.random() * countries.length)];
};
selectRandomWord();


const showHiddenWord = () => {
  wordStat = response
    .split("")
    .map((letter) => (letterGuessed.indexOf(letter) >= 0 ? letter : " * "))
    .join("");

  document.getElementById("wordPlace").innerHTML = wordStat;
};
showHiddenWord();

const eventTarget = () => {
  document.onkeyup = function(event, key) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode >= 97 && event.keyCode <= 122) {
      var letter = event.key.toLowerCase();
      guessHandler(letter);
      letterGuessed.push(letter);
      document.getElementById("userInput").value = letter;
    }
    else alert("Input is Invalid")
    }   
}
eventTarget();


const guessHandler = (letter) => {
  letterGuessed.indexOf(letter) === -1 ? letterGuessed.push(letter) : null;
  if (response.indexOf(letter) >= 0) {
    showHiddenWord();
    gameWonTesting();
  } else if (response.indexOf(letter) === -1) {
    tries--;
    updateTries();
    gameLossTesting();
  }
};

const gameWonTesting = () => {
  if (wordStat === response) {
    document.getElementById("userInput").setAttribute("disabled", true);
    document.getElementById("inputDiv").style.display = "none";
    document.getElementById("messageDiv").innerText = "  you won!!! wooohoo";
    document.getElementById("messageDiv").setAttribute("class", "text-success"); 
    document.getElementById("messageDiv").style.fontSize = "5rem";
    document.onkeyup = function(event) {
      return false;
    }
  }
};

const gameLossTesting = () => {
  if (tries === 0) {
    document.getElementById("userInput").setAttribute("disabled", true);
    document.getElementById("wordPlace").innerHTML =
      "The Word was: " + response;
    document.getElementById("inputDiv").style.display = "none"; 
    document.getElementById("messageDiv").innerText = "  you lost!!! awwwww";
    document.getElementById("messageDiv").setAttribute("class", "text-danger");
    document.getElementById("messageDiv").style.fontSize = "5rem";
    document.onkeyup = function(event) {
      return false;
    }
  }
};

const updateTries = () => {
  document.getElementById("tries").innerHTML = tries;
};









