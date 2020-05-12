const Joi = require('joi');

module.exports = {

  // GET /v1/ProductStocks
  listProductStock: {
    body: {
      productId: Joi.string(), // int4 in db?
      originalAmount: Joi.number().min(0),
      amount: Joi.number().min(0),
      importedAt: Joi.date(),
      expiredAt: Joi.date(),
    },
  },

  // POST /v1/ProductStocks
  createProductStock: {
    body: {
      productId: Joi.string().required(), // int4 in db?
      originalAmount: Joi.number().min(0).required(),
      amount: Joi.number().min(0).required(),
      importedAt: Joi.date().required(),
      expiredAt: Joi.date(),
    },
  },

  // PATCH /v1/ProductStocks/:ProductStockId
  updateProductStock: {
    body: {
      originalAmount: Joi.number().min(0),
      amount: Joi.number().min(0),
      importedAt: Joi.date(),
      expiredAt: Joi.date(),
    },
    params: {
      productId: Joi.string().required(), // int4 in db?
    },
  },

  // DELETE /v1/ProductStocks/:ProductStockId
  removeProductStock: {
    params: {
      productId: Joi.string().required(), // int4 in db?
    },
  },
};
