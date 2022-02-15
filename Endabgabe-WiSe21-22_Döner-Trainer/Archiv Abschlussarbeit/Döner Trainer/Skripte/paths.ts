namespace DoenerTrainer {
    export function drawPerson(_mood: string): void {
        switch (_mood) {
            case "happy":
                crc2.fillStyle = "green";
                break;
            case "okay":
                crc2.fillStyle = "yellow";
                break;
            case "angry":
                crc2.fillStyle = "red";
                break;
        }
        crc2.beginPath();
        crc2.arc(0, 0, 30, 0, 360);
        crc2.closePath();
        crc2.fill();
    }
}