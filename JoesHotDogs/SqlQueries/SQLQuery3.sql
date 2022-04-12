CREATE TABLE HotDogs (
id varchar(55),
name varchar (255),
description varchar (255),
imageUrl varchar(800),
);

INSERT INTO HotDogs 
VALUES ('1', 'Plain Ol Hotdog', 'Just a plain ass hotdog.', 'https://m.media-amazon.com/images/I/71GBQJBNEKL._SX679_.jpg')


INSERT INTO HotDogs (id, name, description,imageUrl)
VALUES ('4', 'Chicago Dog','It has got a pickle on it.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvs5r1jPgBk2itFSwYhM7lX5dD0l24rV-tw&usqp=CAU')

INSERT INTO HotDogs (id, name, description,imageUrl)
VALUES ('2', 'Chilly Dog', 'A hotdog with chilly and stuff.', 'http://assets.kraftfoods.com/recipe_images/opendeploy/106558_640x428.jpg')


INSERT INTO HotDogs (id, name, description,imageUrl)
VALUES ('3', 'Veggie Dog', 'No meat in these dogs.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPj_aLk0vweXXsj1QJJsyUjA9cWO2pzj0Y4Q&usqp=CAU')

INSERT INTO HotDogs 
VALUES ('5', 'New York Dog', 'Are those onions?', 'https://thepennywisemama.com/wp-content/uploads/2019/02/newyorkhotdog3-720x720.png');

CREATE TABLE HotDogOrders (
id varchar(55),
hotdogID varchar(55),
orderId varchar(55),
);

INSERT INTO HotDogOrders
VALUES ('13','1', '9')

INSERT INTO HotDogOrders
VALUES ('14','2', '10')

INSERT INTO HotDogOrders
VALUES ('15','3', '10')

INSERT INTO HotDogOrders
VALUES ('16','4', '11')


SELECT * 
FROM HotDogs