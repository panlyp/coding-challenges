const httpStatus = require('http-status');

/**
 * Create new productStock
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const productStock = await PG.ProductStock.create(req.body);
    
    res.status(httpStatus.CREATED);
    res.json(productStock.transform());
  } catch (error) {
    next(error);
  }
};

/**
 * Get productStock list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const productStocks = await PG.ProductStock.list(req.query);
    const transformedproductStocks = productStocks.map(productStock => productStock.transform());
    res.json(transformedproductStocks);
  } catch (error) {
    next(error);
  }
};

/**
 * Update existing productStock
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    const { productStockId } = req.params;
    const updateParams = req.body;

    const [, updatedproductStock]= await PG.ProductStock.update(
      updateParams,
      {
        where: {
          id: productStockId,
        },
        returning: true,
      },
    );

    res.json(updatedproductStock[0].transform());
  } catch (error) {
    next(error);
  }
};

/**
 * Delete productStock
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    const { productStockId } = req.params;

    await PG.ProductStock.destroy({
      where: {
        id: productStockId
      },
    });

    res.status(httpStatus.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};
