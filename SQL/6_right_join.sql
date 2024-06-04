SELECT Orders.order_id, Orders.order_date, Customers.name AS customer_name
FROM Orders
RIGHT JOIN Customers ON Orders.customer_id = Customers.customer_id;