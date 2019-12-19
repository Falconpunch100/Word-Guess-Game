var ThreeHouseshangman = {




}


// Valid letters to guess.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var word; 
var guess;
var guessed;
var remainingGuesses = [ ];
var counter;           
var space;              

// Get elements
var showLives = document.getElementById("guessesLeft");


var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'letters';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

["BYLETH", "EDELGARD", "DIMITRI", "CLAUDE", "SOTHIS", "HUBERT", "FERDINAND", "LINHARDT", "CASPAR", "BERNADETTA", "DOROTHEA", "PETRA", "JERITZA", "EMILE", "DEDUE", "FELIX", "ASHE", "SYLVAIN", "MERCEDES", "INGRID", "ANNETTE", "GILBERT", "GUSTAVE", "HILDA", "IGNATZ", "RAPHAEL", "LORENZ", "LYSITHEA", "MARIANNE", "LEONIE", "RHEA", "SEIROS", "SETETH", "FLAYN", "MANUELA", "HANNEMAN", "CYRIL", "JERALT", "ALOIS", "CATHERINE", "SHAMIR", "MONICA", "KRONYA", "TOMAS", "SOLON", "ARUNDEL", "THALES", "CORNELIA", "NEMESIS",]





var CorrectLetter = document.getElementById();
var WrongLetter = document.getElementById();


document.onkeyup = function(event) {
    var letter = event.key.toUpperCase();

    if (letters === CorrectLetter) {
        word
    }
c*

    else (letters === WrongLetter) ;{
        

    }
  };



  var wins = 0;
  var losses = 0;