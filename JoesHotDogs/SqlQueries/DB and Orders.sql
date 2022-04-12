USE MASTER
GO

IF NOT EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = 'JoesHotDogs'
)
CREATE DATABASE JoesHotDogs
GO

USE JoesHotDogs
GO

DROP TABLE IF EXISTS HotDogOrders;
DROP TABLE IF EXISTS HotDogs;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Users;

CREATE TABLE Orders (
	id varchar(55),
	userId varchar(255),
	total integer,
	delivery bit,
	cardNum integer,
	expiration varchar,
	nameOnCard varchar,
	billingZip integer,
	[address] varchar,
	phone integer,
	[date] varchar,
	[status] bit,
);

INSERT INTO Orders (id, userId, total, delivery, cardNum, expiration, nameOnCard, billingZip, [address], phone, [date], [status]) 
	VALUES ('9', '2', 10, 0, 123456789, '04/30', 'Adam West', 90210, '42 Wallaby Way', 5439087734, 1649721151035, 1);

INSERT INTO Orders (id, userId, total, delivery, cardNum, expiration, nameOnCard, billingZip, [address], phone, [date], [status]) 
	VALUES ('10', '3', 20, 1, 456789123, '05/31', 'Felicia Morris', 34567, '100 Toe Chop Road', 8763452892, 1649721151140, 0);

INSERT INTO Orders (id, userId, total, delivery, cardNum, expiration, nameOnCard, billingZip, [address], phone, [date], [status]) 
	VALUES ('11', 2, 35, 0, 123456789, '04/30', 'Adam West', 90210, '42 Wallaby Way', 5439087734, 1649721151333, 1);