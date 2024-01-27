alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
vowels = 'aeiuo'.split('');

const words = [];
let genwords = "";
let first = false;
let counter = 0;

var slider = document.getElementById("range-slider");
var sliderOutput = document.getElementById("range-slider-text");
sliderOutput.innerHTML = slider.value; 

slider.oninput = function() {
    sliderOutput.innerHTML = slider.value;
}

function randNumb(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

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

function writeThemOut() {
    document.getElementById("word-list").innerHTML = genwords;
    genwords += words[words.length - 1] + ", ";
}

function getthedate() {
    words.push(randName());
    document.getElementById('demo').innerHTML=words[words.length - 1];
    writeThemOut();
    counter += 1;
    document.getElementById("counter").innerText = counter;
}

