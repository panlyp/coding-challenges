const path = require('path');

// import .env variables
require('dotenv-safe').config({
  allowEmptyValues: true,
  path: path.join(__dirname, '../../.env'),
  example: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  postgres: {
    url: process.env.POSTGRES_URL || 'localhost',
    database: process.env.POSTGRES_DATABASE || 'sugar-challenge',
    username: process.env.POSTGRES_USERNAME || undefined,
    password: process.env.POSTGRES_PASSWORD || undefined,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  debug: process.env.DEBUG === 'true' || false,
  enableSeed: process.env.ENABLE_SEED === 'true',
};
