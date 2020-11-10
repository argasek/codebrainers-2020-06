import Airplane from './models/airplane';

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
