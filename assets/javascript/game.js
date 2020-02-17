window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("character").innerHTML = answer;
  updateScreen();
});

var guessed = [];
var characterWords = ["BYLETH", "EDELGARD", "DIMITRI", "CLAUDE", "SOTHIS", "HUBERT", "FERDINAND", "LINHARDT", "CASPAR", "BERNADETTA", "DOROTHEA", "PETRA", "JERITZA", "EMILE", "DEDUE", "FELIX", "ASHE", "SYLVAIN", "MERCEDES", "INGRID", "ANNETTE", "GILBERT", "HILDA", "IGNATZ", "RAPHAEL", "LORENZ", "LYSITHEA", "MARIANNE", "LEONIE", "RHEA", "SEIROS", "SETETH", "FLAYN", "MANUELA", "HANNEMAN", "CYRIL", "JERALT", "ALOIS", "CATHERINE", "SHAMIR", "YURI", "CONSTANCE", "BALTHUS", "HAPI", "MONICA", "KRONYA", "TOMAS", "SOLON", "ARUNDEL", "THALES", "CORNELIA", "NEMESIS", "DEATH KNIGHT", "FLAME EMPEROR"];
var winCount = document.getElementById("wincount");
var loseCount = document.getElementById("losecount");
var wins = 0;
var losses = 0;
var incorrect = document.getElementById("incorrect");
var guessesLeft = document.getElementById("guessesLeft");
var gameOver = document.getElementById("GameOver");
var random = Math.floor(Math.random()*characterWords.length);
var randomPerson = characterWords [random];
var answer = [];

function getRandomPerson(){
  random = Math.floor(Math.random()*characterWords.length);
  randomPerson = characterWords [random];
}

underScore();
function underScore(){
for (var i = 0; i < randomPerson.length; i++) {
  if(randomPerson.charAt(i) === " "){
    answer.push(" ");
  }
  else{
    answer.push("_");
  }  
  }
}

var answerElm = document.getElementById("character");

function updateScreen(){
  answerElm.textContent = "";
  var s = answer.join(" ");
  answerElm.innerHTML = s;
}

var guesses = 8;

document.onkeyup = function(event) {
var userKey = event.key;
var letterCheck = true;
var numberCheck = (/^[a-zA-Z()]+$/.test(userKey.toUpperCase()));
console.log(numberCheck);
  for (var i = 0; i < guessed.length; i++){
    if (numberCheck == false || userKey.toUpperCase() === guessed[i]) {
      letterCheck = false;
  }
}
if (letterCheck == true && numberCheck) {
  checkGuess(userKey.toUpperCase());
  guessed.push(userKey.toUpperCase());
  }
}
  
function checkGuess(key){
  var correctLetter = false;
for(var i = 0; i < randomPerson.length;i++){
  if(randomPerson.charAt(i) === key){
      answer[i] = randomPerson.charAt(i);
      correctLetter = true;
      gameWin();
    }
  }

  if(correctLetter == false){
    guesses--;
    ifGameOver();
    guessesLeft.innerHTML = "";
    guessesLeft.innerHTML += guesses;
    incorrect.innerHTML += key;
  }
  updateScreen();
}

function gameWin(){
  if (randomPerson === answer.join("")){
    wins++
    winCount.innerHTML = "";
    winCount.innerHTML = wins;
    alert("Victory! The answer was " + randomPerson + ".");
    resetGame();
  }
}

function ifGameOver(){
  if(guesses <= 0){
  losses++
  loseCount.innerHTML = "";
  loseCount.innerHTML = losses;
  alert("Game Over! The answer was: " + randomPerson);
  resetGame();
  }
}

function resetGame(){
  guesses = 8;
  guessesLeft.innerHTML = "";
  guessesLeft.innerHTML = guesses;
  guessed.length = 0;
  incorrect.innerHTML = "";
  answer.length = 0;
  getRandomPerson();
  underScore();
}
