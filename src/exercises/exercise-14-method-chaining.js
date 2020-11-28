// Pattern:
// Method chain(-ing)

class Car {

  turnOnEngine() {
    this.engineRuns = true;
    return this;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  turnOffEngine() {
    this.engineRuns = false;
    return this;
  }

}

const car = new Car();


car.turnOnEngine();
car.accelerate();
car.turnOffEngine();



car.turnOnEngine().accelerate().turnOffEngine()