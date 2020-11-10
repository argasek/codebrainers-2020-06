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
      return this.engines.filter(single_engine => single_engine.isRunning).length === this.engines.length;
    }
    areAllEnginesStopped() {
        return this.engines.reduce((accumulutaor, value, index) =>{
            return !value.isRunning && accumulutaor
        }, true)
    }
    isAnyEngineRunning(){
        return this.engines.reduce((accumulutaor, value, index) =>{
            return value.isRunning || accumulutaor
        }, false)
    }
    areAtLeastThisMuchEnginesRunning(count) {
        return this.engines.reduce((accumulutaor, value, index) =>{
            if (value.isRunning){
                return ++accumulutaor;
            }
            else {
                return accumulutaor
            }
        }, 0) >= count
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

// const car = new Car();
const airplane = new Airplane();
// console.log(`Are at least 3 engine runing? (none is on) ${airplane.areAtLeastThisMuchEnginesRunning(3)}`);
// console.log(`Is any engine running? None is turn on - ${airplane.isAnyEngineRunning()}`)
airplane.startEngine(0);
airplane.startEngine(3);
// console.log(`Are at least 3 engine runing? (Two are on) ${airplane.areAtLeastThisMuchEnginesRunning(3)}`);
// // // console.log(car);
// airplane.startEngine(0);
// console.log(`Is any engine running? One is turn on - ${airplane.isAnyEngineRunning()}`)
airplane.startEngine(1);
// console.log(`Are at least 3 engine runing? (Three are on) ${airplane.areAtLeastThisMuchEnginesRunning(3)}`);
airplane.startEngine(2);
// console.log(`Are at least 3 engine runing? (Four are on) ${airplane.areAtLeastThisMuchEnginesRunning(3)}`);
// airplane.startEngine(3);
// console.log(`Is any engine running? All are turn on - ${airplane.isAnyEngineRunning()}`)

let resultRunning = airplane.areAllEnginesRunning();
console.log("Are all engines running? (4 are running)", resultRunning);
airplane.stopEngine(0);
resultRunning = airplane.areAllEnginesRunning();
console.log("Are all engines running? (3 are running) ", resultRunning);
// console.log(`Are at least 3 engine runing? (Three are on) ${airplane.areAtLeastThisMuchEnginesRunning(3)}`);
// airplane.stopEngine(2);
// console.log(`Are at least 3 engine runing? (Two are on) ${airplane.areAtLeastThisMuchEnginesRunning(3)}`);
// // let resultStopped = airplane.areAllEnginesStopped();
// // console.log("Are all engines stopped? (Only one stopped)",resultStopped);
// airplane.stopEngine(1);
// console.log(`Is any engine running? Two are stopped - ${airplane.isAnyEngineRunning()}`)
// airplane.stopEngine(2);
// airplane.stopEngine(3);
// // resultStopped = airplane.areAllEnginesStopped();
// // console.log("Are all engines stopped? (Allstopped)",resultStopped);
// console.log(`Is any engine running? All are stopped - ${airplane.isAnyEngineRunning()}`)
