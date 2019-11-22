const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/product.controller');

const router = express.Router();

router.route('/')
  .get(controller.list)
  .post(controller.create);

router
  .route('/:productId')
  .patch(controller.update)
  .delete(controller.remove);

module.exports = router;
