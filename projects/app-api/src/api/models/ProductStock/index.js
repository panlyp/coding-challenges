const Sequelize = require('sequelize');
const { isNil, omit, omitBy } = require('lodash');

const { DataTypes } = Sequelize;
const logger = require('../../../config/logger');
const seed = require('./seed');

class ProductStock extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // Original amount
        originalAmount: {
          type: DataTypes.DECIMAL,
          required: true,
        },
        // Remaining amount
        amount: {
          type: DataTypes.DECIMAL,
          required: true,
        },
        importedAt: {
          type: DataTypes.DATE,
          required: true,
        },
        expiredAt: {
          type: DataTypes.DATE,
          required: true,
        },
      },
      {
        sequelize,
        modelName: 'productStock',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Product);
  }

  static seed() {
    try {
      this.bulkCreate(seed);
    } catch (error) {
      throw error;
    }
  }

  static list({
    page = 1,
    perPage = 30,
  }) {
    try {
      return this.findAll({
        offset: perPage * (page - 1),
        limit: perPage,
        order: [['createdAt', 'DESC']],
      });
    } catch (error) {
      throw error;
    }
  }

  transform() {
    return omit(this.toJSON(), [
        'createdAt',
        'updatedAt',
    ]);
  }
}

module.exports = ProductStock;
