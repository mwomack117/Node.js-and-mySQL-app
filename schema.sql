DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE table products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(10,2),
    stock_quantity INT(10) NULL,
     PRIMARY KEY(item_id)
);




-- SELECT * FROM bamazonDB.products;