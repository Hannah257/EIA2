namespace DoenerTrainer {

    export enum Status {
        queuing,
        waiting,
        going
    }

    export class Customer extends person {
        public order: string[];
        public state: Status;

        public constructor(_position: Vector) {
            super(_position);
            this.velocity.set(150, 0);
            this.order = ["kebap", "salad", "tomato", "onion", "suace", "sauce"];

            this.state = Status.queuing;
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);

            switch (this.state) {
                case Status.queuing:
                    let nextInLine: Customer = customer[customer.indexOf(this) - 1];
                    if (this.position.x >= ? - 150) {
                        this.velocity.set(0, 0);
                        this.state = Status.queuing;
                        break;
                    }
                    else if (nextInLine) {
                        if ((this.velocity.length * _timeslice) + 150 > new Vector(nextInLine.position.x - this.position.x, nextInLine.position.y - this.position.y).length) {
                            this.velocity.set(0, 0);
                        }
                        else {
                            this.velocity.set(150, 0);
                        }
                    }
                    break;
                case Status.going:
                    if (this.position.y > crc2.canvas.height + 50)
        
    }
    

        public Orderreceived(_counter: string[]): void {
            if (_counter.length == this.order.length) {
                let overlap: number = 0;
                for (let ingredient of this.order) {
                    if (_counter.includes(ingredient))
                        overlap += 1;
                }
                if (overlap == this.order.length)

                    this.velocity.set(0, 150);
                this.state = Status.going;
            }
        }
    }
}