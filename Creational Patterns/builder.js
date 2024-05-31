class Car {
    constructor() {
        this.engine = '';
        this.color = '';
        this.gps = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }
    setEngine() {
        this.engine = engine;
        return this
    }
    setColor(color) {
        this.car.color = color;
        return this;
    }

    setGPS(gps) {
        this.car.gps = gps;
        return this;
    }

    build() {
        return this.car;
    }
}

const carBuilder = new CarBuilder()
const car =carBuilder.CarBuilder.setEngine('V8').setColor('Red').setGPS(true).build();
console.log(car); 