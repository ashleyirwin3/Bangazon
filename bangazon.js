// require sqlite3
const { Database } = require('sqlite3').verbose();
const db = new Database('example.sql', () => console.log('connected'));

// new database object
// const db = new Database('db/example.sql');

// create tables


db.run("CREATE TABLE IF NOT EXISTS customer (customerd INT, customername TEXT, streetaddress NVARCHAR, city TEXT, state, postalcode INT, phonenumber INT)")
db.run("CREATE TABLE IF NOT EXISTS payment_options (payment_optionsId INT, name TEXT, account_number TEXT)")
db.run("CREATE TABLE IF NOT EXISTS products (productId INT, productName TEXT, productPrice TEXT)")
db.run("CREATE TABLE IF NOT EXISTS orders (orderId INT, customerId INT, paymentOptId INT)")
db.run("CREATE TABLE IF NOT EXISTS order_line_items (order_line_itemsId INT, orderId INT, productId INT)")
