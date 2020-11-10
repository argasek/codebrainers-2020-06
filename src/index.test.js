class Engine {
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


class AirplaneEngine extends Engine {
  constructor() {
    super();
    this.type = "turbojet";
  }
}


class Vehicle {
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

class Airplane extends Vehicle {
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


test('should have some engines running when started 1 engine', () => {
  const airplane = new Airplane();
  airplane.startEngine(0);

  const isAnyEngineRunning = airplane.isAnyEngineRunning();

  expect(isAnyEngineRunning).toBe(true);
});


test('should deny that at least 2 engines are running when just 1 was started', () => {
  const airplane = new Airplane();
  const expectedEnginesCount = 2;

  airplane.startEngine(3);
  expect(airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)).toBe(false);

});

test('should deny that at least 3 engines are running when just 2 were started', () => {
  const airplane = new Airplane();
  const expectedEnginesCount = 3;

  airplane.startEngine(0);
  airplane.startEngine(1);
  expect(airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)).toBe(false);

});

test('should confirm that at least 2 engines are running when 2 were started', () => {
  const airplane = new Airplane();
  const expectedEnginesCount = 2;

  airplane.startEngine(2);
  airplane.startEngine(3);
  expect(airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)).toBe(true);

});

test('should confirm that at least 2 engines are running when all were started', () => {
  const airplane = new Airplane();
  const expectedEnginesCount = 2;

  airplane.startAllEngines();
  expect(airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)).toBe(true);

});

test('should deny that at least 2 engines are running when all were started, then 3 stopped', () => {
  const airplane = new Airplane();
  const expectedEnginesCount = 2;

  airplane.startAllEngines();
  airplane.stopEngine(0);
  airplane.stopEngine(2);
  airplane.stopEngine(3);
  expect(airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)).toBe(false);

});
