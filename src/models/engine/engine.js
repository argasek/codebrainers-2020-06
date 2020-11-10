export default class Engine {
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
