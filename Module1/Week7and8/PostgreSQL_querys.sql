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
	
ALTER TABLE produto
	ADD COLUMN preco DECIMAL(8,2);
ALTER TABLE produto
	ADD COLUMN "comissao_5%" DECIMAL(8,2);
	
ALTER TABLE produto
	ALTER COLUMN "comissao_5%" TYPE MONEY;
ALTER TABLE produto
	ALTER COLUMN preco TYPE MONEY;

-- REGULAR QUERY ONLY FOR VISUALIZATIONS

SELECT * FROM cliente
LEFT JOIN pedido ON id_pedido_cliente = id_cliente;


-- [M01S07] Exercise 04 - DROP

CREATE TABLE teste (
	id SERIAL,
	campo1 VARCHAR(10)
);
DROP TABLE teste;


-- INSERTING DATA EXAMPLES

INSERT INTO produto(descricao) VALUES('Caneta Azul');
INSERT INTO produto(descricao) VALUES('Lápis Verde');

INSERT INTO cliente(
	nome,
	sobrenome,
	cpf,
	email,
	rg
) VALUES(
	'Gabriel',
	'Brito',
	'12345678910',
	'gabriel@email.com',
	'987654321'
);
INSERT INTO cliente(
	nome,
	sobrenome,
	cpf,
	email,
	rg
) VALUES(
	'Fulaninho',
	'Batista',
	'55522214632',
	'fulano@email.com',
	'852169853'
);

INSERT INTO pedido(id_pedido_cliente, data_pedido) VALUES(
	1,
	'20/03/2023'
);
INSERT INTO pedido(id_pedido_cliente, data_pedido) VALUES(
	1,
	'01/01/2023'
);
INSERT INTO pedido(id_pedido_cliente, data_pedido) VALUES(
	2,
	'15/12/2022'
);


-- UPDATE DATA EXAMPLES

UPDATE public.pedido
	SET id_pedido_cliente=1, data_pedido='02/01/2023'
	WHERE id_pedido=2;
UPDATE public.pedido
	SET id_pedido_cliente=2
	WHERE id_pedido=2;
	
UPDATE public.produto
	SET preco=10.5
	WHERE id_produto=1;
UPDATE public.produto
	SET preco=200
	WHERE id_produto=2;
	
UPDATE public.produto
	SET "comissao_5%"=preco*0.05;


-- DELETE DATA EXAMPLES
	
DELETE FROM public.pedido
	WHERE id_pedido=2;


-- SELECT QUERIES
SELECT * FROM produto;
SELECT * FROM pedido;
SELECT * FROM cliente;

SELECT nome FROM cliente WHERE nome LIKE 'G%';	--> WILDCARD TO MATCH EVERY CHARACTER
SELECT nome FROM cliente WHERE nome LIKE 'g%';	--> POSTGRESQL IS CASE SENSITIVE
SELECT nome FROM cliente WHERE nome LIKE '_a%';	--> WILDCARD TO MATCH ONE CHARACTER
SELECT nome as "Client Name", email as "E-mail" FROM cliente WHERE nome LIKE '_a%' AND email like '%email%';
SELECT nome, sobrenome FROM cliente ORDER BY nome ASC;
SELECT * FROM produto WHERE descricao IS NULL;
SELECT * FROM cliente WHERE NOT(nome='Gabriel' AND cpf LIKE '12%');	--> NOT SENTENCE: DENIES 'AND' (NOT 'AND' = 'OR')
-- THE ABOVE QUERY RETURNS DATA WHERE "nome<>'Gabriel' OR cpf NOT LIKE '12%'"
SELECT UPPER(nome), LOWER(sobrenome) FROM cliente;
SELECT UPPER(SUBSTRING(nome, 1,3)) as SUBNome, nome FROM cliente;
SELECT nome, LENGTH(nome) as comprimento FROM cliente;


-- DROP COLUMN EXAMPLE:
-- ALTER TABLE tableName DROP COLUMN columnName