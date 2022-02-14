namespace L08_GenerativeArt {
    window.addEventListener("load", start);

    let crc2: CanvasRenderingContext2D;

    function start(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        circle();
        triangle();
        random();
        bubble();

    }
    //funktion für die kreise
    function circle(): void {
        for (let i: number = 0; i < 20; i++) {

            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (90) + 1), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            crc2.fillStyle = "lightblue";
            crc2.fill();

        }
    }

    //funktion für die dreiecke
    function triangle(): void {

        for (let i: number = 0; i < 10; i++) {

            crc2.beginPath();

            crc2.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc2.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc2.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));

            crc2.stroke();
            crc2.closePath();

            crc2.fillStyle = "cadetblue";
            crc2.fill();

        }
    }
   
    function random(): void {

        crc2.beginPath();
     
        crc2.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
        crc2.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
        crc2.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
        crc2.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));

        crc2.stroke();
        crc2.closePath();

        crc2.fillStyle = "darkgrey";
        crc2.fill();

    }

    function bubble(): void {
        crc2.beginPath();
        crc2.strokeStyle = "cornflowerblue";
        crc2.moveTo(75, 25);
        crc2.quadraticCurveTo(25, 25, 25, 62.5);
        crc2.quadraticCurveTo(25, 100, 50, 100);
        crc2.quadraticCurveTo(50, 120, 30, 125);
        crc2.quadraticCurveTo(60, 120, 65, 100);
        crc2.quadraticCurveTo(125, 100, 125, 62.5);
        crc2.quadraticCurveTo(125, 25, 75, 25);
        crc2.stroke();

    }
}