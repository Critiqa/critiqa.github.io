const GOAL = ["A", "P", "R", "E", "N", "D", "I", "Z", "E", "S"];
let goal_copy = [];
let return_list = [];
let counter = 0;
let checker = 0;
let doing;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
function shuffle(){
    goal_copy = ["A", "P", "R", "E", "N", "D", "I", "Z", "E", "S"];
    return_list = [];
    for (let index = 0; index < 10; index++) {
        return_list[index] = goal_copy.splice(getRndInteger(0, goal_copy.length), 1);
    }
}

 
function start(){
        checker = 0;
        shuffle();
        counter = counter + 1;
        document.getElementById("counter").innerHTML = "Count: " + counter;
        for (let index = 0; index < 10; index++) {
            document.getElementById("cellparagraph" + index).innerHTML = return_list[index];
            if (return_list[index] == GOAL[index]) {
                document.getElementById("cellcolor" + index).style.backgroundColor = "green";
                checker = checker + 1;
            }
            else if (document.getElementById("cellcolor" + index).style.backgroundColor == "green"){
                document.getElementById("cellcolor" + index).style.backgroundColor = "antiquewhite";
            }
        }
        if (checker == 10){
            clearInterval(doing);
        }
}

function start_automat(){
    doing = setInterval(start, 100);
}

function stop_automat(){
    clearInterval(doing);
}