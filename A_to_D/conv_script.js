const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

var hourval;
var minval;

var min_num_index;
var hour_num_index;

poss_angles = [90, 120, 150, 180, 210, 240, 270, 300, 330, 360];

var mins_text = ["00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
var hours_text = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function setDate() {
    min_num_index = getRandomInt(poss_angles.length);
    hour_num_index = getRandomInt(poss_angles.length);

    min_num = poss_angles[min_num_index];
    hour_num = poss_angles[hour_num_index];

    minsHand.style.transform = `rotate(${min_num}deg)`;

    hourHand.style.transform = `rotate(${hour_num + (min_num / 30)}deg)`;
  }

  setDate()

function checkDate() {
    hourval = Number(document.getElementById("hour_choice").value);
    minval = Number(document.getElementById("min_choice").value);


    if (hourval == hour_num_index && minval == min_num_index) {
        document.getElementById("corr_solution").innerHTML = "Yes!! The time is " + (hours_text[hour_num_index]) + " : " + mins_text[min_num_index] + "!";
    }
    else {
        document.getElementById("corr_solution").innerHTML = "Nope!! The time is " + (hours_text[hour_num_index]) + " : " + mins_text[min_num_index]  + "!";
    }
}
