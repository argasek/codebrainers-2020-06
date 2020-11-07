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
class AirplaneEngine extends Engine {
    constructor(){
        super();
        this.type = "airplaneEngine";
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
