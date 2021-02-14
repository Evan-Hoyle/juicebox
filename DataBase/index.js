const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
const client = new Client(
    {
        user: 'postgres',
        host: "localhost",
        database: 'juiceboxdev',
        port: '5432'
    }
);

async function getAllUsers() {
  const { rows } = await client.query(`
      SELECT id, username
      FROM users;
  `);

  return rows;

}

module.exports = {
  client,
  getAllUsers,
  
}