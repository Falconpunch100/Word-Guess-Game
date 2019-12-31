window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("character").innerHTML = answer;
  console.log('DOM fully loaded and parsed');
});

// Valid letters to guess.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// All possible words to guess.
var characterWords = ["BYLETH", "EDELGARD", "DIMITRI", "CLAUDE", "SOTHIS", "HUBERT", "FERDINAND", "LINHARDT", "CASPAR", "BERNADETTA", "DOROTHEA", "PETRA", "JERITZA", "EMILE", "DEDUE", "FELIX", "ASHE", "SYLVAIN", "MERCEDES", "INGRID", "ANNETTE", "GILBERT", "HILDA", "IGNATZ", "RAPHAEL", "LORENZ", "LYSITHEA", "MARIANNE", "LEONIE", "RHEA", "SEIROS", "SETETH", "FLAYN", "MANUELA", "HANNEMAN", "CYRIL", "JERALT", "ALOIS", "CATHERINE", "SHAMIR", "MONICA", "KRONYA", "TOMAS", "SOLON", "ARUNDEL", "THALES", "CORNELIA", "NEMESIS", "DEATH KNIGHT", "FLAME EMPEROR"];
console.log(characterWords);
//View list of characters.

var incorrect = document.getElementById("incorrect");
var guessesLeft = document.getElementById("guessesLeft");
var gameOver = document.getElementById("GameOver");
var random = Math.floor(Math.random()*characterWords.length);
var randomPerson = characterWords [random];
console.log(randomPerson);
//Pick out a random character from the list.

var answer = [];
for (var i = 0; i < randomPerson.length; i++) {
  if(randomPerson.charAt(i) === " "){
    answer[i] = " ";
  }
  else{
    answer[i] = "_";
  }   
}

var answerElm = document.getElementById("character");
updateScreen();

//Main purpose is to update screen with character. Needs to be called every time a person makes a guess.
function updateScreen(){
  answerElm.innerHTML = "";
  console.log(answer);
  for (var i = 0; i < answer.length; i++) {
    answer[i].replace(",", "")
    answerElm.textContent += answer[i];
  }
  console.log(answerElm);
}

var guesses = 8;

if (guesses > 0) {
  for (var j = 0; j < characterWords.length; j++)
    if (characterWords[j] === letters) {
        answer[j] = letters;
        remainingLetters--;
    }
} 
var remainingLetters = characterWords.length;

//Listen for whenever a key is let go.
document.onkeyup = function(event) {
  console.log(event.key);
var userKey = event.key;
checkGuess(userKey.toUpperCase());
}
  
function checkGuess(key){
  var correctLetter = false;
for(var i= 0; i < randomPerson.length;i++){
  if(randomPerson.charAt(i) === key){
      answer[i] = randomPerson.charAt(i);
      console.log("answer is:" + answer);
      correctLetter = true;
    }
  }

  if(correctLetter == false){
    guesses--;
    ifGameOver();
    guessesLeft.innerHTML = "";
    guessesLeft.innerHTML += guesses;
    incorrect.innerHTML = ""; 
    incorrect.innerHTML += key;
  }
  updateScreen();
}

function ifGameOver(){
  if(guesses <= 0){
    gameOverScreen()
  }
}

function gameOverScreen(){
    console.log(gameOver);
    gameOver.style.visibility = "initial";

}




