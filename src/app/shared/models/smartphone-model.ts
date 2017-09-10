export class SmartPhone {
    constructor(
        title: string,
        camera: string,
        display: string,
        cpu: string,
        memory: string,
        battery: string,
        price: number
    ) {
        this.title = title;
        this.camera = camera;
        this.display = display;
        this.battery = battery;
        this.cpu = cpu;
        this.memory = memory;
        this.price = price;
    }
    title: string;
    battery: string;
    camera: string;
    display: string;
    memory: string;
    cpu: string;
    image: string;
    url: string;
    price: number;
}
