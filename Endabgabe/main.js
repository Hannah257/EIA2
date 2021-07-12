"use strict";
var simulation;
(function (simulation) {
    window.addEventListener("load", handleLoad);
    simulation.scale = window.devicePixelRatio;
    //Team Red
    let x = [10, 150, 150, 150, 150, 425, 425, 425, 725, 750, 725];
    let y = [350, 125, 275, 425, 575, 175, 350, 525, 125, 350, 575];
    //Team Blue
    let a = [990, 850, 850, 850, 850, 575, 575, 575, 275, 250, 275];
    let b = [350, 575, 425, 275, 125, 525, 350, 175, 575, 350, 125];
    //Spieler
    let guys = [];
    let colors = ["red", "blue"];
    let playerPosition;
    function handleLoad() {
        simulation.canvasPlayers = document.getElementById("players");
        simulation.crc2Players = simulation.canvas.getContext("2d");
        ;
        simulation.canvas = document.getElementById("field");
        simulation.crc2 = simulation.canvas.getContext("2d");
        simulation.canvas.width = 1000 * simulation.scale;
        simulation.canvas.height = 700 * simulation.scale;
        simulation.canvasPlayers.width = 1000 * simulation.scale;
        simulation.canvasPlayers.height = 700 * simulation.scale;
        createField();
        placePlayersTeamRed(0);
        placePlayersTeamBlue(0);
    }
    function placePlayersTeamRed(_s) {
        let players = [];
        for (let i = 0; i < 11; i++) {
            playerPosition = new simulation.Vector(x[_s] * simulation.scale, y[_s] * simulation.scale);
            let player = new simulation.Player(playerPosition);
            player.draw(colors[0]);
            players.splice(_s, 0, _s);
            _s += 1;
        }
        guys.splice(0, 0, players);
        console.log(guys[0]);
    }
    function placePlayersTeamBlue(_t) {
        let players = [];
        for (let i = 0; i < 11; i++) {
            playerPosition = new simulation.Vector(a[_t] * simulation.scale, b[_t] * simulation.scale);
            let player = new simulation.Player(playerPosition);
            player.draw(colors[1]);
            players.splice(_t, 0, _t);
            _t += 1;
        }
        guys.splice(1, 0, players);
        console.log(guys[1]);
    }
    function createField() {
        //Mittellinie
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(500 * simulation.scale, 0);
        simulation.crc2.lineTo(500 * simulation.scale, 700 * simulation.scale);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Spielfeldumrandung
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(0, 0);
        simulation.crc2.lineTo(1000 * simulation.scale, 0);
        simulation.crc2.lineTo(1000 * simulation.scale, 700 * simulation.scale);
        simulation.crc2.lineTo(0, 700 * simulation.scale);
        simulation.crc2.lineTo(0, 0);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 8;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Mittelkreis
        simulation.crc2.beginPath();
        simulation.crc2.arc(500 * simulation.scale, 350 * simulation.scale, 90, 0, 2 * Math.PI);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Tor links
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(0, 315 * simulation.scale);
        simulation.crc2.lineTo(6 * simulation.scale, 315 * simulation.scale);
        simulation.crc2.moveTo(0, 385 * simulation.scale);
        simulation.crc2.lineTo(6 * simulation.scale, 385 * simulation.scale);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Torraum links
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(0, 260 * simulation.scale);
        simulation.crc2.lineTo(55 * simulation.scale, 260 * simulation.scale);
        simulation.crc2.lineTo(55 * simulation.scale, 440 * simulation.scale);
        simulation.crc2.lineTo(0, 440 * simulation.scale);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Strafraum links
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(0, 150 * simulation.scale);
        simulation.crc2.lineTo(165 * simulation.scale, 150 * simulation.scale);
        simulation.crc2.lineTo(165 * simulation.scale, 550 * simulation.scale);
        simulation.crc2.lineTo(0, 550 * simulation.scale);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Tor rechts
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(1000 * simulation.scale, 315 * simulation.scale);
        simulation.crc2.lineTo(994 * simulation.scale, 315 * simulation.scale);
        simulation.crc2.moveTo(1000 * simulation.scale, 385 * simulation.scale);
        simulation.crc2.lineTo(994 * simulation.scale, 385 * simulation.scale);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Torraum rechts
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(1000 * simulation.scale, 260 * simulation.scale);
        simulation.crc2.lineTo(945 * simulation.scale, 260 * simulation.scale);
        simulation.crc2.lineTo(945 * simulation.scale, 440 * simulation.scale);
        simulation.crc2.lineTo(1000 * simulation.scale, 440 * simulation.scale);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Strafraum rechts
        simulation.crc2.beginPath();
        simulation.crc2.moveTo(1000 * simulation.scale, 150 * simulation.scale);
        simulation.crc2.lineTo(835 * simulation.scale, 150 * simulation.scale);
        simulation.crc2.lineTo(835 * simulation.scale, 550 * simulation.scale);
        simulation.crc2.lineTo(1000 * simulation.scale, 550 * simulation.scale);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Mittelpunkt
        simulation.crc2.beginPath();
        simulation.crc2.arc(500 * simulation.scale, 350 * simulation.scale, 3, 0, 2 * Math.PI);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Elfer links
        simulation.crc2.beginPath();
        simulation.crc2.arc(110 * simulation.scale, 350 * simulation.scale, 2, 0, 2 * Math.PI);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
        //Elfer rechts
        simulation.crc2.beginPath();
        simulation.crc2.arc(890 * simulation.scale, 350 * simulation.scale, 2, 0, 2 * Math.PI);
        simulation.crc2.strokeStyle = "rgba(255, 255, 255, 0.5)";
        simulation.crc2.lineWidth = 4;
        simulation.crc2.stroke();
        simulation.crc2.closePath();
    }
})(simulation || (simulation = {}));
//# sourceMappingURL=main.js.map