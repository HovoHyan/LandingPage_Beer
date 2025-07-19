class LocationsController {
  async getAllLocations(req, res, next) {
    const locations = await req.app.locals.services.locations.getAllLocations();
    res.status(200).json(locations);
  }
  async getAdmin(req, res, next) {
    const locations = await req.app.locals.services.locations.getAllLocations();
    res.send("ok");
  }
  async createLocation(req, res, next) {
    try {
      const body = req.body;
      if (!body) {
        return res.status(400).json({ message: "Bce поля обязательны" });
      }
      const newLocation =
        await req.app.locals.services.locations.createLocation(body);
      res.status(201).json(newLocation);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LocationsController;
