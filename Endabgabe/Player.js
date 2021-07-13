"use strict";
var football;
(function (football) {
    class Player {
        constructor(_position) {
            this.position = _position;
        }
        draw(_color) {
            football.crc2Players.beginPath();
            football.crc2Players.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            football.crc2Players.fillStyle = _color;
            football.crc2Players.fill();
            football.crc2Players.stroke();
            football.crc2Players.closePath();
        }
    }
    football.Player = Player;
})(football || (football = {}));
//# sourceMappingURL=Player.js.map