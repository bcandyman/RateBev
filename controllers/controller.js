module.exports = {
	findAll: async (model, options) => await model.findAll(options),

	findOne: async (model, options) => await model.findOne(options),

	create: async (model, options) => await model.create(options),
};
