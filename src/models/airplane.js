import Vehicle from './vehicle';
import AirplaneEngine from './engine/airplaneEngine';

export default class Airplane extends Vehicle {
  constructor() {
    super();
    for (let i = 0; i < 16; i++) {
      const airplaneEngine = new AirplaneEngine();
      this.addEngine(airplaneEngine);
    }
  }
}
