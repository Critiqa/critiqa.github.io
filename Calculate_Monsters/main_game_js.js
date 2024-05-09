
let typed_num;
typed_num = "";

let op_list = ["+", "*", "-", "/"];

function clear_res(){
    document.getElementById("calc-upper-lower-p").innerHTML = "0";
    typed_num = ""
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