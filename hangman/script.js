const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var index;
var hang_index = 0;
var misses;
let words = [
    "about", "above", "begin", "black", "chair", "class", "could", "every", "first", "found",
    "great", "group", "house", "learn", "light", "night", "often", "paper", "place", "point",
    "power", "right", "round", "spore", "sound", "speak", "stand", "still", "table", "their",
    "thing", "think", "three", "water", "where", "which", "white", "world", "would", "write", 
    "alive", "basic", "catch", "doubt", "earth", "enemy", "flame", "ghost", "laugh", "quiet" 
];
      for (let char of alphabet) {
        let button = document.createElement('button');
        char = char.toLowerCase();
        button.id = char;
        button.textContent = char;
        button.classList.add('alphabet-button');

        // Add the onclick attribute
        button.onclick = function() { checkGuess(char); }; 

        document.querySelector('.alphabet-container').appendChild(button);
      }

function getRandInt (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var guessWord = words[getRandInt(0, words.length - 1)];

 
      // You'll need to define the checkGuess function 
function checkGuess(guess) {
       if (hang_index != 10){
        index = 1;
        misses = 0;
        for (let check of guessWord) {
          if (check == guess) {
            document.getElementById("letter" + index).innerHTML = check;
          }
          else {
            misses++;
          }
          index++;
        }

        if (misses == 5) {
          hang_index++;
          document.getElementById("hang_pic").src = "./Images/" + hang_index + ".jpg";
          document.getElementById("used").innerHTML += guess + ", ";
          
        }
        
       }
       if (hang_index == 10) {
        document.getElementById("try").innerHTML = "You lose, he ded. The word was '" + guessWord + "'";
       }
       document.getElementById("guess").remove();
}

function reset() {
  misses = 0;
  index = 1;
  for (let index of guessWord) {
      document.getElementById("letter" + index).innerHTML = "_";
    }
}