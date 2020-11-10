class Engine {
    constructor() {
        this.isRunning = false;
        this.isStopped = true;
        this.type = undefined;

        function getRandomNoiseLevel() {
            return Math.floor(Math.random() * 41) + 20;
        }

        this.noiseLevel = getRandomNoiseLevel();
        // console.log('Building engine with noise level of ' + this.noiseLevel + ' dB');
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

    areAllEnginesRunningNew() {
        let workingEngineFilter = this.engines.filter(function(engine) {
            return engine.isRunning == true;
           });
        return workingEngineFilter.length == 4;
      }

    isNoiseLevelExceeded(maximumNoiseLevel) {
        const arr = [];
        this.engines.reduce((accumulator, value, index) => {
            if (value.isRunning === true) {
                arr.push(value.noiseLevel);
            }
            return value.isRunning || accumulator;
          }, false);
        let sum = arr.reduce((a, b) => {
            return a + b;
        }, 0);
        // console.log('Total noise level: ', sum);
        return sum > maximumNoiseLevel;
    }

}

class Car extends Vehicle {
    constructor() {
        super();
        const carEngine = new CarEngine();
        this.addEngine(carEngine);
    }
}

export class Airplane extends Vehicle {
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
        // console.log(`Started engine ${index}`);
    }
    stopEngine(index) {
        const engine = this.engines[index];
        engine.turnOff();
        // console.log(`Stopped engine ${index}`);
    }
}







