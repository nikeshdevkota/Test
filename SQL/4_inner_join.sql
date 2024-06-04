SELECT Orders.order_id, Customers.name AS customer_name, Products.name AS product_name, OrderItems.quantity
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.customer_id
INNER JOIN OrderItems ON Orders.order_id = OrderItems.order_id
INNER JOIN Products ON OrderItems.product_id = Products.product_id;
