namespace DoenerTrainer {
    // tslint:disable-next-line: class-name
    export abstract class person extends Moveable {

        protected constructor(_position: Vector) {
            super(_position);
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fill();
            crc2.restore();
        }


        }

    }
