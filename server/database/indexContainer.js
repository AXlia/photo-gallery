const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: console.log,
    insecureAuth: true,
  });

const testConnection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    db.close();
  }
};

const initializeDB = async () => {
  try {
    const sync = await db.sync({ force: true });
    console.log('db sync syccessful.');
  } catch (err) {
    console.log('Error with db sync:', err);
  }
};

module.exports = { db, testConnection, initializeDB };
