"use strict";
var L02_Sequenzmemory;
(function (L02_Sequenzmemory) {
    let predefined = document.getElementById("predefined");
    let own = document.getElementById("own");
    let selectPredefined = document.getElementById("selectPredefined");
    let inputOwn = document.getElementById("inputOwn");
    let duration = document.getElementById("duration");
    let time = document.getElementById("time");
    let startDuration = document.getElementById("StartDuration");
    let startTime = document.getElementById("StartTime");
    let timer = document.getElementById("timer");
    let score = document.getElementById("score");
    let playground = document.getElementById("playground");
    function mixCards(_letter) {
        let abc = _letter.split("");
        let ctr = abc.length;
        while (ctr > 0) {
            let index = Math.floor(Math.random() * ctr);
            ctr--;
            let temp = abc[ctr];
            abc[ctr] = abc[index];
            abc[index] = temp;
        }
        let length = abc.length;
        startTime(length, abc, _letter);
    }
    startTime.addEventListener("click", Input);
    function Inputfeld() {
        if (predefined.checked == true) {
            selectPredefined.disabled = false;
            inputOwn.disabled = true;
        }
        else if (own.checked == true) {
            selectPredefined.disabled = true;
            inputOwn.disabled = false;
        }
    }
    function Input() {
        if (inputOwn.disabled == false) {
            score.innerHTML = "" + inputOwn.value;
            mixCards(inputOwn.value);
        }
        else if (selectPredefined.disabled == false) {
            score.innerHTML = "" + selectPredefined.value;
            mixCards(selectPredefined.value);
        }
    }
})(L02_Sequenzmemory || (L02_Sequenzmemory = {}));
//# sourceMappingURL=SM_TypeScript.js.map