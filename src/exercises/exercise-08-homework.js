 class Engine {
    constructor() {
        this.isRunning = false;
        this.isStopped = true;
        this.type = undefined;
    }

    turnOn() {
        this.isRunning = true;
        this.isStopped = false;
    }

    turnOff() {
        this.isRunning = false;
        this.isStopped = true;
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
        return value.isRunning && accumulator;
      }, true);
    }

    areAllEnginesStopped() {
        return this.engines.reduce((accumulator, value, index) => {
            return value.isStopped && accumulator;
        }, true);
    }

    isAnyEngineRunning() {
        return this.engines.reduce((accumulator, value, index) => {
            return value.isRunning || accumulator;
        }, false);
    }

    areAtLeastThisMuchEnginesRunning(count) {
        const arr = [];
        this.engines.reduce((accumulator, value, index) => {
            if (value.isRunning === true) {
                arr.push(value.isRunning);
            }
            return value.isRunning || accumulator;
        }, false);
        return count <= arr.length;
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
    stopEngine(index) {
        const engine = this.engines[index];
        engine.turnOff();
    }
}

const car = new Car();
const airplane = new Airplane();
airplane.startEngine(0);
// airplane.startEngine(1);
// airplane.startEngine(2);
// airplane.startEngine(3);
 airplane.stopEngine(0)
// console.log(car);
// const result = airplane.areAllEnginesRunning();
// console.log("Are all engines running? ", result);
const result = airplane.areAllEnginesStopped();
console.log("Are all engines stopped? ", result);


