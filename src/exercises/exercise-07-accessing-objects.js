function accelerate() {
  console.log('Accelerating...');
}

class Car {
  constructor(color) {
    this.currentSpeed = 0;
    this.maximumSpeed = undefined;
    this.color = color;
    this.numberOfCalls = 0;
  }

  showInformationAboutCar() {
    console.log('Information about ' + this.color + ' car');
    // console.log('Speed: ', this.currentSpeed);
    // console.log('Color: ', this.color);
  }

  accelerate(acceleration) {
    this.numberOfCalls++;
    console.log('Calling accelerate() for ' + this.numberOfCalls + ' time');
    // If you remove this condition, this will cause Stack Overflow :D
    if (this.numberOfCalls < 100) {
      this.accelerate();
    }
    this.currentSpeed = this.currentSpeed + acceleration;
  }

  getSpeed() {
    return this.currentSpeed;
  }

  setSpeed(speed) {
    this.currentSpeed = speed;
  }

}

function showCarSpeed(car, speedField) {
  let speed = car[speedField];
  console.log('Car ' + speedField + ' is: ', speed);
}

const redCar = new Car('red');
const greenCar = new Car('green');



greenCar.accelerate(10);
greenCar.someOtherSpeed = 777;

greenCar.currentSpeed = greenCar.currentSpeed + 10;

greenCar.showInformationAboutCar();

console.log(Object.keys(greenCar));
delete greenCar.maximumSpeed;
console.log(Object.keys(greenCar));

showCarSpeed(greenCar, 'maximumSpeed');
showCarSpeed(greenCar, 'currentSpeed');
showCarSpeed(greenCar, 'someOtherSpeed');

redCar.showInformationAboutCar();
showCarSpeed(redCar, 'maximumSpeed');
showCarSpeed(redCar, 'currentSpeed');
showCarSpeed(redCar, 'someOtherSpeed');
