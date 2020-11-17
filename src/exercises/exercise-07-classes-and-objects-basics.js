class Car {
  constructor(color) {
    this.currentSpeed = 0;
    this.color = color;
  }

  showInformationAboutCar() {
    console.log('Information about ' + this.color + ' car');
    console.log('Speed: ', this.currentSpeed);
    console.log('Color: ', this.color);
  }

  accelerate(acceleration) {
    this.currentSpeed = this.currentSpeed + acceleration;
  }

  getSpeed() {
    return this.currentSpeed;
  }

  setSpeed(speed) {
    this.currentSpeed = speed;
  }

}

const redCar = new Car('red');

const greenCar = new Car('green');

redCar.showInformationAboutCar();

greenCar.accelerate(10);

greenCar.speed = greenCar.speed + 20;
greenCar.currentSpeed = greenCar.currentSpeed + 10;

greenCar.showInformationAboutCar();

