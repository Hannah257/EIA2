namespace L08_Blumenwiese {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function handleLoad(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        drawSky(0, 0, "#87CEEB");
        drawGras(0, 0);
        drawSun(80, 70, "#FFEB00", "yellow");
        drawCloud(35, 75, "#FFFFFF");
        drawMountain(5, 300, "#888888");

        drawFlower(300, 500);
        drawTulips(500, 300);

        for (var height: number = 450; height < 630; height += 2) {
            var randomFlower: number = Math.floor((Math.random() * 3));
            var width: number = Math.floor((Math.random() * 1100) - 10);

            switch (randomFlower) {
                case 0:
                    drawFlower(width, height);
                    break;
                case 1:
                    drawTulips(width, height);
                    break;
            }
        }
    }

    function drawSky(_x: number, _y: number, _strokeColor: string): void {

        var gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#87CEEB");

        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = gradient;

        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x - 1280, _y + 400);

        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawGras(_x: number, _y: number): void {

        var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#48CA2A");

        crc2.beginPath();
        crc2.strokeStyle = gradient;
        crc2.fillStyle = gradient;

        crc2.moveTo(_x, _y + 400);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x + 1280, _y + 720);
        crc2.lineTo(_x - 1280, _y + 720);

        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

        crc2.beginPath();
        crc2.arc(250, 250, 50, 0, Math.PI * 2, false);
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        crc2.stroke();
        crc2.closePath();
    }

    function drawCloud(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
    }

    function drawMountain(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "lightgray";
        crc2.lineWidth = 2;

        var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "#888888");

        crc2.fillStyle = gradient;
        crc2.moveTo(_x - 70, _y + 100);
        crc2.lineTo(_x + 30, _y - 20);
        crc2.lineTo(_x + 30, _y - 20);
        crc2.lineTo(_x + 60, _y - 40);
        crc2.lineTo(_x + 90, _y - 20);
        crc2.lineTo(_x + 130, _y - 60);
        crc2.lineTo(_x + 160, _y - 100);
        crc2.lineTo(_x + 220, _y - 10);
        crc2.lineTo(_x + 260, _y - 50);
        crc2.lineTo(_x + 300, _y - 60);
        crc2.lineTo(_x + 340, _y + 0);
        crc2.lineTo(_x + 360, _y + 20);
        crc2.lineTo(_x + 400, _y + 100);
        crc2.lineTo(_x - 70, _y + 100);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }

    function drawFlower(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "#088A29";
        crc2.fillRect(_x - 2, _y + 10, 3, 35);

        crc2.beginPath();
        crc2.fillStyle = "#F7819F";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#F8E0E6";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    function drawTulips(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "#088A29";
        crc2.fillRect(_x + 9, _y + 28, 3, 30);

        crc2.beginPath();
        crc2.fillStyle = "#DF7401";
        crc2.arc(_x + 10, _y + 20, 10, 0, 1 * Math.PI);
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y + 7);
        crc2.lineTo(_x + 6, _y + 14);
        crc2.lineTo(_x + 10.5, _y + 4);
        crc2.lineTo(_x + 15, _y + 14);
        crc2.lineTo(_x + 20, _y + 7);
        crc2.lineTo(_x + 20, _y + 21);

        crc2.closePath();
        crc2.fill();
    }
}