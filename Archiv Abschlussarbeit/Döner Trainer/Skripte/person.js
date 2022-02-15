"use strict";
var DoenerDream;
(function (DoenerDream) {
    class Human extends DoenerDream.Moveable {
        constructor(_position) {
            super(_position);
        }
        draw() {
            DoenerDream.crc2.save();
            DoenerDream.crc2.translate(this.position.x, this.position.y);
            DoenerDream.crc2.fill();
            DoenerDream.crc2.restore();
        }
    }
    DoenerDream.Human = Human;
})(DoenerDream || (DoenerDream = {}));
//# sourceMappingURL=Human.js.map