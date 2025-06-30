/*Just a basic random number generator, which has a max and min threshold.
Will be useful when creating difficulty modes, as those thresholds will be variables. */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/*Character Name Generator */
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
let playerNameLength;
let playerNameRemain;
let playerName = "";

let monstHealth = 5;

function monNameGen(){
    playerNameLength = getRndInteger(5, 9);
    playerNameRemain = playerNameLength;
    while (playerNameRemain >= 3){
        playerName += consonants[getRndInteger(0, consonants.length - 1)];
        playerName += vowels[getRndInteger(0, vowels.length - 1)];
        playerName += consonants[getRndInteger(0, consonants.length - 1)];

        playerNameRemain -= 3;
    }
    while (playerNameRemain >= 2){
        playerName += vowels[getRndInteger(0, vowels.length - 1)];
        playerName += consonants[getRndInteger(0, consonants.length - 1)];
        playerNameRemain -= 2;
    }
    playerName += vowels[getRndInteger(0, vowels.length - 1)];
    document.getElementById("playerName").innerHTML = "Name: " + playerName;
    playerName = playerName[0].toUpperCase() + playerName.substring(1);

}

monNameGen()
console.log("Your name is " + playerName); 