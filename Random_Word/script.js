function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/*word generation function */
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
let wordLen;
let wordRemain;
let word = "";

function wordGen(){
    wordLen = getRndInteger(5, 9);
    conStart = getRndInteger(0,2) ? false : true;
    console.log(conStart)
    wordRemain = wordLen;
    if (conStart){
        while (wordRemain >= 3){
        word += consonants[getRndInteger(0, consonants.length - 1)];
        word += vowels[getRndInteger(0, vowels.length - 1)];
        word += consonants[getRndInteger(0, consonants.length - 1)];

        wordRemain -= 3;
        }
        while (wordRemain >= 2){
            word += vowels[getRndInteger(0, vowels.length - 1)];
            word += consonants[getRndInteger(0, consonants.length - 1)];
            wordRemain -= 2;
        }
        word += vowels[getRndInteger(0, vowels.length - 1)];
        document.getElementById("genWord").innerHTML = word;
    }
    else{
        while (wordRemain >= 3){
            word += vowels[getRndInteger(0, vowels.length - 1)];
            word += consonants[getRndInteger(0, consonants.length - 1)];
            word += vowels[getRndInteger(0, vowels.length - 1)];
            wordRemain -= 3;
        }
        while (wordRemain >= 2){
            word += consonants[getRndInteger(0, consonants.length - 1)];
            word += vowels[getRndInteger(0, vowels.length - 1)];
            wordRemain -= 2;
        }
        word += vowels[getRndInteger(0, vowels.length - 1)];
        document.getElementById("genWord").innerHTML = word;
    }
}

 wordGen()