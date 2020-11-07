class Engine {
    constructor() {
        this.isRunning = false;
        this.type = undefined;
    }

    turnOn() {
        this.isRunning = true;
    }

    turnOff() {
        this.isRunning = false;
    }
}


class CarEngine extends Engine {
    constructor() {
        super();
        this.type = "diesel";
    }
}


class AirplaneEngine extends Engine {
    constructor() {
        super();
        this.type = "turbojet";
    }
}


class Vehicle {
    constructor() {
        this.engines = [];
    }

    addEngine(engine) {
        this.engines.push(engine);
    }

    startAllEngines(){
        this.engines.forEach(engine => engine.turnOn())
    }

    areAllEnginesRunning() {
      return this.engines.reduce((accumulator, value, index) => {
        console.log('index: ', index)
        console.log(accumulator);
        console.log(value);
        return value.isRunning && accumulator;
      },true) 
    }

}

class Car extends Vehicle {
    constructor() {
        super();
        const carEngine = new CarEngine();
        this.addEngine(carEngine);
    }
}

class Airplane extends Vehicle {
    constructor() {
        super();
        for (let i = 0; i < 4; i++) {
            const airplaneEngine = new AirplaneEngine();
            this.addEngine(airplaneEngine);
        }
    }
    startEngine(index) {
        const engine = this.engines[index];
        engine.turnOn();
    }
}

const car = new Car();
const airplane = new Airplane();
airplane.startEngine(0);
airplane.startEngine(1);
airplane.startEngine(2);
airplane.startEngine(3);
// console.log(car);
const result = airplane.areAllEnginesRunning();
console.log("Are all engines running? ", result);

