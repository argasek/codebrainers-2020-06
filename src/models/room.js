class Room {

  constructor() {
    this.id = undefined;
    this.name = '';
  }

  fromPlain (item) {
    this.id = item.id;
    this.name = item.name;
    return this;
  }

}

export default Room;