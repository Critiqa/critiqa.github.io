var number;



function generate() {
    number = document.getElementById("number_to_be").value;
    number = Number(number);
    if (number >= 0 && number <= 9) {
        display(number);
    }
    else {
        alert("You can only write numbers between 0 and 9!");
    }
}

function display(number){
    clear_all();
    switch(number) {
        case 0:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd6").src = "hor_digit.png";
            document.getElementById("lcd1").src = "ver_digit.png";
            document.getElementById("lcd2").src = "ver_digit.png";
            document.getElementById("lcd4").src = "ver_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            break;
        case 1:
            document.getElementById("lcd2").src = "ver_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            break;
        case 2:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd6").src = "hor_digit.png";
            document.getElementById("lcd3").src = "hor_digit.png";
            document.getElementById("lcd4").src = "ver_digit.png";
            document.getElementById("lcd2").src = "ver_digit.png";
            break;
        case 3:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd6").src = "hor_digit.png";
            document.getElementById("lcd3").src = "hor_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            document.getElementById("lcd2").src = "ver_digit.png";
            break;
        case 4:
            document.getElementById("lcd2").src = "ver_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            document.getElementById("lcd1").src = "ver_digit.png";
            document.getElementById("lcd3").src = "hor_digit.png";
            break;
        case 5:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd6").src = "hor_digit.png";
            document.getElementById("lcd3").src = "hor_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            document.getElementById("lcd1").src = "ver_digit.png";
            break;
        case 6:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd6").src = "hor_digit.png";
            document.getElementById("lcd3").src = "hor_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            document.getElementById("lcd1").src = "ver_digit.png";
            document.getElementById("lcd4").src = "ver_digit.png";
            break;
        case 7:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd2").src = "ver_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            break;
        case 8:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd3").src = "hor_digit.png";
            document.getElementById("lcd6").src = "hor_digit.png";
            document.getElementById("lcd1").src = "ver_digit.png";
            document.getElementById("lcd2").src = "ver_digit.png";
            document.getElementById("lcd4").src = "ver_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
            break;
        case 9:
            document.getElementById("lcd0").src = "hor_digit.png";
            document.getElementById("lcd3").src = "hor_digit.png";
            document.getElementById("lcd6").src = "hor_digit.png";
            document.getElementById("lcd1").src = "ver_digit.png";
            document.getElementById("lcd2").src = "ver_digit.png";
            document.getElementById("lcd5").src = "ver_digit.png";
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
}