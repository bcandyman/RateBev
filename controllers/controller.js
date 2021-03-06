module.exports = {
  async findAll(model, res, options) {
    try {
      res.json(await model.findAll(options));
    } catch (error) {
      res.status(500);
    }
  },
  async findOne(model, res, options) {
    try {
      res.json(await model.findOne(options));
    } catch (error) {
      res.status(500);
    }
  },
  async create(model, res, options) {
    try {
      res.status(200).json(await model.create(options));
    } catch (error) {
      res.status(500);
    }
  },
};
