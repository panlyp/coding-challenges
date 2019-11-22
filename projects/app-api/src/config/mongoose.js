const mongoose = require('mongoose');

const logger = require('./../config/logger');
const { mongo, env, enableSeed } = require('./vars');
const models = require('../api/models');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

const seedAll = async () => {
  for(const [name, model] of Object.entries(models)) {
    if (typeof model.seed === 'function') {
      logger.info(`Creating seed data for model: ${name}`);
      await model.deleteMany()
      await model.seed();
    }
  }
};

// create seed
if (enableSeed === true) {
  seedAll();
}

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = () => {
  mongoose.connect(mongo.uri, {
    useCreateIndex: true,
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  return mongoose.connection;
};
