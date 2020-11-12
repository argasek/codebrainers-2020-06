class Car {
//    dodawanie pól klasy / konstruktor jest metodą danej klasy (metoda żyje w kontekscie klasy)
    constructor(color) {
        //tworzenie pól:
        this.speed = 0;
        this.maximumSpeed = 260;
        this.color = color;
    }

    showInformationAboutCar() {
        console.log('Information about ' + this.color + ' car');
        console.log('Speed: ', this.speed);
        console.log('Color: ', this.color);
    }

    accelerate (acceleration) {
        this.speed = this.speed + acceleration;
    }
    // ------------------ gettery i settery --------------------
    // taka metoda która tylko zwraca wartość pola jest nazywana getterem
    getSpeed() {
        return this.speed;
    }
    // taka metaoda która ustawia wartość pola jest nazywana setterem
    setSpeed(speed) {
        this.speed = speed;
    }
    // ---------------------------------------------------------
}

// function showCarSpeed(car, isMaximum) {
//     let speed;
//     if (isMaximum) {
//         speed = car.maximumSpeed;
//     } else {
//         speed = car.speed;
//     }
//     console.log('Car' + (isMaximum ? ' maximum ' : ' ') + 'speed is: ', speed);
// }
function showCarSpeed(car, speedField) {
    let speed = car[speedField];
    // albo speed = car.maximumSpeed;
    console.log('Car ' + (speedField) + ' is ', speed);
}

//tworzenie nowego obiektu klasy:

const redCar = new Car('red');
const greenCar = new Car('green');

greenCar.accelerate(10);

// nie mając pola someOtherSpeed możemy go "stworzyć": (ono sie dopisało do obiektu a nie do klasy)
// a obiektami są greenCar i redCar:

greenCar.someOtherSpeed = 777;

// -------------------------------

// sięganie do informacji:

// console.log(car.speed);
// console.log(car.color);

// greenCar.showInformationAboutCar();
// redCar.showInformationAboutCar();

// czy można usunąć jakies pole z obiektu ? -- można:

// delete greenCar.maximumSpeed;

// --------------------------------

showCarSpeed(greenCar, 'maximumSpeed');
showCarSpeed(greenCar, 'speed');
showCarSpeed(greenCar, 'someOtherSpeed');

// metoda object.keys:

console.log(Object.keys(greenCar));
delete greenCar.maximumSpeed;
console.log(Object.keys(greenCar));