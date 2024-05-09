
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

document.getElementById("calc-upper-upper-p").innerHTML = monst_eq_one + " " + monst_eq_chosen_op + " " + monst_eq_two;

let op_list = ["+", "*", "-", "/"];

function clear_res(){
    document.getElementById("calc-upper-lower-p").innerHTML = "0";
    typed_num = "";
    document.getElementById("calc-upper-table").style.background = "midnightblue";
}

function addnum(number){
    if (typed_num.length == 0 && number == 0){
        return;
    }
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
    if ((Number(typed_num) == monst_eq_result)){
        document.getElementById("calc-upper-lower-p").innerHTML = "Correct";
        document.getElementById("calc-upper-table").style.background = "lightgreen";
    }
    else{
        document.getElementById("calc-upper-table").style.background = "salmon";
    }
}