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
      return !(value.isRunning) && accumulator;
    }, true);

  }

  isAnyEngineRunning() {
  return !(this.areAllEnginesStopped())
  }

  areAtLeastThisMuchEnginesRunning(count) {
    const runingEngines = this.engines.filter((engine => engine.isRunning))
    return count <= runingEngines.length;
  }

  getRunningEnginesCount() {
    return this.engines.filter(engine => engine.isRunning).length;
  }

  areAllEnginesRunningNew() {
    return this.getRunningEnginesCount() === this.getEnginesCount();
  }

  isNoiseLevelExceeded(maximumNoiseLevel) {
    const actualNoiseLEvel = this.engines.reduce((accumulator, value, index) => {
      if (value.isRunning === true) {
        return accumulator + value.noiseLevel;
      }
      return accumulator;
    }, 0);
    return actualNoiseLEvel > maximumNoiseLevel;
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
}