namespace L08_Canvas_CoronaVirus {
    interface Vector {
        x: number;
        y: number;
    }
    let crc2: CanvasRenderingContext2D;
    let middle: number = 0.75;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackgroundZellen();
        drawMenschZellen({ x: 200, y: 300 }, { x: 100, y: 120 });
        drawCoronaVirus({ x: 180, y: 200 }, { x: 450, y: 70 });
        drawAntikörper({ x: 200, y: 430 }, { x: 100, y: 120 });
        drawKillerzelle({ x: 60, y: 370 }, { x: 100, y: 120 });

    }
    function drawBackgroundZellen(): void {
        console.log("BackgroundZellen");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 50%, 70%)");
        gradient.addColorStop(middle, "black");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");

        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "lightyellow";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        pattern.strokeStyle = "HSL(0, 30%, 40%)";
        pattern.stroke();
        pattern.closePath();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }
    function drawMenschZellen(_position: Vector, _size: Vector): void {
        console.log("ZelleMensch", _position);
        let r1: number = 1;
        let r2: number = 15;
        let nParticles: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(300, 30%, 70%)");
        gradient.addColorStop(0.5, "HSLA(400, 0%, 100%)");
        gradient.addColorStop(0.8, "HSLA(400, 0%, 100%)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;


        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }

    function drawCoronaVirus(_position: Vector, _size: Vector): void {
        console.log("CoronaVirus", _position, _size);
      
        let r1: number = 10;
        let r2: number = 20;
        let nParticles: number = 15;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 0%, 0%)");
        gradient.addColorStop(0.5, "HSLA(0, 0%, 50%)");
        gradient.addColorStop(0.8, "HSLA(0, 0%, 0%)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;


        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }

    function drawAntikörper(_position: Vector, _size: Vector): void {
        console.log("Antikörper", _position, _size);

        let amountA: number = 10;
        let antibody: Path2D = new Path2D;
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 25, _position.y - 10);
        crc2.lineWidth = 3;
        crc2.strokeStyle = "orange";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 31, _position.y - 18, 12, 0.7, 1.4 * Math.PI);
        crc2.stroke();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);


        for (let drawn: number = 0; drawn < amountA; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(antibody);
            crc2.restore();

        }
        crc2.restore();
    }

    function drawKillerzelle(_position: Vector, _size: Vector): void {
        console.log("Killerzelle", _position, _size);

        crc2.beginPath();
        crc2.moveTo(75, 50);
        crc2.lineTo(100, 75);
        crc2.lineTo(100, 75);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.stroke();
        crc2.save();
        crc2.closePath();

        crc2.restore();

    }
}
