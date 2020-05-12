const Joi = require('joi');

module.exports = {

  // GET /v1/products
  listProduct: {
    body: {
      name: Joi.string(),
      sweetiness: Joi.number().integer().min(1).max(10),
      isAvailable: Joi.boolean(),
      color: Joi.string(),
    },
  },

  // POST /v1/products
  createProduct: {
    body: {
      name: Joi.string().required(),
      sweetiness: Joi.number().integer().min(1).max(10),
      isAvailable: Joi.boolean().required(),
      color: Joi.string(),
    },
  },

  // PATCH /v1/products/:productId
  updateProduct: { // Update any field
    body: {
      name: Joi.string(),
      sweetiness: Joi.number().integer().min(1).max(10),
      isAvailable: Joi.boolean(),
      color: Joi.string(),
    },
    params: {
      productId: Joi.number().integer().required()
    },
  },

  // DELETE /v1/products/:productId
  removeProduct: {
    params: {
      productId: Joi.number().integer().required()
    },
  },
};
