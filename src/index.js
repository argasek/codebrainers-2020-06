class Engine {
    constructor (){
        this.isRunning = false;
        this.type = undefined;
    }
    turnOn (){
        this.isRunning = true;
    }
    turnOff (){
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
    constructor(){
        super();
        this.type = "turbojet";
    }
}


class Vehicle {
    constructor(){
        this.engines = [];

}
    addEngine (engine) {
        this.engines.push(engine);
    }

}


class Car extends Vehicle {
  constructor() {
    super();
    const carEngine = new CarEngine();
    this.addEngine(carEngine);
  }
}

const car = new Car();

console.log(car);