import Engine from './engine'

test('should confirm that noise level is set to expected value', () =>
{   
    const expectedNoiseLevel = 20; 
    const engine = new Engine();
    engine.setNoiseLevel(expectedNoiseLevel);
    expect(engine.noiseLevel).toBe(20);
})


test('should engine be turned off on when is createad', () =>
{
    const engine = new Engine();
    expect(engine.isRunning).toBe(false);
})
test('should engine be turned on on when started ', () =>
{
    const engine = new Engine();
    engine.turnOn();
    expect(engine.isRunning).toBe(true);
})
test('should engine be turned off when started and then turned off', () =>
{
    const engine = new Engine();
    engine.turnOn();
    engine.turnOff();
    expect(engine.isRunning).toBe(false);
})