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


CREATE TABLE HotDogOrder (
id int not null identity primary key,
hotDogId int not null,
orderId int not null,
);

CREATE TABLE HotDog (
	id int not null identity primary key,
	[name] varchar (255),
	[description] varchar (255),
	imageUrl varchar (800),
);

CREATE TABLE [Order] (
	id int not null identity primary key,
	userId int not null,
	total bigint,
	delivery bit,
	cardNum bigint,
	expiration varchar (55),
	nameOnCard varchar (55),
	billingZip integer,
	[address] varchar (55),
	phone bigint,
	[date] varchar (55),
	[status] bit,
);

CREATE TABLE [User] (
	id int not null identity primary key,
	firstName varchar (255),
	lastName varchar (255),
	email varchar (255),
	isAdmin bit,
);


INSERT INTO HotDogOrder (hotDogId, orderId)
VALUES (1, 9)

INSERT INTO HotDogOrder
VALUES (2, 10)

INSERT INTO HotDogOrder
VALUES (3, 10)

INSERT INTO HotDogOrder
VALUES (4, 11)


INSERT INTO HotDogs (id, [name], [description], imageUrl)
	VALUES ('1', 'Plain Ol Hotdog', 'Just a plain ass hotdog.', 'https://m.media-amazon.com/images/I/71GBQJBNEKL._SX679_.jpg')

INSERT INTO HotDogs
	VALUES ('4', 'Chicago Dog','It has got a pickle on it.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvs5r1jPgBk2itFSwYhM7lX5dD0l24rV-tw&usqp=CAU')

INSERT INTO HotDogs
	VALUES ('2', 'Chilly Dog', 'A hotdog with chilly and stuff.', 'http://assets.kraftfoods.com/recipe_images/opendeploy/106558_640x428.jpg')

INSERT INTO HotDogs
	VALUES ('3', 'Veggie Dog', 'No meat in these dogs.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPj_aLk0vweXXsj1QJJsyUjA9cWO2pzj0Y4Q&usqp=CAU')

INSERT INTO HotDogs 
	VALUES ('5', 'New York Dog', 'Are those onions?', 'https://thepennywisemama.com/wp-content/uploads/2019/02/newyorkhotdog3-720x720.png');



INSERT INTO Orders (id, userId, total, delivery, cardNum, expiration, nameOnCard, billingZip, [address], phone, [date], [status]) 
	VALUES (9, 2, 10, 0, 123456789, '04/30', 'Adam West', 90210, '42 Wallaby Way', 5439087734, '1649721151035', 1);

INSERT INTO Orders 
	VALUES (10, 3, 20, 1, 456789123, '05/31', 'Felicia Morris', 34567, '100 Toe Chop Road', 8763452892, '1649721151140', 0);

INSERT INTO Orders 
	VALUES (11, 2, 35, 0, 123456789, '04/30', 'Adam West', 90210, '42 Wallaby Way', 5439087734, '1649721151333', 1);



INSERT INTO Users (id, firstName, lastName, email, isAdmin)
	VALUES ('6', 'Bob', 'Marley', 'dontworryaboutathing@gmail.com', 1);

INSERT INTO Users
	VALUES ('7', 'Adam', 'West', 'therealbatman@gmail.com', 0);

INSERT INTO Users
	VALUES  ('8', 'Fanny', 'Fourtoes', 'onefelloff@gmail.com', 0);

select * from HotDogs
select * from HotDogOrders
select * from Orders
select * from Users
