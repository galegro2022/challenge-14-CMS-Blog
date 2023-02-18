const Sequelize = require('sequelize');
require('dotenv').config();
const mysql = require('mysql2');

// const connection = new Sequelize('Blogalog_db', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });
// connection
//   .authenticate()
//   .then(() => {
//     console.log('Connection to the MySQL database has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });




let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
    }
  );
}

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//  database: 'test'
// });

module.exports = sequelize;
