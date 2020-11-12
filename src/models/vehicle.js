export default class Vehicle {
  constructor() {
    this.engines = [];
  }

  addEngine(engine) {
    this.engines.push(engine);
  }

  startAllEngines(){
    this.engines.forEach(engine => engine.turnOn())
  }

  stopAllEngines(){
    this.engines.forEach(engine => engine.turnOff())
  }

  areAllEnginesRunning() {
    return this.engines.reduce((accumulator, value, index) => {
      return value.isRunning && accumulator;
    }, true);
  }

  areAllEnginesStopped() {
    const runningEngines = [];
    for(let i = 0; i < this.engines.length; i++) {
      if (this.engines[i].isRunning === true) {
        runningEngines.push(this.engines[i]);
      } 
    }
    return runningEngines.length === 0;
  }

  isAnyEngineRunning() {
    // return this.engines.reduce((accumulator, value, index) => {
    //   return value.isRunning || accumulator;
    // }, false);
    const runningEngines = [];
    for(let i = 0; i < this.engines.length; i++) {
      if (this.engines[i].isRunning === true) {
        runningEngines.push(this.engines[i]);
      } 
    }
    return runningEngines.length > 0;
  }

  areAtLeastThisMuchEnginesRunning(count) {
    // const arr = [];
    // this.engines.reduce((accumulator, value, index) => {
    //   if (value.isRunning === true) {
    //     arr.push(value.isRunning);
    //   }
    //   return value.isRunning || accumulator;
    // }, false);
    // return count <= arr.length;
    return this.engines.filter(engine => engine.isRunning).length >= count;

  }

  getRunningEnginesCount() {
    return this.engines.filter(engine => engine.isRunning).length;
  }

  areAllEnginesRunningNew() {
    return this.getRunningEnginesCount() === this.getEnginesCount();
  }

  isNoiseLevelExceeded(maximumNoiseLevel) {
    // const arr = [];
    // this.engines.reduce((accumulator, value, index) => {
    //   if (value.isRunning === true) {
    //     arr.push(value.noiseLevel);
    //   }
    //   return value.isRunning || accumulator;
    // }, false);
    // let sum = arr.reduce((a, b) => {
    //   return a + b;
    // }, 0);
    // // console.log('Total noise level: ', sum);
    // return sum > maximumNoiseLevel;
    let sum = this.engines.filter(engine => engine.isRunning).reduce((accumulator, value, index) => {
      return value.noiseLevel + accumulator;
    }, 0);
    return sum > maximumNoiseLevel;
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

  getEnginesCount() {
    return this.engines.length;
  }
  
  ammountOfAirCraftEngines() {
    return this.engines.filter(engine => engine.type === "turbojet").length;
  }

  changeEngineNoiseLevel(index, value) {
    this.engines[index].noiseLevel = value;
  }

}