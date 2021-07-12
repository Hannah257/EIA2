namespace simulation {
   
    window.addEventListener("load", handleLoad);

    //Canvas und rendering context Spielfeld.
    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let scale: number = window.devicePixelRatio;

    //Canvas und rendering context Spieler.
    export let canvasPlayers: HTMLCanvasElement;
    export let crc2Players: CanvasRenderingContext2D;

    //Team Red
    let x: number[] = [10, 150, 150, 150, 150, 425, 425, 425, 725, 750, 725];
    let y: number[] = [350, 125, 275, 425, 575, 175, 350, 525, 125, 350, 575];

    //Team Blue
    let a: number[] = [990, 850, 850, 850, 850, 575, 575, 575, 275, 250, 275];
    let b: number[] = [350, 575, 425, 275, 125, 525, 350, 175, 575, 350, 125];

    //Spieler
    let guys: number[][] = [];
    let colors: string[] = ["red", "blue"];

    let playerPosition: Vector;


    function handleLoad(): void {

        canvasPlayers = <HTMLCanvasElement>document.getElementById("players");
        crc2Players = <CanvasRenderingContext2D>canvas.getContext("2d");;

        canvas = <HTMLCanvasElement>document.getElementById("field");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        canvas.width = 1000 * scale;
        canvas.height = 700 * scale;
        canvasPlayers.width = 1000 * scale;
        canvasPlayers.height = 700 * scale;
        createField();
        placePlayersTeamRed(0);
        placePlayersTeamBlue(0);

    }


    function placePlayersTeamRed(_s: number): void {
        let players: number[] = [];
        for (let i: number = 0; i < 11; i++) {
            playerPosition = new Vector(x[_s] * scale, y[_s] * scale);
            let player: Player = new Player(playerPosition);
            player.draw(colors[0]);
            players.splice(_s, 0, _s);
            _s += 1;
        }
        guys.splice(0, 0, players);
        console.log(guys[0]);
    }

    function placePlayersTeamBlue(_t: number): void {
        let players: number[] = [];

        for (let i: number = 0; i < 11; i++) {
            playerPosition = new Vector(a[_t] * scale, b[_t] * scale);
            let player: Player = new Player(playerPosition);
            player.draw(colors[1]);
            players.splice(_t, 0, _t);
            _t += 1;
        }
        guys.splice(1, 0, players);
        console.log(guys[1]);
    }

    
    function createField(): void {
        //Mittellinie
        crc2.beginPath();
        crc2.moveTo(500 * scale, 0);
        crc2.lineTo(500 * scale, 700 * scale);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Spielfeldumrandung
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(1000 * scale, 0);
        crc2.lineTo(1000 * scale, 700 * scale);
        crc2.lineTo(0, 700 * scale);
        crc2.lineTo(0, 0);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 8;
        crc2.stroke();
        crc2.closePath();

        //Mittelkreis
        crc2.beginPath();
        crc2.arc(500 * scale, 350 * scale, 90, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Tor links
        crc2.beginPath();
        crc2.moveTo(0, 315 * scale);
        crc2.lineTo(6 * scale, 315 * scale);
        crc2.moveTo(0, 385 * scale);
        crc2.lineTo(6 * scale, 385 * scale);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Torraum links
        crc2.beginPath();
        crc2.moveTo(0, 260 * scale);
        crc2.lineTo(55 * scale, 260 * scale);
        crc2.lineTo(55 * scale, 440 * scale);
        crc2.lineTo(0, 440 * scale);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Strafraum links
        crc2.beginPath();
        crc2.moveTo(0, 150 * scale);
        crc2.lineTo(165 * scale, 150 * scale);
        crc2.lineTo(165 * scale, 550 * scale);
        crc2.lineTo(0, 550 * scale);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();



        //Tor rechts
        crc2.beginPath();
        crc2.moveTo(1000 * scale, 315 * scale);
        crc2.lineTo(994 * scale, 315 * scale);
        crc2.moveTo(1000 * scale, 385 * scale);
        crc2.lineTo(994 * scale, 385 * scale);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Torraum rechts
        crc2.beginPath();
        crc2.moveTo(1000 * scale, 260 * scale);
        crc2.lineTo(945 * scale, 260 * scale);
        crc2.lineTo(945 * scale, 440 * scale);
        crc2.lineTo(1000 * scale, 440 * scale);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Strafraum rechts
        crc2.beginPath();
        crc2.moveTo(1000 * scale, 150 * scale);
        crc2.lineTo(835 * scale, 150 * scale);
        crc2.lineTo(835 * scale, 550 * scale);
        crc2.lineTo(1000 * scale, 550 * scale);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Mittelpunkt
        crc2.beginPath();
        crc2.arc(500 * scale, 350 * scale, 3, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Elfer links
        crc2.beginPath();
        crc2.arc(110 * scale, 350 * scale, 2, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        //Elfer rechts
        crc2.beginPath();
        crc2.arc(890 * scale, 350 * scale, 2, 0, 2 * Math.PI);
        crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

    }

}