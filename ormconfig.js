const path = require('path')

module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "tin",
  "password": "tin",
  "database": "TIN",
  "synchronize": true,
  "logging": false,
  "entities": isProd() ? [
    "dist/entities/**/*.js"
  ] : [
    "src/entities/**/*.ts"
  ],
  "migrations": isProd() ? [
    "dist/migrations/**/*.js"
  ] : [
    "src/migrations/**/*.ts"
  ],
  "subscribers": isProd() ? [
    "dist/subscribers/**/*.js"
  ] : [
    "src/subscribers/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/migrations",
    "subscribersDir": "src/subscribers"
  }
}

function isProd() {
  return process.env.NODE_ENV === 'production';
}
