ALTER TABLE [Order]DROP COLUMN id;ALTER TABLE HotDogOrderDROP COLUMN id;ALTER TABLE HotDogDROP COLUMN id;ALTER TABLE [User]DROP COLUMN id;

ALTER TABLE [Order]ADD id int not null identity primary key;ALTER TABLE HotDogOrderADD id int not null identity primary key;ALTER TABLE HotDogADD id int not null identity primary key;

SELECT * FROM [User]

ALTER TABLE [Order]ALTER COLUMN userId int not null;
