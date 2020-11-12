 class Lock {
  constructor() {
    this.isLocked = false;
  }
}

class Door {
  constructor() {
    this.doorLock = new Lock();
    this.type = undefined;
  }

  lock() {
    this.doorLock.isLocked = true;
  }

  unlock() {
    this.doorLock.isLocked = false;
  }

  isLocked() {
    return this.doorLock.isLocked;
  }
}

class MovingDoor extends Door {

  constructor() {
    super();
    this.position = 'closed';
  }

  open() {
    this.unlock();
    this.position = 'opened';
  }

}

class MovingDoorWithAdditionalLock extends MovingDoor {

  constructor() {
    super();
    this.position = 'closed';
    this.additionalLock = new Lock();
    this.additionalLock.isLocked = true;
  }

  open() {
    super.open();
    this.additionalLock.isLocked = false;
  }

}



const door = new Door();

door.lock();

console.log(door);
