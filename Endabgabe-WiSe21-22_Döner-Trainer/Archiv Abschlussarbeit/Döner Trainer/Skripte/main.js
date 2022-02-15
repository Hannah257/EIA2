"use strict";
/*
Aufgabe: Endabagbe Döner Trainer
Name: Hannah Stratmann
Matrikel: 263981
*/
var DoenerDream;
(function (DoenerDream) {
    window.addEventListener("load", hndLoad);
    let customerSpawnPoint;
    let customerSpawnRate;
    let staffRestingTime;
    let maxStock;
    let containerCapacity;
    DoenerDream.customers = [];
    let workers = [];
    let containers = [];
    let stockDiv;
    let statsDiv;
    let orderDiv;
    let canvas;
    let body;
    function calculateRandom(_min, _max) {
        let random = (Math.random() * (_max - _min)) + _min;
        return (random);
    }
    DoenerDream.calculateRandom = calculateRandom;
    function hndLoad(_event) {
        prepareGame();
    }
    function prepareGame() {
        staffRestingTime = 6;
        customerSpawnRate = 8;
        maxStock = 60;
        containerCapacity = 20;
        DoenerDream.stock = {
            onions: maxStock,
            lettuce: maxStock,
            cabbage: maxStock,
            corn: maxStock,
            sauce: maxStock,
            falafel: maxStock,
            yufka: maxStock,
            doener: maxStock
        };
        body = document.querySelector("body");
        canvas = document.querySelector("canvas");
        DoenerDream.crc2 = canvas.getContext("2d");
        DoenerDream.middle = new DoenerDream.Vector(DoenerDream.crc2.canvas.width / 2, DoenerDream.crc2.canvas.height / 2);
        DoenerDream.barPosition = new DoenerDream.Vector(DoenerDream.middle.x - 100, 0);
        DoenerDream.plate = new DoenerDream.Plate;
        customerSpawnPoint = new DoenerDream.Vector(-50, DoenerDream.middle.y);
        canvas.addEventListener("click", hndCanvasClick);
        stockDiv = document.createElement("div");
        stockDiv.setAttribute("id", "stockDiv");
        body.appendChild(stockDiv);
        updateStockDiv();
        statsDiv = document.createElement("div");
        statsDiv.setAttribute("id", "statsDiv");
        body.appendChild(statsDiv);
        orderDiv = document.createElement("div");
        orderDiv.setAttribute("id", "orderDiv");
        body.appendChild(orderDiv);
        updateOrderDiv(["onions", "cabbage", "lettuce"]);
        startGame();
    }
    function updateOrderDiv(_order) {
        orderDiv.innerHTML = "";
        let headline = document.createElement("p");
        headline.innerHTML = "<b> Order <b>";
        orderDiv.appendChild(headline);
        for (let ingredient of _order) {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = "- " + ingredient;
            orderDiv.appendChild(paragraph);
        }
    }
    DoenerDream.updateOrderDiv = updateOrderDiv;
    function updateStockDiv() {
        stockDiv.innerHTML = "";
        for (let ingredient in DoenerDream.stock) {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = ingredient + ": " + DoenerDream.stock[ingredient] + " / " + maxStock;
            let restockButton = document.createElement("button");
            restockButton.setAttribute("id", ingredient);
            restockButton.innerHTML = "Restock";
            if (DoenerDream.stock[ingredient] >= maxStock)
                restockButton.setAttribute("disabled", "true");
            restockButton.addEventListener("click", restock);
            paragraph.appendChild(restockButton);
            stockDiv.appendChild(paragraph);
        }
    }
    function restock(_event) {
        let target = _event.target;
        target.setAttribute("disabled", "true");
        setTimeout(function () { DoenerDream.stock[target.id] = maxStock; updateStockDiv(); }, 5000);
    }
    function startGame() {
        newCustomer();
        let staff = new DoenerDream.Staff(staffRestingTime);
        workers.push(staff);
        staff.task = DoenerDream.TASK.BAR;
        let loop = 0;
        for (let ingredient in DoenerDream.stock) {
            let container = new DoenerDream.Container(ingredient, containerCapacity);
            if (loop == 4) {
                container.position.y += loop * 2 * 85;
            }
            else {
                container.position.y += loop * 85;
            }
            containers.push(container);
            loop += 1;
        }
        DoenerDream.plate = new DoenerDream.Plate();
        window.setInterval(newCustomer, customerSpawnRate * 1000);
    }
    function hndCanvasClick(_event) {
        let object = _event.target;
        let rect = object.getBoundingClientRect();
        let scaling = new DoenerDream.Vector(DoenerDream.crc2.canvas.height / rect.height, DoenerDream.crc2.canvas.width / rect.width);
        let pointer = new DoenerDream.Vector((_event.clientX - rect.left) * scaling.x, (_event.clientY - rect.top) * scaling.x);
        let target;
        for (let container of containers) {
            if (container.position.x < pointer.x && pointer.x < container.position.x + 90 && pointer.y > container.position.y && pointer.y < container.position.y + 70) {
                target = container;
            }
        }
        if (35 >= new DoenerDream.Vector(DoenerDream.plate.position.x - pointer.x, DoenerDream.plate.position.y - pointer.y).length)
            target = DoenerDream.plate;
        if (target instanceof DoenerDream.Container) {
            if (target.amount > 0) {
                let barStaff;
                for (let staff of workers) {
                    if (staff.task == DoenerDream.TASK.BAR)
                        barStaff = staff;
                }
                if (barStaff)
                    barStaff.fillPlate(target);
            }
        }
        else if (target instanceof DoenerDream.Plate) {
            for (let customer of DoenerDream.customers) {
                if (customer.state == DoenerDream.STATE.WAITING) {
                    customer.receiveFood(target.contents);
                    DoenerDream.plate.contents = [];
                }
            }
        }
        console.log(DoenerDream.plate.contents, target);
    }
    function newCustomer() {
        if (DoenerDream.customers.length < 4) {
            DoenerDream.customers.push(new DoenerDream.Customer(new DoenerDream.Vector(customerSpawnPoint.x, customerSpawnPoint.y)));
        }
    }
    function removeCustomer(_customer) {
        DoenerDream.customers.splice(DoenerDream.customers.indexOf(_customer), 1);
    }
    DoenerDream.removeCustomer = removeCustomer;
})(DoenerDream || (DoenerDream = {}));
//# sourceMappingURL=Main.js.map