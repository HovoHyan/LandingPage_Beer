const { readLocations } = require("../middleware/readFile");
const fs = require("fs").promises;
const path = require("path");

class LocationsServices {
  async getAllLocations() {
    const locations = await readLocations();
    return locations;
  }
  async getAdmin() {
    const locations = await readUsers();
    return locations;
  }
  async createLocation(body) {
    const locations = await readLocations();
    const { name, region, latitude, longitude, products } = body;

    const finded = locations.find(
      (l) => l.latitude === latitude && l.longitude === longitude
    );
    if (finded) {
      return { msg: "Location is already used!!" };
    }
    const newLocation = {
      id: new Date().getTime().toString(),
      name: name,
      region: region,
      latitude: latitude,
      longitude: longitude,
      products: products
    };
    locations.push(newLocation);
    fs.writeFile(
      path.join(__dirname, "..", "db", "locations.json"),
      JSON.stringify(locations)
    );
  }
}

module.exports = LocationsServices;
