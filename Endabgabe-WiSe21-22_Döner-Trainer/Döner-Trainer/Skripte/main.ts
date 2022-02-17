/*
Aufgabe: Endabagbe Döner Trainer
Name: Hannah Stratmann
Matrikel: 263981
Inspiration: Amélie Dell'Oro
*/

namespace DoenerTrainer {

    window.addEventListener("load", handleLoad);

    // tslint:disable-next-line: label-position
    formData: FormData;
    let staffBreak: number;
    let staffAmount: number;
    let maxStock: number;
    let minStock: number;
    let ContainerCapacity: number;
    export let counterPosition: Vector;
    export let stockPosition: Vector;
    export let crc2: CanvasRenderingContext2D;
    let worker: Staff[] = [];
    let client: Customer[] = [];
    let food: container[] = [all containers];
    export interface Stock { };
    let stock: HTMLDivElement;
    let order: HTMLDivElement;
    let body: HTMLBodyElement;
    let canvas: HTMLCanvasElement;

    function prepareGame(): void {

        staffBreak = 5;
        maxStock = 50;
        ContainerCapacity = 10;
        stock = {
            kebap: maxStock,
            salad: maxStock,
            tomato: maxStock,
            onions: maxStock,
            sauce: maxStock
        };

        body = <HTMLBodyElement>document.querySelector("body");

        canvas = <HTMLCanvasElement>document.querySelector("canvas");

        crc2 = canvas.getContext("2d")!;
        counterPosition = new Vector(100, 100);
        counter = new Counter;

        canvas.addEventListener("click", handleCanvasClick);

        stock = document.createElement("div");
        stock.setAttribute("id", "stockDiv");
        body.appendChild(stock);

        startGame();
    }

    function restock(_event: MouseEvent): void {
        let target: HTMLButtonElement = <HTMLButtonElement>_event.target;
        target.setAttribute("disabled", "true");
    }

    function startGame(): void {

        let staff: Staff = new Staff(staffBreak);
        worker.push(staffAmount);
        staff.task = WORK.Servecostumer;

        client.push(customerAmount);
        client.task = Status.queuing;

        let loop: number = 0;
        for (let ingredient in stock) {
            let container: container = new container(ingredient, ContainerCapacity);
            if (loop == 4) {
                container.position.y += loop * 2 * 85;
            }
            else {
                container.position.y += loop * 85;
            }
            container.push(container);
            loop += 1;
        }
    }

    function handleClick(_event: MouseEvent): void {
        let object: HTMLElement = <HTMLElement>_event.target;
        let rect: DOMRect = object.getBoundingClientRect();
        let scaling: Vector = new Vector(crc2.canvas.height / rect.height, crc2.canvas.width / rect.width);

        let target: Staff | Counter | Container | Amount | undefined ;
        for (let container of container) {
            if (container.position.x < pointer.x && pointer.x < container.position.x + 90 && pointer.y > container.position.y && pointer.y < container.position.y + 70) {
                target = container;
            }
        }

        if (35 >= new Vector(counter.position.x - pointer.x, counter.position.y - pointer.y).length)
            target = counter;
        if (target instanceof container) {
            if (container.amount > 0) {
                let counterStaff: Staff;
                for (let staff of worker) {
                    if (staff.task == WORK.Servecustomer)
                        barStaff = staff;
                }
                if (counterStaff)
                    counterStaff.Editorder(container);
            }
        }
        else if (target instanceof Counter) {
            for (let customer of customer) {
                if (customer.state == Status.waiting) {
                    customer.receiveFood(counter.request);
                    counter.request = [];
                }
            }
        }
        console.log(counter.request, target);
    }
}
function handleLoad(): void {
    console.log("Test test?");
}
