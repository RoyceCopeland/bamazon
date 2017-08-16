CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
    item_id INTEGER(11) AUTO-INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY(item-id)                 
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (288, 'Frisbee', 'Outdoor Sports', 8.00, 13);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (837, 'Golf Balls', 'Outdoor Sports', 25.00, 10);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (174, 'Sleeping Bag', 'Camping', 45.00, 6);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (395, 'Cowboy Hat', 'Headwear', 75.00, 0);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (853, 'Flip Flops', 'Footwear', 22.00, 15);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (937, 'Calculator', 'Gadgets', 5.00, 21);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (168, 'Dog Collar', 'Pet Items', 8.00, 9);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (729, 'Cat Food', 'Pet Items', 11.00, 17);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (367, 'Dog Bed', 'Pet Items', 36.00, 12);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (929, 'Baseball Glove', 'Outdoor Sports', 44.00, 12);