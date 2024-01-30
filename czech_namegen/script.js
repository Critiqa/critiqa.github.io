//Alphabet and consonants/vowels in different groups

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
vowels = 'aeiuo'.split('');

const words = [];
let genwords = "";
let counter = 0;

//Slider update and value 

var slider = document.getElementById("range-slider");
var sliderOutput = document.getElementById("range-slider-text");
sliderOutput.innerHTML = slider.value; 

function unhideSettings() {
    if (document.getElementById("settings-button").checked == true) {
        document.getElementById("settings-td-hidden").style.display = "block";
    }
    else {
        document.getElementById("settings-td-hidden").style.display = "none";
    }
}

slider.oninput = function() {
    sliderOutput.innerHTML = slider.value;
}

//Random number generator, with min/max parameters

function randNumb(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//The main random name generator

function randName(){
    const lengthNum = slider.value; //randNumb(5, 12)
    const retName = [];
    let retpushname = "";

    while (retName.length != lengthNum) {
        retName.push(alphabet[randNumb(0, alphabet.length - 1)]);
    }

    for (let letter in retName) {
        retpushname += retName[letter];
    }
    return retpushname;
}

//The function that returns the generated word into a list. Also updates a counter, to count how many words have been generated.

function writeThemOut() {
    document.getElementById("word-list").innerHTML = genwords;
    genwords += words[words.length - 1] + ", ";
}

//The main function that actually creates the generations. 

function getthedate() {
    words.push(randName());
    document.getElementById('demo').innerHTML=words[words.length - 1];
    writeThemOut();
    counter += 1;
    document.getElementById("counter").innerText = counter;
}

