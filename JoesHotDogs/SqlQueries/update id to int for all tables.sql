-- RUN FIRST - dropping existing columns

ALTER TABLE [Order]
DROP COLUMN id;

ALTER TABLE HotDogOrder
DROP COLUMN id;

ALTER TABLE HotDog
DROP COLUMN id;

ALTER TABLE [User]
DROP COLUMN id;

-- RUN SECOND - creating new columns as identity/primary key

ALTER TABLE [Order]
ADD id int not null identity primary key;

ALTER TABLE HotDogOrder
ADD id int not null identity primary key;

ALTER TABLE HotDog
ADD id int not null identity primary key;

ALTER TABLE [User]
ADD id int not null identity primary key;


ALTER TABLE [Order]
ALTER COLUMN userId int not null;
