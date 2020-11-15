export default class Vehicle {
  constructor() {
    this.engines = [];
  }

  addEngine(engine) {
    this.engines.push(engine);
  }

  startAllEngines(){
    this.engines.forEach(engine => engine.turnOn());
  }

  stopAllEngines(){
    this.engines.forEach(engine => engine.turnOff());
  }

  areAllEnginesRunning() {
    return this.engines.reduce((accumulator, value, index) => {
      return value.isRunning && accumulator;
    }, true);
  }

  // question!!
  areAllEnginesStopped() {
    return this.engines.reduce((accumulator, value, index) => {
      return value.isRunning === false && accumulator;
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

  getRunningEnginesCount() {
    return this.engines.filter(engine => engine.isRunning).length;
  }

  areAllEnginesRunningNew() {
    return this.getRunningEnginesCount() === this.getEnginesCount();
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

  // set noise level for selected enignes or all
  // and check the noise value for random engines:

  setEngineNoiseLevel(index, value) {
    return this.engines[index].noiseLevel = value;
  }

  setAllEnginesNoiseLevel(value) {
    this.engines.forEach(engine => engine.noiseLevel = value);
  }

  getEngineNoiseLevelValue() {
    const noiseLevelArray = this.engines.map(el => el.noiseLevel);
    return noiseLevelArray[Math.floor(Math.random() * noiseLevelArray.length)];
  }

}