namespace simulation {

    export class Player {
        position: Vector;
        direction: Vector;
        speed: number;
        precision: number;


        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(_color: string): void {
            crc2Players.beginPath();
            crc2Players.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2Players.strokeStyle = _color;
            crc2Players.fillStyle = _color;
            crc2Players.fill();
            crc2Players.stroke();
            crc2Players.closePath();
        }
    }
}