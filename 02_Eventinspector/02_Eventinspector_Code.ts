console.log("HALLO, Test Test :)");

namespace L02_Eventinspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);

        let div: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");
        for (let i: number = 0; i < div.length; i++) {
            div[i].addEventListener("click", logInfo);
            div[i].addEventListener("keyup", logInfo);
        }

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        let target: HTMLElement = <HTMLElement>_event.target;
        let clientX: number = _event.clientX + 20;
        let clientY: number = _event.clientY + 20;

        span.innerHTML = "";
        span.innerHTML = clientX + "x" + clientY + "y" + target + "target";

        span.style.left = clientX + "px";
        span.style.top = clientY + "px";
    }

    function logInfo(_event: Event): void {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }

}