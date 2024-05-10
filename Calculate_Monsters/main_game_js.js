let typed_num;
typed_num = "";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/* Monster variables */
monst_diff = "normal";
monst_eq_one = getRndInteger(1, 50);
monst_eq_two = getRndInteger(1, 50);
monst_eq_operator_list = ["+", "-", "*", "/"]; 
monst_eq_chosen_op = monst_eq_operator_list[getRndInteger(0, 2)]

let monst_eq_result;
let is_minus = false;
let calc_res;

document.getElementById("calc-upper-upper-p").innerHTML = monst_eq_one + " " + monst_eq_chosen_op + " " + monst_eq_two;

let op_list = ["+", "*", "-", "/"];

function clear_res(){
    document.getElementById("calc-upper-lower-p").innerHTML = "0";
    typed_num = "";
    document.getElementById("calc-upper-table").style.background = "midnightblue";
    document.getElementById("calc-upper-lower-negative-p").innerHTML = "";
}

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

function addnum(number){
    if (typed_num.length < 29){
        typed_num = typed_num + String(number);
        document.getElementById("calc-upper-lower-p").innerHTML = typed_num;
    }
}

function check_result() {
    switch(monst_eq_chosen_op){
        case "+":
            monst_eq_result = monst_eq_one + monst_eq_two;
            break
        case "-":
            monst_eq_result = monst_eq_one - monst_eq_two;
            break
    }
    calc_res = Number(typed_num);
    if (is_minus){
        calc_res = calc_res * -1
    }
    if ((calc_res == monst_eq_result)){
        document.getElementById("calc-upper-lower-p").innerHTML = "Correct";
        document.getElementById("calc-upper-table").style.background = "lightgreen";
    }
    else{
        document.getElementById("calc-upper-table").style.background = "salmon";
    }
}