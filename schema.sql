/*  Execute this file from the command line by typing:
 *   mysql -u root -p < schema.sql
 *  to create the database and the tables. 
 NOTE: right all the table first before you run code above
 
 {
  id:1,
  name: 'frozen pizza',
  quantity:5
 }

 CREATE THE SCHEMA
  IT SHOULD CREATE THE DATABASE AND A TABLE 
 INSERT 3 EXAMPLE ITEMS
1. mysql -u root -p --> to enter mysql
2. SHOW databases --> show DB
3. USE database --> use DB
4. INSERT INTO table-name (col-name, col-name2) VALUES (value1, value2)
5. SELECT * FROM table-name --> shows the table and all columns
6. DESCRIBE table-name --> shows columns + details

HOW TO CONNECT JS SERVER TO DB
Front END USES IMPORT <-- webpack only
Back END USES REQUIRE


 */

-- DROP database if it exists
DROP DATABASE IF EXISTS groceries_list;
--  Create database!!
CREATE DATABASE groceries_list;
--  Use database!!!
USE groceries_list;

CREATE TABLE groceries (
  id INTEGER AUTO_INCREMENT UNIQUE,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER
);

-- Add some inserts
INSERT INTO groceries (name, quantity) VALUES ('egg rolls', 4);
INSERT INTO groceries (name, quantity) VALUES ('gummy bears', 500);
INSERT INTO groceries (name, quantity) VALUES ('friends', 1);
