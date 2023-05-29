CREATE TABLE if not exists Material(
  material_id SERIAL PRIMARY KEY,
  material_name TEXT,
  material_price_per_gram NUMERIC
);

CREATE TABLE if not exists Precious_Stone (
  stone_id SERIAL PRIMARY KEY,
  stone_name TEXT,
  stone_price_per_gram NUMERIC
);

CREATE TABLE if not exists Product_Type (
  type_id SERIAL PRIMARY KEY,
  type_name TEXT
);

create table if not exists clients(
	id SERIAL primary key,
	label TEXT
);

CREATE TABLE if not exists Supplier (
  supplier_id SERIAL PRIMARY KEY,
  supplier_name TEXT,
  material_id INT REFERENCES Material (material_id),
  stone_id INT  REFERENCES Precious_Stone (stone_id)
);

CREATE TABLE if not exists Product (
  product_id SERIAL PRIMARY KEY,
  product_name TEXT,
  production_cost NUMERIC,
  material_id INTEGER REFERENCES Material (material_id),
  stone_id INTEGER REFERENCES Precious_Stone (stone_id),
  material_weight NUMERIC,
  stone_weight NUMERIC,
  type_id INTEGER REFERENCES Product_Type (type_id)
);

create table if not exists order_statuses(
	id SERIAL primary key,
	label TEXT
);
create table if not exists orders(
	id SERIAL primary key,
	label TEXT,
	id_status INT NOT NULL DEFAULT 10,
	id_client INT REFERENCES clients(id),
	product_id INTEGER REFERENCES Product (product_id),
	amount NUMERIC(20,2)
);
create table if not exists order_items(
	id SERIAL primary key,
	label TEXT,
	id_order INT REFERENCES orders(id),
	amount NUMERIC(20,2)
);
CREATE TABLE if not exists Purchase_List (
  purchase_id SERIAL PRIMARY KEY,
  order_id INTEGER  REFERENCES Orders (id),
  purchase_date DATE
);

CREATE TABLE if not exists Positions (
  position_id SERIAL PRIMARY KEY,
  position_name TEXT
);

CREATE TABLE if not exists Staff (
  staff_id SERIAL PRIMARY KEY,
  fio TEXT,
  position_id INTEGER REFERENCES Positions (position_id)
);
create table if not exists roles(
	id SERIAL primary key,
	code text,
	label text
);
create table if not exists users(
	id SERIAL primary key,
	login text,
	pass text,
	fio text,
	id_role INT REFERENCES roles (id),
	is_blocked INT default 0
);

create table if not exists payment_types(
	id SERIAL primary key,
	label TEXT
);
create table if not exists payments(
	id SERIAL primary key,
	id_order INT,
	id_payment_type INT REFERENCES payment_types(id),
	amount NUMERIC(20,2)
);