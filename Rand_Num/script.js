var randNum;
var sumNum;
var minNum;
var maxNum;
var abonefif;
var belfif;
var even;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function generate(){
    sumNum = 0;
    minNum = 200;
    maxNum = 0;
    abonefif = 0;
    belfif = 0;
    even = 0;

    for (let index = 0; index < 10; index++) {
        randNum = getRndInteger(0, 200);
        document.getElementById("num" + index).innerHTML = randNum;
        sumNum = sumNum + randNum;

        minNum = minim(randNum);
        maxNum = maxim(randNum);
        belfif += below(randNum);
        abonefif += above(randNum);
        even += pair(randNum);
    }
    
    document.getElementById("sum").innerHTML = sumNum;
    document.getElementById("avg").innerHTML = sumNum / 10;
    document.getElementById("min").innerHTML = minNum;
    document.getElementById("max").innerHTML = maxNum;
    document.getElementById("less").innerHTML = belfif;
    document.getElementById("more").innerHTML = abonefif;
    document.getElementById("odd").innerHTML = 10 - even;
    document.getElementById("even").innerHTML = even;
}

function minim(num){
    if (num < minNum){
        return num;
    }
    else {
        return minNum;
    }
}

function maxim(num) {
    if (num > maxNum){
        return num;
    }
    else {
        return maxNum;
    }
}

function below(num) {
    if (num < 50) {
        return 1;
    }
    else {
        return 0;
    }
}

function above(num) {
    if (num > 150) {
        return 1;
    }
    else {
        return 0;
    }
}

function pair(num) {
    if (num % 2 == 0) {
        return 1;
    }
    else {
        return 0;
    }
}