

var round = 1;
var yes = 1;
var no = 1;


function init() {
    steps();
    document.getElementById("result").innerHTML = "";
    round = 1;
    yes = 1;
    no = 1;


}
function again() {
    init();
    steps();

}
function steps() {
    if (round == 1) {
        round1();
    }
    if (round == 2) {
        round2();
    }
    if (round == 3) {
        round3();
    }
    if (round == 4) {
        round4();
    }
    if (round == 5) {
        round5();
    }
}
function result() {
    round = 6;
    if (yes <= 5 && no <= 2) {
        good();
    }
    if (no <= 5 && yes <= 2) {
        bad();
    }
    if (yes == 3 && no == 3) {
        middle();
    }
}
function good() {
    document.getElementById("result").innerHTML = "Вы - хороший человек";
}
function bad() {
    document.getElementById("result").innerHTML = "Вы - ужасный человек";
}
function middle() {
    document.getElementById("result").innerHTML = "Вы - хороший и плохой человек";
}

function yesAnswer() {
    yes++;
    round++;
    steps();
}

function noAnswer() {
    no++;
    round++;
    steps();
}


function round1() {
    document.getElementById("question").innerHTML = "Раунд Номер 1";
}
function round2() {
    document.getElementById("question").innerHTML = "Второй раунд, Поздравляю";
}
function round3() {
    document.getElementById("question").innerHTML = "Третий раунд, Поздравляю";
}
function round4() {
    document.getElementById("question").innerHTML = "Четвертый раунд, Поздравляю";
}
function round5() {
    document.getElementById("question").innerHTML = "Пятый раунд, Поздравляю";
    alert("Вы выиграли");
    result();

}

//window.onload=init;

window.onload = function () {
    init();
}


function pow(x, p) {
    var z = x;
    for (var i = 0; i < p; i++) {
        z = z * x;
    }
    return z;
}

function fuct(f) {
    var u=1;
    for (var i = 1; i <= f; i++) {
        u = u*i;
    }
    return u;
}

function sin(x) {
    
    g=
    
    
    
    y = x - pow(x,3) / fuct(3) + pow(x,5) / fuct(5) - pow(x,7) / fuct(7);
    return y;

}



console.log(sin(30), Math.sin(30));