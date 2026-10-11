var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("w_minutes");
var ws = document.getElementById("w_seconds");
var bm = document.getElementById("b_minutes");
var bs = document.getElementById("b_seconds");

var counter = document.getElementById("counter");
var timerStatus = document.getElementById("timer-status");
var container = document.getElementById("container");



var workLength = document.getElementById("work-length");
var breakLength = document.getElementById("break-length");
var workMinus = document.getElementById("work-minus");
var workPlus = document.getElementById("work-plus");
var breakMinus = document.getElementById("break-minus");
var breakPlus = document.getElementById("break-plus");
var startTimer;
var sessionMinutes = 25;
var breakMinutes = 5;
var isWorkTime = true;

start.addEventListener("click", function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);

    }

});

stop.addEventListener("click", function () {

    clearInterval(startTimer);

    startTimer = undefined;

});


reset.addEventListener("click", function () {
    clearInterval(startTimer);
    startTimer = undefined;
    sessionMinutes = 25;
    breakMinutes = 5;
    isWorkTime = true;
    workLength.innerText = "25";
    breakLength.innerText = "5";
    wm.innerText = "25";
    ws.innerText = "00";
    bm.innerText = "5";
    bs.innerText = "00";
    counter.innerText = "0";
    timerStatus.innerText = "Session";
    container.classList.remove("break-mode");

});

function timer() {
    if (isWorkTime) {
        if (Number(ws.innerText) > 0) {
            ws.innerText =
                Number(ws.innerText) - 1;
        }
        else if (Number(wm.innerText) > 0) {
            wm.innerText =
                Number(wm.innerText) - 1;
            ws.innerText = "59";

        }
        if (
            Number(wm.innerText) === 0 &&
            Number(ws.innerText) === 0
        ) {
            isWorkTime = false;
            bm.innerText = breakMinutes;
            bs.innerText = "00";
            timerStatus.innerText = "Break";
            container.classList.add("break-mode");
            alert("Session finished! Time for a break.");

        }

    }

    else {

        if (Number(bs.innerText) > 0) {
            bs.innerText =
                Number(bs.innerText) - 1;
        }
        else if (Number(bm.innerText) > 0) {
            bm.innerText =
                Number(bm.innerText) - 1;
            bs.innerText = "59";

        }
        if (
            Number(bm.innerText) === 0 &&
            Number(bs.innerText) === 0
        ) {
            isWorkTime = true;
            counter.innerText =
                Number(counter.innerText) + 1;
            wm.innerText = sessionMinutes;
            ws.innerText = "00";
            timerStatus.innerText = "Session";
            container.classList.remove("break-mode");
            alert("Break finished! Time to work.");

        }

    }

}

workMinus.addEventListener("click", function () {
    if (
        sessionMinutes > 1 &&
        startTimer === undefined
    ) {
        sessionMinutes--;
        workLength.innerText = sessionMinutes;
        wm.innerText = sessionMinutes;
        ws.innerText = "00";
    }

});
workPlus.addEventListener("click", function () {
    if (
        sessionMinutes < 60 &&
        startTimer === undefined
    ) {
        sessionMinutes++;
        workLength.innerText = sessionMinutes;
        wm.innerText = sessionMinutes;
        ws.innerText = "00";
    }

});

breakMinus.addEventListener("click", function () {
    if (
        breakMinutes > 1 &&
        startTimer === undefined
    ) {

        breakMinutes--;

        breakLength.innerText = breakMinutes;

        bm.innerText = breakMinutes;
        bs.innerText = "00";

    }
});

breakPlus.addEventListener("click", function () {
    if (
        breakMinutes < 60 &&
        startTimer === undefined
    ) {
        breakMinutes++;
        breakLength.innerText = breakMinutes;
        bm.innerText = breakMinutes;
        bs.innerText = "00";

    }

});