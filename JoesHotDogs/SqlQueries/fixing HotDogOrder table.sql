DROP TABLE HotDogOrder

CREATE TABLE HotDogOrder (
id int not null identity primary key,
hotDogId int not null,
orderId int not null,
);

INSERT INTO HotDogOrder (hotDogId, orderId)
VALUES (1, 9)

INSERT INTO HotDogOrder
VALUES (2, 10)

INSERT INTO HotDogOrder
VALUES (3, 10)

INSERT INTO HotDogOrder
VALUES (4, 11)

select * from HotDogOrder