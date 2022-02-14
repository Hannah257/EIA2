"use strict";
console.log("HALLO, Test Test :)");
var L02_Eventinspector;
(function (L02_Eventinspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let body = document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let div = document.querySelectorAll("div");
        for (let i = 0; i < div.length; i++) {
            div[i].addEventListener("click", logInfo);
            div[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        let target = _event.target;
        let clientX = _event.clientX + 20;
        let clientY = _event.clientY + 20;
        span.innerHTML = "";
        span.innerHTML = clientX + "x" + clientY + "y" + target + "target";
        span.style.left = clientX + "px";
        span.style.top = clientY + "px";
    }
    function logInfo(_event) {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }
})(L02_Eventinspector || (L02_Eventinspector = {}));
//# sourceMappingURL=02_Eventinspector_Code.js.map