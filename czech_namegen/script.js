alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const words = [];
let genwords = "";
let first = false;
let counter = 0;

function randNumb(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function randName(){
    const lengthNum = randNumb(5, 12);
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



