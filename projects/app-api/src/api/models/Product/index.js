const Sequelize = require('sequelize');
const httpStatus = require('http-status');
const { isNil, omit, omitBy } = require('lodash');

const { DataTypes } = Sequelize;
const logger = require('../../../config/logger');
const APIError = require('../../utils/APIError');
const seed = require('./seed');

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        sweetiness: {
          type: DataTypes.STRING,
        },
        color: {
          type: DataTypes.STRING,
        },
        isAvailable: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'product',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.ProductStock);
  }

  static async get(id) {
    try {
      const product = await this.findOne(id);

      if (product) {
        return product;
      }

      throw new APIError({
        message: 'Product does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  }

  static list({
    page = 1,
    perPage = 30,
    productId,
  }) {
    try {
      const where = omitBy(productId, isNil);

      return this.findAll({
        where: {
          ...where,
        },
        include: PG.ProductStock,
        offset: perPage * (page - 1),
        limit: perPage,
        order: [['createdAt', 'DESC']],
      });
    } catch (error) {
      throw error;
    }
  }

  static seed() {
    try {
      this.bulkCreate(seed);
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  transform() {
    try {
      return omit(this.toJSON(), [
        'createdAt',
        'updatedAt',
      ]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Product;
