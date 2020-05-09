namespace L02_Sequenzmemory {
    let predefined: HTMLInputElement = <HTMLInputElement>document.getElementById("predefined");
    let own: HTMLInputElement = <HTMLInputElement>document.getElementById("own"); 
    
    let selectPredefined: HTMLInputElement = <HTMLInputElement>document.getElementById("selectPredefined");
    let inputOwn: HTMLInputElement = <HTMLInputElement>document.getElementById("inputOwn");
    
    let duration: HTMLInputElement = <HTMLInputElement>document.getElementById("duration");
    let time: HTMLButtonElement = <HTMLButtonElement>document.getElementById("time");
    
    let startDuration: HTMLButtonElement = <HTMLButtonElement>document.getElementById("StartDuration"); 
    let startTime: HTMLButtonElement = <HTMLButtonElement>document.getElementById("StartTime"); 
    
    let timer: HTMLDivElement = <HTMLDivElement>document.getElementById("timer");
    let score: HTMLDivElement = <HTMLDivElement>document.getElementById("score");
    let playground: HTMLDivElement = <HTMLDivElement>document.getElementById("playground"); 


    function mixCards(_letter: string): void {
        let abc: string[] = _letter.split("");

        let ctr: number = abc.length;
        while (ctr > 0) {
            let index: number = Math.floor(Math.random()*ctr);
            ctr --;
            let temp: string = abc[ctr];
            abc[ctr] = abc[index];
            abc[index] = temp;
        }
        let length: number = abc.length;
        startTime(length, abc, _letter);
    }
    startTime.addEventListener("click", Input);

    function Inputfeld(): void {
        if (predefined.checked == true) {
            selectPredefined.disabled = false;
            inputOwn.disabled = true;
        }
        else if (own.checked == true) {
            selectPredefined.disabled = true;
            inputOwn.disabled = false;
        }
    }

    function Input(): void {
        if (inputOwn.disabled == false) {
            score.innerHTML = "" + inputOwn.value;
            mixCards(inputOwn.value);
        }
        else if (selectPredefined.disabled == false) {
            score.innerHTML = "" + selectPredefined.value;
            mixCards(selectPredefined.value);
        }
    }

    









}