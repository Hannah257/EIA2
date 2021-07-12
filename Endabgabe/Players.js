"use strict";
var simulation;
(function (simulation) {
    class Player {
        constructor(_position) {
            this.position = _position;
        }
        draw(_color) {
            simulation.crc2Players.beginPath();
            simulation.crc2Players.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            simulation.crc2Players.strokeStyle = _color;
            simulation.crc2Players.fillStyle = _color;
            simulation.crc2Players.fill();
            simulation.crc2Players.stroke();
            simulation.crc2Players.closePath();
        }
    }
    simulation.Player = Player;
})(simulation || (simulation = {}));
//# sourceMappingURL=Players.js.map