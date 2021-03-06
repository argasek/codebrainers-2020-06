import Airplane from './airplane';
import AirplaneEngine from './engine/airplaneEngine';
test('should not have any engines running when no engines were started', () =>{
    const airplane = new Airplane();
    const isAnyEngineRunning = airplane.isAnyEngineRunning();
    expect(isAnyEngineRunning).toBe(false);
});


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

test('should confirm that stopping 3 engines preserves other engines as running', () => {
  const airplane = new Airplane();
  const allEnginesCount = airplane.getEnginesCount();
  const stoppedEnginesCount = allEnginesCount - airplane.getRunningEnginesCount();
  airplane.startAllEngines();
  airplane.stopEngine(0);
  airplane.stopEngine(2);
  airplane.stopEngine(3);
  expect(airplane.areAtLeastThisMuchEnginesRunning(allEnginesCount - stoppedEnginesCount)).toBe(true);

});

test('should confirm that all engines are running', () => {
  const airplane = new Airplane();
  
  airplane.startAllEngines();
  expect(airplane.areAllEnginesRunningNew()).toBe(true);
}) 

test('should confirm that all engines are airplane Engines', () =>{
  const airplane = new Airplane();
  const hasAirplaneMatchingEngines = airplane.engines.reduce(
    (acc, currvalue) => acc && currvalue instanceof AirplaneEngine, true)
  expect(hasAirplaneMatchingEngines ).toBe(true)
})