import Engine from './engine';

export default class AirplaneEngine extends Engine {
  constructor() {
    super();
    this.type = "turbojet";
  }
}
