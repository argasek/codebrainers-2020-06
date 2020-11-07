// POJO
const emptyObject = {};

// POJO, verbose
const anotherEmptyObject = new Object();

// POJO with properties
const pojo = {
  width: 183,
  height: undefined,
  name: 'Samsung TV'
};

// console.log(emptyObject);
// console.log(anotherEmptyObject);
// console.log(pojo);

class Car {
  constructor(color) {
    console.log('Car constructor');
    this.numberOfWheels = 4;
    this.color = color;
    this.engineType = undefined;
    console.log(this);
  }
}

class TeslaCar extends Car {
  constructor(color) {
    super(color);
    console.log('TeslaCar constructor');
    this.engineType = 'electric';
    console.log(this);
  }
}

class RedTeslaCar extends TeslaCar {
  constructor() {
    super('red');
  }
}



// const car = new TeslaCar('black');
// console.log(car instanceof Object);

const yetAnotherEmptyObject = Object.create(null);

console.log(yetAnotherEmptyObject instanceof Object);
