CREATE TABLE Users (
id varchar(55),
firstName varchar (255),
lastName varchar (255),
email varchar(255),
isAdmin bit
);

INSERT INTO Users
VALUES ('6', 'Bob', 'Marley', 'dontworryaboutathing@gmail.com', true)


INSERT INTO Users
VALUES ('7', 'Adam', 'West', 'therealbatman@gmail.com', false)

INSERT INTO Users
VALUES  ('8', 'Fanny', 'Fourtoes', 'onefelloff@gmail.com', false)

SELECT * 
FROM Users