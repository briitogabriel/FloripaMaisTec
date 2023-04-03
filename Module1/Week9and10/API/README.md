
## Week 9 - API with Express

### Class notes and guided instructions for examples purpose

ToDo List with tasks and descriptions.

NOTE: These examples were guided for the entire classroom as a review of the Week 8

## Stack

#### PostgreSQL, SQL, Express, ORM Sequelize
## Local use

#### You must have Node, PostgreSQL and some backend interface (such as Insomnia or Postman) installed

Clone

```bash
  git clone https://github.com/briitogabriel/FloripaMaisTec.git
```

Access project's directory

```bash
  cd Module1/Week9and10/API
```

Install dependencies

```bash
  npm install
```

Create a file ".env" into the root directory and set the variables USERNAME_PG and PASSWORD_PG according to your PostgreSQL database login

```bash
  npm start
```

Navigate through routes on your backend interface:
- GET/              => Root of your Application
- POST/tasks        => Post/store a new task into the database
- GET/tasks         => Get all tasks stored into the database
- DELETE/tasks/:id  => Update a task stored in database
- PUT/tasks/:id     => Update a task stored in database