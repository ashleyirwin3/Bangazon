// require sqlite3
const { Database } = require('sqlite3').verbose();
const db = new Database('example.sql', () => console.log('connected'));

// new database object
// const db = new Database('db/example.sql');

// create tables


db.run("CREATE TABLE IF NOT EXISTS customers(customerId INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT NOT NULL, lastName TEXT NOT NULL, address TEXT NOT NULL, city TEXT NOT NULL, state TEXT NOT NULL, postalcode TEXT NOT NULL, phonenumber BLOB)")
db.run("CREATE TABLE IF NOT EXISTS payment_options (payment_optionsId INTEGER PRIMARY KEY AUTOINCREMENT, payOptName TEXT NOTE NULL, payOptAccountNum TEXT NOT NULL)")
db.run("CREATE TABLE IF NOT EXISTS products (productId INTEGER PRIMARY KEY AUTOINCREMENT, productName TEXT NOT NULL, productPrice NUMERIC(6,2) NOT NULL)")
db.run("CREATE TABLE IF NOT EXISTS orders (orderId INTEGER PRIMARY KEY AUTOINCREMENT, customerid INT, paymentOptId INT)")
db.run("CREATE TABLE IF NOT EXISTS order_line_items (orderliId INTEGER PRIMARY KEY AUTOINCREMENT, orderId INT NOT NULL, productId INT NOT NULL)")
