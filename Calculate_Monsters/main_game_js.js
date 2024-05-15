let typed_num;
typed_num = "";

/*Just a basic random number generator, which has a max and min threshold.
Will be useful when creating difficulty modes, as those thresholds will be variables. */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/* Monster variables */
monst_diff = "normal";
let monst_eq_one;
let monst_eq_two;
let monst_eq_operator_list;
let monst_eq_chosen_op;

let monst_eq_result;
let is_minus = false;
let calc_res;

/* Image variables */

let p_image_count = 5;
let m_image_count = 5; 

/*Problem generation */
function problemGen(){

    monst_eq_one = getRndInteger(1, 50);
    monst_eq_two = getRndInteger(1, 50);
    monst_eq_operator_list = ["+", "-", "*", "/"]; 
    monst_eq_chosen_op = monst_eq_operator_list[getRndInteger(0, 2)]

    document.getElementById("calc-upper-upper-p").innerHTML = monst_eq_one + " " + monst_eq_chosen_op + " " + monst_eq_two;
}

/*First problem generation */
problemGen();

/* Operator strings stored in a list. Later on I might make it so that the strigns
later on are not checked, but the index is stored, for easier functionality. */
let op_list = ["+", "*", "-", "/"];


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
        document.getElementById("calc-upper-lower-p").innerHTML = "Correct";
        document.getElementById("calc-upper-table").style.background = "lightgreen";
        if (!(m_image_count == 0)){
            document.getElementById("monster-heart"+m_image_count).src = "pixil-gif-drawing2.png";
            m_image_count = m_image_count - 1;
        }
        /*Generate a new problem after this one has been solved */
        problemGen();
        clear_res();
    }
    else{
        document.getElementById("calc-upper-table").style.background = "salmon";
        document.getElementById("calc-upper-upper-p").innerHTML = "Result: " + monst_eq_result + ", Typed what seen:" + typed_num + (monst_eq_result == typed_num);
        
        if (!(p_image_count == 0)){
            document.getElementById("player-heart"+p_image_count).src = "pixil-gif-drawing2.png";
            p_image_count = p_image_count - 1;
        }
    }
}