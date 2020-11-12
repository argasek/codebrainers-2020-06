import Car from "./car";
import Airplane from './airplane';

test('should confirm that car engine can be turned on and off', () =>{
    const car = new Car();

    car.startEngine(0);
    expect(car.areAllEnginesRunning()).toBe(true);

    car.stopEngine(0);
    expect(car.areAllEnginesRunning()).toBe(false);
});

test('should deny that at least 3 engines are running when just 1 was started', () => {
    const car = new Car();
    const expectedEnginesCount = 3;
  
    car.startEngine(0);
    expect(car.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)).toBe(false);
});

test('should confirm that 1 engine is running when all were started', () => {
    const car = new Car();
    const expectedEnginesCount = 1;
  
    car.startAllEngines();
    expect(car.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)).toBe(true);
});

test('should confirm that engine is a diesel engine', () => {
    const car = new Car();
    const dieselEngine = car.isThisADieselEngine();
  
    expect(dieselEngine).toBe(true);
});

test('should confirm that car engine noise level can be changed', () => {
    const car = new Car();
    const newNoiseLevelOfTheEngine = 45;
    const differentNewNoiseLevelOfTheEngine = 33;
  
    car.changeEngineNoiseLevel(0, newNoiseLevelOfTheEngine);
    expect((car.engines[0].noiseLevel === newNoiseLevelOfTheEngine)).toBe(true);

    car.changeEngineNoiseLevel(0, differentNewNoiseLevelOfTheEngine);
    expect((car.engines[0].noiseLevel === differentNewNoiseLevelOfTheEngine)).toBe(true);
});

test('should confirm that car engine noise can exceed a set noise value', () => {
    const car = new Car();
    const noiseLevelOfTheEngine = 55;
    const maximumNoiseLevel = 50;

    car.startEngine(0)
    car.changeEngineNoiseLevel(0, noiseLevelOfTheEngine);
    expect(car.isNoiseLevelExceeded(maximumNoiseLevel)).toBe(true);
});

test('should confirm that ammount of car engines is one', () => {
    const car = new Car();

    expect(car.getEnginesCount() === 1).toBe(true);
});

test('should confirm that car has less engines than airplane', () => {
    const car = new Car();
    const airplane = new Airplane();

    expect(car.getEnginesCount() < airplane.getEnginesCount()).toBe(true);
});

