import Car from './car';
import CarEngine from './engine/carEngine'

test('should have some engines running when started 1 engine', () => {
    const car = new Car();
    car.startEngine(0);
  
    const isAnyEngineRunning = car.isAnyEngineRunning();
  
    expect(isAnyEngineRunning).toBe(true);
  });
  

  test('should have all engines running when started 1 engine', () => {
    const car = new Car();
    car.startEngine(0);
  
    const isAnyEngineRunning = car.areAllEnginesRunning();
  
    expect(isAnyEngineRunning).toBe(true);
  });
  
  
  test('should confirm that engine is Car Engine', () =>{
    const car = new Car();
    const hasAirplaneMatchingEngines = car.engines[0] instanceof CarEngine 
    expect(hasAirplaneMatchingEngines ).toBe(true)
  })

  test('should deny that noise level is exceeded', () =>{
    const noiseLevel = 1000;
    const car = new Car();
    const isNoiseLevelExceeded = car.isNoiseLevelExceeded(noiseLevel);
    expect(isNoiseLevelExceeded).toBe(false)
  })

  test('should confirm that noise level is exceeded', () =>{
    const noiseLevel = 10;
    const car = new Car();
    car.startEngine(0)
    const isNoiseLevelExceeded = car.isNoiseLevelExceeded(noiseLevel);
    expect(isNoiseLevelExceeded).toBe(true)
  })

  test('should confirm that car has only one engine', () => {
    const car = new Car();
    expect(car.getEnginesCount()).toBe(1);
  })