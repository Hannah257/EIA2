namespace DoenerTrainer {


    export enum WORK {
        Servecustomer,
        GoingtoRefill,
        Refilling,
        BacktoServing,
        Resting,
        Servecostumer
    }

    export class Staff extends person {
        public active: boolean;
        public task: WORK;
        public target: Container;
        private originalPosition: Vector;
        startingPosition: Vector;

        public constructor(_break: number) {
            super(new Vector(800, 400));
            this.task = WORK.Servecostumer;
            this.startingPosition = new Vector(600, 400);
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            switch (this.task) {
                case WORK.GoingtoRefill:
                    if ((this.velocity.length * _timeslice) + 250 > new Vector(this.target!.position.x - this.position.x, this.target!.position.y - this.position.y).length) {
                        this.velocity.set(800, 400);
                        this.task = WORK.GoingtoRefill;
                    }
                    break;
                case WORK.Refilling:
                    if ((this.velocity.length * _timeslice) + 100 > new Vector(800 - this.position.x, 400 - this.position.y).length) {
                        this.velocity.set(0, 0);
                        let difference: number = this.target!.capacity - this.target!.amount;
                        Stock[this.target!.ingredient] -= difference;
                        this.task = WORK.Refilling;
                    }
                    break;
                case WORK.BacktoServing:
                    if ((this.velocity.length * _timeslice) + 250 > new Vector(this.target!.position.x - this.position.x, this.target!.position.y - this.position.y).length) {
                        let distance: Vector = new Vector(this.startingPosition.x - this.position.x, this.startingPosition.y - this.position.y);
                        this.velocity.set(distance.x, distance.y);
                        this.velocity.scale(100 / distance.length);
                        this.task = WORK.BacktoServing;
                    }
                    break;
                case WORK.Resting:
                    if ((this.velocity.length * _timeslice) + 250 > new Vector(this.originalPosition.x - this.position.x, this.originalPosition.y - this.position.y).length) {
                        this.velocity.set(0, 0);
                        this.task = WORK.Resting;
                    }
            }
        }

        public refill(_target: Container): void {
            this.task = WORK.GoingtoRefill;
            this.target = _target;
            let distance: Vector = new Vector(this.target.position.x - this.position.x, this.target.position.y - this.position.y);
            this.velocity.set(distance.x, distance.y);
            this.velocity.scale(100 / distance.length);
        }

        public Editorder(_container: Container): void {
            Counter.request.push(_container.ingredient);
            _container.amount -= 1;
        }


    }
}