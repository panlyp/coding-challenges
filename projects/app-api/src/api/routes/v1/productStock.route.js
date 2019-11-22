const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/productStock.controller');

const router = express.Router();

router
  .route('/')
  .get(controller.list)
  .post(controller.create);

router
  .route('/:productStockId')
  .patch(controller.update)
  .delete(controller.remove);

module.exports = router;
