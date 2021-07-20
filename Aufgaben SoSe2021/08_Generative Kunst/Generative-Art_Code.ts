namespace L08_GenerativeArt {
    window.addEventListener("load", handleLoad);
    
    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
        
    
        let farbpalette: string[] = ["lightblue", "cadetblue", "cornflowerblue", "darkgrey"];
    
        for (let index: number = 0; index < 50; index++) {
            let x: number = Math.floor(Math.random());
            let y: number = Math.floor(Math.random());
            let a: number = Math.floor(Math.random());
            let b: number = Math.floor(Math.random());
            let a1: number = Math.floor(Math.random());
            let b1: number = Math.floor(Math.random());
    
            let getColor: number = Math.floor(Math.random() * Math.floor(4));

            crc2.beginPath();
            crc2.arc( x, y, 150, 0, 2 * Math.PI , false);
            crc2.fillStyle = farbpalette[getColor];
            crc2.strokeStyle = farbpalette[getColor];
            crc2.moveTo(75, 50);
            crc2.lineTo(100, 75);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.strokeStyle = farbpalette[getColor];
            crc2.moveTo(75, 25);
            crc2.quadraticCurveTo(25, 25, 25, 62.5);
            crc2.quadraticCurveTo(25, 100, 50, 100);
            crc2.quadraticCurveTo(50, 120, 30, 125);
            crc2.quadraticCurveTo(60, 120, 65, 100);
            crc2.quadraticCurveTo(125, 100, 125, 62.5);
            crc2.quadraticCurveTo(125, 25, 75, 25);
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = farbpalette[getColor];
            crc2.setLineDash([20, 15]);
            crc2.moveTo(x, y);
            crc2.lineTo(a, b);
            crc2.lineTo(a1, b1);
            crc2.stroke();

            crc2.beginPath();
            crc2.arc( x, y, 150, 0, 2 * Math.PI , false);
            crc2.fillStyle = farbpalette[getColor];
            crc2.strokeStyle = farbpalette[getColor];
            crc2.strokeRect(50, 50, 50, 50);
            crc2.closePath();
        }
    }
}
