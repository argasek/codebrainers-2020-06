class Plant {
  blooming = false;
  categoryId = undefined;
  categorySlug = '';
  difficulty = 1;
  fertilizingInterval = undefined;
  id = undefined;
  lastFertilized = undefined;
  lastWatered = undefined;
  name = '';
  requiredExposure = '';
  requiredHumidity = '';
  requiredTemperature = '';
  room = undefined;
  url = '';
  wateringInterval = undefined;

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
    this.room = item.room;
    this.url = item.url;
    this.wateringInterval = item.watering_interval;
  }

}

export default Plant;