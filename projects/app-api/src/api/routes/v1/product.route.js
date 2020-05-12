const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/product.controller');

const router = express.Router();

const validation = require("../../validations/product.validation");

router.route('/')
  .get(validate(validation.listProduct), controller.list)
  .post(validate(validation.createProduct), controller.create)

router
  .route('/:productId')
  .patch(validate(validation.updateProduct), controller.update)
  .delete(validate(validation.removeProduct), controller.remove)

module.exports = router;
