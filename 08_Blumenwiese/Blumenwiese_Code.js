"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky(0, 0);
        drawGras(0, 0);
        drawSun(80, 70);
        drawCloud(35, 75);
        drawMountain(5, 300);
        drawFlower(300, 500);
        drawTulips(500, 300);
        for (var height = 450; height < 630; height += 2) {
            var randomFlower = Math.floor((Math.random() * 3));
            var width = Math.floor((Math.random() * 1100) - 10);
            switch (randomFlower) {
                case 0:
                    drawFlower(width, height);
                    break;
                case 1:
                    drawTulips(width, height);
                    break;
            }
        }
    }
    function drawSky(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#87CEEB";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x - 1280, _y + 400);
        crc2.fill();
        crc2.closePath();
    }
    function drawGras(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#48CA2A";
        crc2.moveTo(_x, _y + 400);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x + 1280, _y + 720);
        crc2.lineTo(_x - 1280, _y + 720);
        crc2.fill();
        crc2.closePath();
    }
    function drawSun(_x, _y) {
        crc2.beginPath();
        crc2.arc(250, 250, 50, 0, Math.PI * 2, false);
        crc2.fillStyle = "#FFEB00";
        crc2.fill();
        crc2.closePath();
    }
    function drawCloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 30, 25, 0, Math.PI * 2);
        crc2.arc(_x + 50, _y + 25, 40, 0, Math.PI * 2);
        crc2.arc(_x + 90, _y + 20, 35, 0, Math.PI * 2);
        crc2.arc(_x + 130, _y + 20, 25, 0, Math.PI * 2);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
    }
    function drawMountain(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "lightgray";
        crc2.lineWidth = 1.5;
        crc2.fillStyle = "#888888";
        crc2.moveTo(_x - 70, _y + 100);
        crc2.lineTo(_x + 30, _y - 20);
        crc2.lineTo(_x + 30, _y - 20);
        crc2.lineTo(_x + 60, _y - 40);
        crc2.lineTo(_x + 90, _y - 20);
        crc2.lineTo(_x + 130, _y - 60);
        crc2.lineTo(_x + 160, _y - 100);
        crc2.lineTo(_x + 220, _y - 10);
        crc2.lineTo(_x + 260, _y - 50);
        crc2.lineTo(_x + 300, _y - 60);
        crc2.lineTo(_x + 340, _y + 0);
        crc2.lineTo(_x + 360, _y + 20);
        crc2.lineTo(_x + 400, _y + 100);
        crc2.lineTo(_x - 70, _y + 100);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    function drawFlower(_x, _y) {
        //Stängel
        crc2.beginPath();
        crc2.fillStyle = "#088A29";
        crc2.fillRect(_x - 2, _y + 10, 3, 35);
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#F7819F";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.fill();
        //Blütenmitte
        crc2.beginPath();
        crc2.fillStyle = "#F8E0E6";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    function drawTulips(_x, _y) {
        //Stängel
        crc2.beginPath();
        crc2.fillStyle = "#088A29";
        crc2.fillRect(_x + 9, _y + 28, 3, 30);
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#DF7401";
        crc2.arc(_x + 10, _y + 20, 10, 0, Math.PI * 2);
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y + 7);
        crc2.lineTo(_x + 6, _y + 14);
        crc2.lineTo(_x + 10.5, _y + 4);
        crc2.lineTo(_x + 15, _y + 14);
        crc2.lineTo(_x + 20, _y + 7);
        crc2.lineTo(_x + 20, _y + 21);
        crc2.fill();
        crc2.closePath();
    }
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=Blumenwiese_Code.js.map