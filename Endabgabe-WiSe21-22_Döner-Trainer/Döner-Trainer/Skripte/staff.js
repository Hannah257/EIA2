"use strict";
var DoenerDream;
(function (DoenerDream) {
    let TASK;
    (function (TASK) {
        TASK[TASK["BAR"] = 0] = "BAR";
        TASK[TASK["GOINGTOCONTAINER"] = 1] = "GOINGTOCONTAINER";
        TASK[TASK["GOINGTOKITCHEN"] = 2] = "GOINGTOKITCHEN";
        TASK[TASK["REFILLING"] = 3] = "REFILLING";
        TASK[TASK["COMINGFROMREFILL"] = 4] = "COMINGFROMREFILL";
        TASK[TASK["RETURNING"] = 5] = "RETURNING";
        TASK[TASK["WAITING"] = 6] = "WAITING";
        TASK[TASK["RECOVERING"] = 7] = "RECOVERING";
    })(TASK = DoenerDream.TASK || (DoenerDream.TASK = {}));
    class Staff extends DoenerDream.Human {
        constructor(_restingTime) {
            super(new DoenerDream.Vector(800, 400));
            this.task = TASK.WAITING;
            this.originalPosition = new DoenerDream.Vector(600, 400);
        }
        move(_timeslice) {
            super.move(_timeslice);
            switch (this.task) {
                case TASK.GOINGTOCONTAINER:
                    if ((this.velocity.length * _timeslice) + 250 > new DoenerDream.Vector(this.target.position.x - this.position.x, this.target.position.y - this.position.y).length) {
                        this.velocity.set(800, 400);
                        this.task = TASK.GOINGTOKITCHEN;
                    }
                    break;
                case TASK.GOINGTOKITCHEN:
                    if ((this.velocity.length * _timeslice) + 100 > new DoenerDream.Vector(800 - this.position.x, 400 - this.position.y).length) {
                        this.velocity.set(0, 0);
                        let difference = this.target.capacity - this.target.amount;
                        DoenerDream.stock[this.target.ingredient] -= difference;
                        this.task = TASK.REFILLING;
                    }
                    break;
                case TASK.COMINGFROMREFILL:
                    if ((this.velocity.length * _timeslice) + 250 > new DoenerDream.Vector(this.target.position.x - this.position.x, this.target.position.y - this.position.y).length) {
                        let distance = new DoenerDream.Vector(this.originalPosition.x - this.position.x, this.originalPosition.y - this.position.y);
                        this.velocity.set(distance.x, distance.y);
                        this.velocity.scale(100 / distance.length);
                        this.task = TASK.RETURNING;
                        this.target = undefined;
                    }
                    break;
                case TASK.RETURNING:
                    if ((this.velocity.length * _timeslice) + 250 > new DoenerDream.Vector(this.originalPosition.x - this.position.x, this.originalPosition.y - this.position.y).length) {
                        this.velocity.set(0, 0);
                        this.task = TASK.WAITING;
                    }
            }
        }
        refill(_target) {
            this.task = TASK.GOINGTOCONTAINER;
            this.target = _target;
            let distance = new DoenerDream.Vector(this.target.position.x - this.position.x, this.target.position.y - this.position.y);
            this.velocity.set(distance.x, distance.y);
            this.velocity.scale(100 / distance.length);
        }
        fillPlate(_container) {
            DoenerDream.plate.contents.push(_container.ingredient);
            _container.amount -= 1;
        }
    }
    DoenerDream.Staff = Staff;
})(DoenerDream || (DoenerDream = {}));
//# sourceMappingURL=Staff.js.map