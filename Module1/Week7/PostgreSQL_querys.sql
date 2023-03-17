-- DROP TABLE IF EXISTS produto;
-- DROP TABLE IF EXISTS cliente CASCADE;
-- DROP TABLE IF EXISTS pedido;

-- Class example:

CREATE TABLE produto(
	id_produto SERIAL PRIMARY KEY,	-- serial => autonumber the IDs
	descricao VARCHAR(100) NOT NULL
);


-- [M01S07] Exercise 02 - CREATE
-- Model: https://drive.google.com/file/d/1thobIyd5r-iS7t5oiX7w-di9lV8bIMP_/view?usp=sharing

CREATE TABLE IF NOT EXISTS cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(20) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	email VARCHAR(30) NOT NULL,
	rg INT
);

CREATE TABLE IF NOT EXISTS pedido (
	id_pedido SERIAL PRIMARY KEY,
	id_pedido_cliente INT,
	FOREIGN KEY (id_pedido_cliente)
		REFERENCES cliente(id_cliente)
);

-- [M01S07] Exercise 03 - ALTER

ALTER TABLE cliente
	ALTER COLUMN rg TYPE VARCHAR(11);
	
ALTER TABLE pedido
	ADD COLUMN data_pedido DATE NOT NULL;

-- REGULAR QUERY ONLY FOR VISUALIZATIONS

SELECT * FROM cliente
LEFT JOIN pedido ON id_pedido_cliente = id_cliente;

-- [M01S07] Exercise 04 - DROP

CREATE TABLE teste (
	id SERIAL,
	campo1 VARCHAR(10)
);
DROP TABLE teste;