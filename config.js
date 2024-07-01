const dotenv = require('dotenv');

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';

let DB_URI, SECRET_KEY, BCRYPT_WORK_FACTOR;

if (NODE_ENV === 'test') {
  DB_URI = "postgresql:///messagely_test";
} else {
  DB_URI = process.env.DATABASE_URL || "postgresql:///messagely";
}

SECRET_KEY = process.env.SECRET_KEY;
BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR
};