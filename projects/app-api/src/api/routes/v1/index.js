const express = require('express');
const productRoutes = require('./product.route');
const productStockRoutes = require('./productStock.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/product', productRoutes);
router.use('/productStock', productStockRoutes);

module.exports = router;
