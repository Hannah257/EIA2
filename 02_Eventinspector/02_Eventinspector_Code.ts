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
            div[i].addEventListener("click", logInfo);
        }

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        let target: HTMLElement = <HTMLElement>_event.target;
        let clientX: number = _event.clientX;
        let clientY: number = _event.clientY;
        span.innerHTML = "";
        span.innerHTML = clientX + "x" + clientY + "y" + target + "target";
    }

    function logInfo(): void {
        console.log("Platzhalter");
        
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);

    }








}