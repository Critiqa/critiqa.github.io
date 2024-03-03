var number;
var dec_num;


function generate() {
    number = document.getElementById("number_to_be").value;
    number = Number(number);
    if (number >= 0 && number <= 9) {
        clear_all();
        display(number, "lcd");
    }
    else if (number >= 10 && number <= 99) {
        dec_num = Math.floor(number / 10);
        clear_all();
        display(dec_num, "1lcd");
        display(number % 10, "lcd");
    }
    else {
        alert("You can only write numbers between 0 and 99!");
    }
}

function display(number, id){
    switch(number) {
        case 0:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "6").src = "hor_digit.png";
            document.getElementById(id + "1").src = "ver_digit.png";
            document.getElementById(id + "2").src = "ver_digit.png";
            document.getElementById(id + "4").src = "ver_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            break;
        case 1:
            document.getElementById(id + "2").src = "ver_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            break;
        case 2:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "6").src = "hor_digit.png";
            document.getElementById(id + "3").src = "hor_digit.png";
            document.getElementById(id + "4").src = "ver_digit.png";
            document.getElementById(id + "2").src = "ver_digit.png";
            break;
        case 3:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "6").src = "hor_digit.png";
            document.getElementById(id + "3").src = "hor_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            document.getElementById(id + "2").src = "ver_digit.png";
            break;
        case 4:
            document.getElementById(id + "2").src = "ver_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            document.getElementById(id + "1").src = "ver_digit.png";
            document.getElementById(id + "3").src = "hor_digit.png";
            break;
        case 5:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "6").src = "hor_digit.png";
            document.getElementById(id + "3").src = "hor_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            document.getElementById(id + "1").src = "ver_digit.png";
            break;
        case 6:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "6").src = "hor_digit.png";
            document.getElementById(id + "3").src = "hor_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            document.getElementById(id + "1").src = "ver_digit.png";
            document.getElementById(id + "4").src = "ver_digit.png";
            break;
        case 7:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "2").src = "ver_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            break;
        case 8:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "3").src = "hor_digit.png";
            document.getElementById(id + "6").src = "hor_digit.png";
            document.getElementById(id + "1").src = "ver_digit.png";
            document.getElementById(id + "2").src = "ver_digit.png";
            document.getElementById(id + "4").src = "ver_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            break;
        case 9:
            document.getElementById(id + "0").src = "hor_digit.png";
            document.getElementById(id + "3").src = "hor_digit.png";
            document.getElementById(id + "6").src = "hor_digit.png";
            document.getElementById(id + "1").src = "ver_digit.png";
            document.getElementById(id + "2").src = "ver_digit.png";
            document.getElementById(id + "5").src = "ver_digit.png";
            break;
    }
}

function clear_all() {
    document.getElementById("lcd0").src = "hor_digit_grey.png";
    document.getElementById("lcd3").src = "hor_digit_grey.png";
    document.getElementById("lcd6").src = "hor_digit_grey.png";
    document.getElementById("lcd1").src = "ver_digit_grey.png";
    document.getElementById("lcd2").src = "ver_digit_grey.png";
    document.getElementById("lcd4").src = "ver_digit_grey.png";
    document.getElementById("lcd5").src = "ver_digit_grey.png";
    document.getElementById("1lcd0").src = "hor_digit_grey.png";
    document.getElementById("1lcd3").src = "hor_digit_grey.png";
    document.getElementById("1lcd6").src = "hor_digit_grey.png";
    document.getElementById("1lcd1").src = "ver_digit_grey.png";
    document.getElementById("1lcd2").src = "ver_digit_grey.png";
    document.getElementById("1lcd4").src = "ver_digit_grey.png";
    document.getElementById("1lcd5").src = "ver_digit_grey.png";
}