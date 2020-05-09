var L02_Sequenzmemory;
(function (L02_Sequenzmemory) {
    var predefined = document.getElementById("predefined");
    var own = document.getElementById("own");
    var selectPredefined = document.getElementById("selectPredefined");
    var inputOwn = document.getElementById("inputOwn");
    var duration = document.getElementById("duration");
    var time = document.getElementById("time");
    var startDuration = document.getElementById("StartDuration");
    var startTime = document.getElementById("StartTime");
    var timer = document.getElementById("timer");
    var score = document.getElementById("score");
    var playground = document.getElementById("playground");
    function mixCards(_letter) {
        var abc = _letter.split("");
        var ctr = abc.length;
        while (ctr > 0) {
            var index = Math.floor(Math.random() * ctr);
            ctr--;
            var temp = abc[ctr];
            abc[ctr] = abc[index];
            abc[index] = temp;
        }
        var length = abc.length;
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