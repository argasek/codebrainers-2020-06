import Vehicle from './vehicle';
import CarEngine from './engine/carEngine';

export default class Car extends Vehicle {
  constructor() {
    super();
    const carEngine = new CarEngine();
    this.addEngine(carEngine);
  }
}

