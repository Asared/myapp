-- Заполнение таблицы "Material"
INSERT INTO Material (material_id, material_name, material_price_per_gram)
VALUES
  (1, 'Gold', 50.5),
  (2, 'Silver', 10.2);

-- Заполнение таблицы "PreciousStone"
INSERT INTO Precious_Stone (stone_id, stone_name, stone_price_per_gram)
VALUES
  (1, 'Ruby', 300.25),
  (2, 'Emerald', 250.8),
  (3, 'Sapphire', 275.6);

-- Заполнение таблицы "ProductType"
INSERT INTO Product_Type (type_id, type_name)
VALUES
  (1, 'Ring'),
  (2, 'Necklace'),
  (3, 'Bracelet');


-- Заполнение таблицы "Supplier"
INSERT INTO Supplier (supplier_id, supplier_name, material_id, stone_id)
VALUES
  (1, 'Supplier A', 1, 1),
  (2, 'Supplier B', 2, 2),
  (3, 'Supplier C', 1, 3);

-- Заполнение таблицы "Product"
INSERT INTO Product (product_id, product_name, production_cost, material_id, stone_id, material_weight, stone_weight, type_id)
VALUES
  (1, 'Gold Ring with Ruby', 500.0, 1, 1, 10.0, 2.0, 1),
  (2, 'Silver Necklace with Emerald', 350.0, 2, 2, 15.0, 3.5, 2),
  (3, 'Gold Bracelet with Sapphire', 700.0, 1, 3, 20.0, 4.0, 3);
insert into order_statuses(id, label) values
(10, 'Проект'),
(20, 'В работе'),
(30, 'Завершён');
insert into clients(label) values('Тестовый клиент');
insert into orders(id, label,id_status,	id_client, product_id, amount) values
(1, 'Gold Ring with Ruby',20,1,1,300000);
-- Заполнение таблицы "PurchaseList"
INSERT INTO Purchase_List (purchase_id, order_id, purchase_date)
VALUES
  (1, 1, '2023-05-20');

-- Заполнение таблицы "Position"
INSERT INTO Positions (position_id, position_name)
VALUES
  (1, 'Manager'),
  (2, 'Jeweler'),
  (3, 'Salesperson');

-- Заполнение таблицы "Staff"
INSERT INTO Staff (staff_id, fio, position_id)
VALUES
  (1, 'Иванов Роман Игоревич', 1),
  (2, 'Жукова Инна Яновна', 2),
  (3, 'Петров Максим Алексеевич', 3);
  insert into roles(code,label) values('admin', 'Администратор'),('manager', 'Руководитель'),('employee', 'Сотрудник');
  insert into users(login, pass,fio,id_role,is_blocked) values
('admin', '098f6bcd4621d373cade4e832627b4f6', 'Тестовый Администратор', 1, 0),
('manager', '098f6bcd4621d373cade4e832627b4f6', 'Тестовый Руководитель', 2, 0),
('employee', '098f6bcd4621d373cade4e832627b4f6', 'Тестовый Сотрудник', 3, 0);


insert into payment_types(id,label) values
(10, 'Аванс'),
(20, 'Основной');