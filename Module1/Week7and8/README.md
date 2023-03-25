
## Week 7 and 8 - SQL, DDL, DML, ORM Sequelize

### SQL using PostgreSQL to create databases queries and Sequelize to integrate with JS. Enunciated below in portuguese:

**[M1S07] Ex 1 – Modelo Relacional**

Crie 2 tabelas relacionadas a um comércio eletrônico, coloque as cardinalidades relacionadas às entidades, o losango com o verbo que relaciona às tabelas, o nome das entidades e os atributos associados. Apresente o print do modelo relacional.

**[M1S07] Ex 2 – Comando CREATE**

Com base no Ex 1, crie as tabelas em linguagem SQL, usando o comando CREATE. Apresente o print após execução.

**[M1S07] Ex 3 – Comando ALTER**

Com base no Ex 1 e 2, altere 1 dado de cada tabela criada e apresente o print pós execução.

**[M1S07] Ex 4 – Comando DROP**

Crie uma tabela de teste e use o comando DROP para remover a tabela do banco de dados.

**[M1S08] Ex 1 - CREATE E INSERT**

Criar uma tabela em um banco de dados e insira 4 conjuntos de dados nela.

**[M1S08] Ex 2 - UPDATE**

Usando o Ex. 1, atualize 2 dados inseridos na tabela criada.

**[M1S08] Ex 3 - SELECT e DELETE**

Usando o Ex 1, use o SELECT para retornar alguma consulta e o DELETE para apagar algum registro.

**[M1S08] Ex 4 - OMR Sequelize**

Crie uma tabela em um banco de dados com o OMR Sequelize e insira dados nessa tabela.

**[M1S08] Ex 5 - OMR Sequelize**

Crie uma tabela em um banco de dados com o OMR Sequelize e atualize dados nessa tabela.

**[M1S08] Ex 6 - OMR Sequelize**

Crie uma tabela em um banco de dados com o OMR Sequelize e delete dado nessa tabela.

## Stack

#### PostgreSQL, SQL, ORM Sequelize, drawio
## Local use (Exercises [M1S07] 1 to 4 and [M1S08] 1 to 3)

#### You must have node and PostgreSQL installed

Clone

```bash
  git clone https://github.com/briitogabriel/FloripaMaisTec.git
```

Access project's directory

```bash
  cd Module1/Week7and8
```

Install dependencies

```bash
  npm install
```

Use pgAdmin and OPEN/LOAD the "PostgreSQL_querys.sql" file to check the queries made

## Local use (Exercises [M1S08] 4 to 6)

#### You must have node and PostgreSQL and nodeJS installed

Clone

```bash
  git clone https://github.com/briitogabriel/FloripaMaisTec.git
```

Access project's directory

```bash
  cd Module1/Week7and8
```

Install dependencies

```bash
  npm install
```

Create a file ".env" into the root directory and set the variables USERNAME_PG and PASSWORD_PG according to your PostgreSQL database login

Run sequelize commands (remove comments on code to check updates into the table created -> requires experience with SELECT/UPDATE/DELETE terms)

```bash
  node index.js
```