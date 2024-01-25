alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

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

function getthedate() {
    document.getElementById('demo').innerHTML=randName();
}

