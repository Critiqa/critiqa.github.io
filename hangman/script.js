const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let words = [
    "about", "above", "begin", "black", "chair", "class", "could", "every", "first", "found",
    "great", "group", "house", "learn", "light", "night", "often", "paper", "place", "point",
    "power", "right", "round", "school", "sound", "speak", "stand", "still", "table", "their",
    "thing", "think", "three", "water", "where", "which", "white", "world", "would", "write", 
    "alive", "basic", "catch", "doubt", "earth", "enemy", "flame", "ghost", "laugh", "quiet" 
];
      for (let char of alphabet) {
        let button = document.createElement('button');
        button.id = char;
        button.textContent = char;
        button.classList.add('alphabet-button');

        // Add the onclick attribute
        button.onclick = function() { checkGuess(char); }; 

        document.querySelector('.alphabet-container').appendChild(button);
      }
//Don't touch things above. Please. For your own sake.
//Your task is to create a hangman game.
//At the start of the page, select a random number. Use a function to do so, and make sure it it is stored in a variable.
//When you press a button, you have to check if the representation of the letter associated with that button is part of the random word.
//If yes, reveal the letter in it's place. If not, change the hangman image to the next one, until the inevitable death that comes. 



      // You'll need to define the checkGuess function 
      function checkGuess(guess) {
        // Your logic to handle the guess here
        // This would be the main part of the code
        console.log("You guessed: " + guess); 
      }