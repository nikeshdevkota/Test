SELECT Customers.name AS customer_name, Orders.order_id, Orders.order_date
FROM Customers
LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id;
