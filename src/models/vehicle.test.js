import Airplane from './airplane';
import Car from "./car";
import AirplaneEngine from "./engine/airplaneEngine";
test('should not have any engines running when no engines were started', () =>{
    const airplane = new Airplane();
    const car = new Car();
    const isAnyAirplaneEngineRunning = airplane.isAnyEngineRunning();
    const isAnyCarEngineRunning = car.isAnyEngineRunning();
    // console.log(isAnyEngineRunning);
    expect(isAnyAirplaneEngineRunning && isAnyCarEngineRunning).toBe(false);
});

test('should confirm that all engines are running', () => {
  const airplane = new Airplane();
  const car = new Car();
  car.startAllEngines();
  airplane.startAllEngines();
  // console.log(airplane);
  expect(airplane.areAllEnginesRunningNew() && car.areAllEnginesRunning()).toBe(true);
});

test('should confirm that installed engine is car engine ', () => {
  const car = new Car();
  const enginesArray = car.engines;
  const enginesArray2 = enginesArray.map(el => el.type);
  const enginesArray3 = enginesArray2.filter(el => el === 'diesel');

  expect(enginesArray3.length === enginesArray2.length).toBe(true);
});

test('should confirm that noise level for car engine is set manually by user', () => {
  const car = new Car();
  car.startAllEngines();
  const setEngineNoiseLevelValue = 99;
  car.setEngineNoiseLevel(0, setEngineNoiseLevelValue);

  expect(car.engines[0].noiseLevel === setEngineNoiseLevelValue).toBe(true);
});

test ('should confirm that all of engines are stopped', () => {
   const airplane = new Airplane();
   const car = new Car();

   car.startAllEngines();
   car.stopAllEngines();

   airplane.startAllEngines();
   airplane.stopAllEngines();

   expect(airplane.areAllEnginesStopped() && car.areAllEnginesStopped()).toBe(true);

});

test ('should deny that sum of noise level of all engines is exceeded', () => {
  const airplane = new Airplane();
  const car = new Car();
  const maximumNoiseLevel = 1000;
  airplane.startAllEngines();
  car.startAllEngines();

  expect(airplane.isNoiseLevelExceeded(maximumNoiseLevel) && car.isNoiseLevelExceeded(maximumNoiseLevel)).toBe(false);
});