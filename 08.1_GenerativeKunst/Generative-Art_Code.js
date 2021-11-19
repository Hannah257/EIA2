"use strict";
var L08_GenerativeArt;
(function (L08_GenerativeArt) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let farbpalette = ["lightblue", "cadetblue", "cornflowerblue", "darkgrey"];
        for (let index = 0; index < 50; index++) {
            let x = Math.floor(Math.random());
            let y = Math.floor(Math.random());
            let a = Math.floor(Math.random());
            let b = Math.floor(Math.random());
            let a1 = Math.floor(Math.random());
            let b1 = Math.floor(Math.random());
            let getColor = Math.floor(Math.random() * Math.floor(4));
            crc2.beginPath();
            crc2.arc(x, y, 150, 0, 2 * Math.PI, false);
            crc2.fillStyle = farbpalette[getColor];
            crc2.strokeStyle = farbpalette[getColor];
            crc2.moveTo(75, 50);
            crc2.lineTo(100, 75);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = farbpalette[getColor];
            crc2.moveTo(75, 25);
            crc2.quadraticCurveTo(25, 25, 25, 62.5);
            crc2.quadraticCurveTo(25, 100, 50, 100);
            crc2.quadraticCurveTo(50, 120, 30, 125);
            crc2.quadraticCurveTo(60, 120, 65, 100);
            crc2.quadraticCurveTo(125, 100, 125, 62.5);
            crc2.quadraticCurveTo(125, 25, 75, 25);
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = farbpalette[getColor];
            crc2.setLineDash([20, 15]);
            crc2.moveTo(x, y);
            crc2.lineTo(a, b);
            crc2.lineTo(a1, b1);
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(x, y, 150, 0, 2 * Math.PI, false);
            crc2.fillStyle = farbpalette[getColor];
            crc2.strokeStyle = farbpalette[getColor];
            crc2.strokeRect(50, 50, 50, 50);
            crc2.closePath();
            crc2.stroke();
        }
    }
})(L08_GenerativeArt || (L08_GenerativeArt = {}));
//# sourceMappingURL=Generative-Art_Code.js.map