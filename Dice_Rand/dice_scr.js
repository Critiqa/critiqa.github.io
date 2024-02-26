var randList = [];
var idname;
var pressed = false;
let dice_int;
let result;

function getRndInt(min, max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

function sixRandNumbs(){
    var rand1 = getRndInt(1,6);
    var rand2 = getRndInt(1,6);
    var rand3 = getRndInt(1,6);
    var rand4 = getRndInt(1,6);
    var rand5 = getRndInt(1,6);
    var rand6 = getRndInt(1,6);
    return [rand1, rand2, rand3, rand4, rand5, rand6];
}

function rolling(){
    if (pressed == false){
        dice_int = setInterval(rolls, 100);
        pressed = true;
        document.getElementById("button").innerHTML = "Stop";
    }
    else if (pressed == true) {
        clearInterval(dice_int);
        pressed = false;
        document.getElementById("button").innerHTML = "Start";
        document.getElementById("result").innerHTML = result;
    }
}

function rolls(){
    result = 0;
    randList = sixRandNumbs();
    for (let i = 1; i < randList.length + 1; i++){
        document.getElementById("die" + i).src = "image" +randList[i - 1] + "x1.png";
    }
    result = randList.reduce((partialSum, a) => partialSum + a, 0);
}
