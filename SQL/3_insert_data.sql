INSERT INTO Customers (name, email) VALUES
('John Doe', 'john@example.com'),
('Alice Smith', 'alice@example.com'),
('Bob Johnson', 'bob@example.com');

INSERT INTO Categories (name) VALUES
('Electronics'),
('Clothing'),
('Books');

INSERT INTO Products (name, price, category_id) VALUES
('Smartphone', 499.99, 1),
('Laptop', 999.99, 1),
('T-shirt', 19.99, 2),
('Jeans', 39.99, 2),
('Programming Book', 29.99, 3),
('Novel', 14.99, 3);

INSERT INTO Orders (customer_id, order_date) VALUES
(1, '2024-06-01 10:00:00'),
(2, '2024-06-02 11:30:00'),
(3, '2024-06-03 09:45:00');

INSERT INTO OrderItems (order_id, product_id, quantity) VALUES
(1, 1, 1),
(1, 3, 2),
(2, 2, 1),
(2, 4, 1),
(3, 5, 1),
(3, 6, 2);