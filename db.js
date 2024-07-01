// /** Database connection for messagely. */


// const { Client } = require("pg");
// const { DB_URI } = require("./config");

// const client = new Client(DB_URI);

// client.connect();


// module.exports = client;
const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client({
  connectionString: DB_URI,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  }
}

connectToDatabase();

module.exports = client;