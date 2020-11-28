class Plant {
  constructor() {
    this.id = undefined;
    this.name = "";
  }

  fromPlain(item) {
    this.blooming = item.blooming;
    this.categoryId = item.category;
    this.categorySlug = item.category_slug;
    this.difficulty = item.difficulty;
    this.fertilizingInterval = item.fertilizing_interval;
    this.id = item.id;
    this.lastFertilized = item.last_fertilized;
    this.lastWatered = item.last_watered;
    this.name = item.name;
    this.requiredExposure = item.required_exposure;
    this.requiredHumidity = item.required_humidity;
    this.requiredTemperature = item.required_temperature;
    this.roomId = item.room;
    this.url = item.url;
    this.wateringInterval = item.watering_interval;
    return this;
  }
}

export default Plant;