module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY,
  DB_URL: process.env.DATABASE_URL,
  TEST_DB_URL: process.env.TEST_DB_URL
}
