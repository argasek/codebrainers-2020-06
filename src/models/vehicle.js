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