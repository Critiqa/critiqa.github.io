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

      // You'll need to define the checkGuess function 
      function checkGuess(guess) {
        // Your logic to handle the guess here
        console.log("You guessed: " + guess); 
      }