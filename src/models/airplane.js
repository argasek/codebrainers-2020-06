import Vehicle from './vehicle';
import AirplaneEngine from './engine/airplaneEngine';

export default class Airplane extends Vehicle {
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
