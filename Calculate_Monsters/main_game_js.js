/*I am trying my best to comment everything, but I do not want to overcomment either.
Fun little project, I hope it will come to fruition.
It's obviously not ready yet. */

let typed_num;
typed_num = "";

/*Just a basic random number generator, which has a max and min threshold.
Will be useful when creating difficulty modes, as those thresholds will be variables. */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/* Monster variables */

let monst_eq_one;
let monst_eq_two;
let monst_eq_operator_list;
let monst_eq_chosen_op;

let monst_eq_result;
let is_minus = false;
let calc_res;

let problem_number_min = 1;
let problem_number_max = 50;

/*Monster Name generation function */
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
let monNameLength;
let monNameRemain;
let monName = "";

let monstHealth = 5;

function monNameGen(){
    monNameLength = getRndInteger(5, 9);
    monNameRemain = monNameLength;
    while (monNameRemain >= 3){
        monName += consonants[getRndInteger(0, consonants.length - 1)];
        monName += vowels[getRndInteger(0, vowels.length - 1)];
        monName += consonants[getRndInteger(0, consonants.length - 1)];

        monNameRemain -= 3;
    }
    while (monNameRemain >= 2){
        monName += vowels[getRndInteger(0, vowels.length - 1)];
        monName += consonants[getRndInteger(0, consonants.length - 1)];
        monNameRemain -= 2;
    }
    monName += vowels[getRndInteger(0, vowels.length - 1)];
    document.getElementById("monster-name").innerHTML = "Name: " + monName;
}

monNameGen() /*Damn it actually works*/

function monHealthGen(){
    document.getElementById("monster-health").innerHTML = "Health: " + monstHealth;
}

monHealthGen();

/*Problem generation and output*/
function problemGen(){

    monst_eq_one = getRndInteger(problem_number_min, problem_number_max);
    monst_eq_two = getRndInteger(problem_number_min, problem_number_max);
    monst_eq_operator_list = ["+", "-"]; 
    monst_eq_chosen_op = monst_eq_operator_list[getRndInteger(0, monst_eq_operator_list.length - 1)];

    document.getElementById("calc-upper-upper-p").innerHTML ="The problem is: " + monst_eq_one + " " + monst_eq_chosen_op + " " + monst_eq_two;
}

/*This function handles difficulty selection. Difficulty is meant by extendind the random range. */
function select_dif(dif){
    switch(dif){
        case 1: /* This will be the easy difficulty */
            problem_number_min = 1;
            problem_number_max = 50;
            monstHealth = 5;
            break
        case 2: /* This will be the normal difficulty */
            problem_number_min = 0 - getRndInteger(1, 10);
            problem_number_max = 150;
            monstHealth = 8;
            break
        case 3:
            problem_number_min = 0 - getRndInteger(50, 150);
            problem_number_max = 1500;
            monstHealth = 5;
            break
    }
}

function explain(dif) {
    switch(dif){
        case 1:
            document.getElementById("diff-explain").innerHTML = "Lowest possible number is " + 1 + " and the highest possible number is " + 50;
            break
        case 2:
            document.getElementById("diff-explain").innerHTML = "Lowest possible number is " + -10 + " and the highest possible number is " + 150;
            break
        case 3:
            document.getElementById("diff-explain").innerHTML = "Lowest possible number is " + -150 + " and the highest possible number is " + 1500;
            break
    }
}

/*First problem generation */
problemGen();

/* This function resets the input area. This can be used to redo the input, in case of mistype*/
function clear_res(){
    document.getElementById("calc-upper-lower-p").innerHTML = "0";
    typed_num = "";
    document.getElementById("calc-upper-table").style.background = "midnightblue";
    document.getElementById("calc-upper-lower-negative-p").innerHTML = "";
    is_minus = false;
}

/*This function creates a visual representation of a minus character, and also changes 
the value of a bool operator, so the code knows if the number is below or above 0 */
function minus() {
    if (is_minus){
        is_minus = false;
        document.getElementById("calc-upper-lower-negative-p").innerHTML = "";
    }
    else{
        is_minus = true;
        document.getElementById("calc-upper-lower-negative-p").innerHTML = "-";
    }
}

/* From a connection with the buttons in the HTML code, this one reads the given value
and adds it to the end of the string. There is a restriction, which does not let any other
characters to pass, if the length of the string is already 29. This is to preserve the 
space in the calculator, so the whole thing does not blow up, and also for my sanity to remain. */

function addnum(number){
    if (typed_num.length < 29){
        typed_num = typed_num + String(number);
        document.getElementById("calc-upper-lower-p").innerHTML = typed_num;
    }
}

/*Once the equal button is pressed on the page, it will compare a calculated value to the
input value. The checking happens when the button is pressed, and is based on the generated
mathematical operator. 
This will bite me back, when I would like to create more complex generations, but now it works.
The checking results and answer phase is in here too */

function check_result() {
    switch(monst_eq_chosen_op){
        case "+":
            monst_eq_result = monst_eq_one + monst_eq_two;
            break
        case "-":
            monst_eq_result = monst_eq_one - monst_eq_two;
            break
    }
    monst_eq_result = Number(monst_eq_result);

    calc_res = Number(typed_num);

    /*Based on the minus bool, it will multiply the input so it becomes a negative number. This is done directly after the answer calculation, and before the result output */

    if (is_minus){
        calc_res = calc_res * -1
    }

    /*In case of a correct response, the enemy life goes down by one.
    Background colour of the output screen changes to green (might change to darker shade)
    Correct text is written out. */

    if (calc_res == monst_eq_result){
        clear_res();
        monstHealth -= 1;
        monHealthGen();
        document.getElementById("calc-upper-lower-p").innerHTML = "Correct";
        document.getElementById("calc-upper-table").style.background = "lightgreen";

        /*A timeout is needed here so the green bg can be seen. */
        setTimeout(function() {
            problemGen();
            clear_res();
        }, 1000)
    }

    else{
        document.getElementById("calc-upper-table").style.background = "salmon";
        document.getElementById("calc-upper-lower-p").innerHTML = "Wrong answer, try again";
        setTimeout(function() {
            problemGen();
            clear_res();
        }, 1000)
    }
}