namespace DoenerTrainer {
    export class Container extends Moveable {
        public ingredient: string;
        public capacity: number;
        public amount: number;

        public constructor(_ingredient: string, _capacity: number) {
            super(new Vector(counterPosition.x + 30, 25));
            this.ingredient = _ingredient;
            this.capacity = _capacity;
            this.amount = this.capacity;
        }

        public draw(): void {
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "white";
            crc2.fillRect(0, 70 - 70 * (this.amount / this.capacity), 90, 70 * (this.amount / this.capacity));
            crc2.strokeStyle = "black";
            crc2.strokeRect(0, 0, 90, 70);
            crc2.fillStyle = "black";
            crc2.fillText(this.ingredient, 5, 60);
            crc2.restore();
        }
    }
}
