import Airplane from './models/airplane';
// import Car from './models/car';
// import CarEngine from './models/engine/carEngine';

let airplane;

airplane = new Airplane();


console.log('----------------');

console.log("Is noise level exceeded? ", airplane.isNoiseLevelExceeded(90));

airplane.startEngine(0);
airplane.startEngine(1);
airplane.startEngine(3);

console.log("Are all engines running?", airplane.areAllEnginesRunning());
console.log("Are all engines running? (filter)", airplane.areAllEnginesRunningNew());
console.log("Are all engines stopped?", airplane.areAllEnginesStopped());
console.log("Is any engine running? ", airplane.isAnyEngineRunning());
console.log("Is noise level exceeded? ", airplane.isNoiseLevelExceeded(90));

console.log('----------------');
airplane.startEngine(2);

console.log("Are all engines running?", airplane.areAllEnginesRunning());
console.log("Are all engines running? (filter)", airplane.areAllEnginesRunningNew());
console.log("Are all engines stopped?", airplane.areAllEnginesStopped());
console.log("Is any engine running? ", airplane.isAnyEngineRunning());
console.log("Is noise level exceeded? ", airplane.isNoiseLevelExceeded(90));

console.log('----------------');
airplane.stopEngine(2);
airplane.stopEngine(1);
airplane.stopEngine(0);
airplane.stopEngine(3);

console.log("Are all engines running?", airplane.areAllEnginesRunning());
console.log("Are all engines running? (filter)", airplane.areAllEnginesRunningNew());
console.log("Are all engines stopped?", airplane.areAllEnginesStopped());
console.log("Is any engine running? ", airplane.isAnyEngineRunning());
console.log("Is noise level exceeded? ", airplane.isNoiseLevelExceeded(90));



let expectedEnginesCount;

console.log('---------------- Creating new Airplane()...');

airplane = new Airplane();
expectedEnginesCount = 2;


airplane.startEngine(3);
console.log(`Are at least this much (${expectedEnginesCount} engines running? `,
  airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)
);
console.log("Is noise level exceeded? ", airplane.isNoiseLevelExceeded(90));

console.log('----------------');

airplane.startEngine(1);
console.log(`Are at least this much (${expectedEnginesCount} engines running? `,
  airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)
);
console.log("Is noise level exceeded? ", airplane.isNoiseLevelExceeded(90));

airplane.startEngine(0);
console.log(`Are at least this much (${expectedEnginesCount} engines running? `,
  airplane.areAtLeastThisMuchEnginesRunning(expectedEnginesCount)
);
console.log("Is noise level exceeded? ", airplane.isNoiseLevelExceeded(90));
