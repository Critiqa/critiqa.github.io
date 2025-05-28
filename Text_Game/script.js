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
    document.getElementById("monster-name").innerHTML = "Name: " + playerName;

}

monNameGen()