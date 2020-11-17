import Airplane from './airplane';
import Car from "./car";
import AirplaneEngine from "./engine/airplaneEngine";

test('should have some engines running when started 1 engine', () => {
  const airplane = new Airplane();
  airplane.startEngine(1);

  const isAnyEngineRunning = airplane.isAnyEngineRunning();
  // console.log(isAnyEngineRunning);
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

test('should confirm that stopping 3 engines preserves other engines as running', () => {
  const airplane = new Airplane();
  const allEnginesCount = airplane.getEnginesCount();
  const stoppedEnginesCount = allEnginesCount - airplane.getRunningEnginesCount();
  airplane.startAllEngines();
  airplane.stopEngine(0);
  airplane.stopEngine(2);
  airplane.stopEngine(3);
  // console.log(airplane);
  expect(airplane.areAtLeastThisMuchEnginesRunning(allEnginesCount - stoppedEnginesCount)).toBe(true);

});

test('should confirm that all of installed engines are aircraft engines ', () => {
  const airplane = new Airplane();
  const enginesArray = airplane.engines;
  const enginesArray2 = enginesArray.map(el => el.type);
  // enginesArray2.push("diesel");
  const enginesArray3 = enginesArray2.filter(el => el === 'turbojet');

  // console.log(enginesArray2);
  expect(enginesArray3.length === enginesArray2.length).toBe(true);

});

test('should confirm that installed engine is car engine ', () => {
  const car = new Car();
  const enginesArray = car.engines;
  const enginesArray2 = enginesArray.map(el => el.type);
  const enginesArray3 = enginesArray2.filter(el => el === 'diesel');

  expect(enginesArray3.length === enginesArray2.length).toBe(true);
});

test('should confirm that noise level for selected engines are set manually by user', () => {
  const airplane = new Airplane();
  airplane.startAllEngines();
  const setEngineNoiseLevelValue = 99;
  airplane.setEngineNoiseLevel(0, setEngineNoiseLevelValue);
  airplane.setEngineNoiseLevel(1, setEngineNoiseLevelValue);

  // console.log(airplane);
  expect(airplane.engines[0].noiseLevel === setEngineNoiseLevelValue && airplane.engines[1].noiseLevel === setEngineNoiseLevelValue).toBe(true);
});

test('should confirm that noise level for all of engines are set manually by user', () => {
  const airplane = new Airplane();
  airplane.startAllEngines();
  const setEngineNoiseLevelValue = 99;
  airplane.setAllEnginesNoiseLevel(setEngineNoiseLevelValue);

  // console.log(airplane);
  // console.log(airplane.getEngineNoiseLevelValue());
  expect(airplane.getEngineNoiseLevelValue() === setEngineNoiseLevelValue).toBe(true);
});
