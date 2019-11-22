const { Sequelize } = require('sequelize');
const { Op } = Sequelize;

const { debug, postgres } = require('./vars');
const logger = require('./logger');

const pgModels = require('../api/models');

const connect = () =>
  new Sequelize(postgres.database, postgres.username, postgres.password, {
    host: 'localhost',
    dialect: 'postgres',
    logging: debug ? msg => logger.debug(msg) : false,
    operatorAlias: {
      $eq: Op.eq,
      $ne: Op.ne,
      $gte: Op.gte,
      $gt: Op.gt,
      $lte: Op.lte,
      $lt: Op.lt,
      $not: Op.not,
      $in: Op.in,
      $notIn: Op.notIn,
      $is: Op.is,
      $like: Op.like,
      $notLike: Op.notLike,
      $iLike: Op.iLike,
      $notILike: Op.notILike,
      $regexp: Op.regexp,
      $notRegexp: Op.notRegexp,
      $iRegexp: Op.iRegexp,
      $notIRegexp: Op.notIRegexp,
      $between: Op.between,
      $notBetween: Op.notBetween,
      $overlap: Op.overlap,
      $contains: Op.contains,
      $contained: Op.contained,
      $adjacent: Op.adjacent,
      $strictLeft: Op.strictLeft,
      $strictRight: Op.strictRight,
      $noExtendRight: Op.noExtendRight,
      $noExtendLeft: Op.noExtendLeft,
      $and: Op.and,
      $or: Op.or,
      $any: Op.any,
      $all: Op.all,
      $values: Op.values,
      $col: Op.col,
    },
  });

const loadModels = async (sequelize, models) => {
  Object.values(models)
    .forEach(model => model.init(sequelize));
};

const associateModels = async (models) => {
  Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models));
};

const seedAll = async (models) => {
  Object.values(models)
    .filter(model => typeof model.seed === 'function')
    .forEach(model => model.seed());
};

const init = async () => {
  logger.info('Connecting sequelize...');
  const sequelize = await connect();

  logger.info('Loading sequelize models...');
  loadModels(sequelize, pgModels);

  logger.info('Creating model associations...');
  await associateModels(pgModels);

  logger.info('Syncing sequelize models...');
  await sequelize.sync({ force: true });

  logger.info('Creating seed data...');
  await seedAll(pgModels);

  logger.info('Sequelize inited successfully.');

  global.sequelize = sequelize;
  global.PG = pgModels;
};

module.exports = { init };
