// Valid letters to guess.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// All possible words to guess.
var characterWords = ["BYLETH", "EDELGARD", "DIMITRI", "CLAUDE", "SOTHIS", "HUBERT", "FERDINAND", "LINHARDT", "CASPAR", "BERNADETTA", "DOROTHEA", "PETRA", "JERITZA", "EMILE", "DEDUE", "FELIX", "ASHE", "SYLVAIN", "MERCEDES", "INGRID", "ANNETTE", "GILBERT", "GUSTAVE", "HILDA", "IGNATZ", "RAPHAEL", "LORENZ", "LYSITHEA", "MARIANNE", "LEONIE", "RHEA", "SEIROS", "SETETH", "FLAYN", "MANUELA", "HANNEMAN", "CYRIL", "JERALT", "ALOIS", "CATHERINE", "SHAMIR", "MONICA", "KRONYA", "TOMAS", "SOLON", "ARUNDEL", "THALES", "CORNELIA", "NEMESIS", "DEATH KNIGHT", "FLAME EMPEROR"];
console.log(characterWords);

var characterWords = Math.floor(Math.random()*characterWords.length);
console.log(characterWords);

var answer = [];
for (var i = 0; i < characterWords.length; i++) {
    answer[i] = "_";
}

var guesses = characterWords.length;
var correctLetter = characterWords.length;
var guessesLeft = [i];

if (guesses > 0) {
  for (var j = 0; j < characterWords.length; j++)
    if (characterWords[j] === letters) {
        answer[j] = letters;
        remainingLetters--;
    }
} 

var remainingLetters = characterWords.length;


document.getElementById("#word");
document.getElementById("#remainingGuesses");

document.onkeyup = function(event) {
  var letters = event.key.toUpperCase();
  
  if (correctLetter === true) {
    indexHTML(characterWords);
  }

  else (correctLetter === false);{
  (guessesLeft --- 1);
  }

  console.log(event.key);
};



