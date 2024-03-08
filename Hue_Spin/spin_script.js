const colWheel = document.getElementById("color-wheel");
let spinVal = 0;
let spinMax = document.getElementById("colorrange").getAttribute("max");

let num = 0;
let opanum;

setInterval(spin,1);

function spin() {
    spinVal = Number(document.getElementById('colorrange').value);
    colWheel.style.transform = `rotate(${num}deg)`;
    num += (spinVal);
    opacity();
}

function opacity() {
        opanum = 1.1 - (spinVal / spinMax);
        colWheel.style.opacity = opanum;
}

function up(){
    spinVal += 1;
    document.getElementById('colorrange').value = spinVal;
}

function down(){
    spinVal -= 1;
    document.getElementById('colorrange').value = spinVal;
}