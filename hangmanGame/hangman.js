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
let errors = 0;
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
    .map((letter) => (letterGuessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordPlace").innerHTML = wordStat;
};

showHiddenWord();

const createButtons = () => {
  let screenButtons = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
        <button
        class = "btn btn-md btn-info m-1"
        id = '` +
        letter +
        `'
        onClick = "guessHandler('` +
        letter +
        `')">
        ` +
        letter +
        `
        </button>`
    )
    .join("");

  document.getElementById("keys").innerHTML = screenButtons;
};

createButtons();

const guessHandler = (letter) => {
  letterGuessed.indexOf(letter) === -1 ? letterGuessed.push(letter) : null;
  document.getElementById(letter).setAttribute("disabled", true);

  if (response.indexOf(letter) >= 0) {
    showHiddenWord();
    gameWonTesting();
  } else if (response.indexOf(letter) === -1) {
    errors++;
    updateErrors();
    gameLossTesting();
    pictureUpdate();
  }
};

const gameWonTesting = () => {
  if (wordStat === response) {
    document.getElementById("keys").innerHTML = " yayyyyyyy!!! you won!";
    document.getElementById("keys").setAttribute("class", "text-success");
  }
};

const pictureUpdate = () =>{
  document.getElementById("hangmanPicture").src= "images/" + errors + ".jpg";
};

const gameLossTesting = () => {
  if (errors === tries) {
    document.getElementById("wordPlace").innerHTML =
      "The Word was: " + response;
    document.getElementById("keys").innerHTML = " awwwww!!! you lost...";
    document.getElementById("keys").setAttribute("class", "text-danger");
  }
};

const updateErrors = () => {
  document.getElementById("errors").innerHTML = errors;
};

const reset = () => {
  errors = 0;
  letterGuessed = [];

  document.getElementById("hangmanPicture").src= "images/0.jpg";

  selectRandomWord();
  showHiddenWord();
  updateErrors();
  createButtons();
};


