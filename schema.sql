CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    item_id INTEGER(20) AUTO-INCREMENT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(3) NOT NULL,
    PRIMARY KEY(item-id)                 -----IS THIS NEEDED? --------
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Frisbee', 'Outdoor Sports', '$8.00', 13);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Golf Balls', 'Outdoor Sports', '$25.00', 10);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Sleeping Bag', 'Camping', '$45.00', 6);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Cowboy Hat', 'Headwear', '$75.00', 4);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Flip Flops', 'Footwear', '$22.00', 15);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Calculator', 'Gadgets', '$5.00', 21);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Dog Collar', 'Pet Items', '$8.00', 9);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Cat Food', 'Pet Items', '$11.00', 17);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Dog Bed', 'Pet Items', '$36.00', 12);

    INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
    VALUES (001, 'Baseball Glove', 'Outdoor Sports', '$44.00', 12);