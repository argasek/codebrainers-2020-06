export default class Engine {
  constructor() {
    this.isRunning = false;
    this.isStopped = true;
    this.type = undefined;
    this.noiseLevel = 0;
    // console.log('Building engine with noise level of ' + this.noiseLevel + ' dB');
  }

  getRandomNoiseLevel() {
    return Math.floor(Math.random() * 41) + 20;
  }

  turnOn() {
    this.isRunning = true;
    this.isStopped = false;
    this.noiseLevel = this.getRandomNoiseLevel();
  }

  turnOff() {
    this.isRunning = false;
    this.isStopped = true;
  }
}
