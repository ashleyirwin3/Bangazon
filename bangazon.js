// require sqlite3
const { Database } = require('sqlite3').verbose();
const db = new Database('example.sql', () => console.log('connected'));

// new database object
// const db = new Database('db/example.sql');

// create tables


db.run("CREATE TABLE IF NOT EXISTS customer (customerd INT, customername TEXT, streetaddress NVARCHAR, city TEXT, state, postalcode INT, phonenumber INT)")
