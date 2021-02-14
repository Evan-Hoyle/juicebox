const { client } = require('./index');

const {
  client,
  getAllUsers
} = require('./index');

async function testDB() {
  try {
    client.connect();

    const users = await getAllUsers();
    console.log(users);
  }catch (error) {
    console.error(error);
  }finally {
    client.end();
  }
}

async function testDB() {
    try {
      client.connect();
  
      const { rows } = await client.query(`SELECT * FROM users;`);
      console.log(rows);
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  
}
testDB();