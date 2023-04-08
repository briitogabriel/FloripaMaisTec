
## Week 9 - API with Express

### Class notes and guided instructions for examples purpose

ToDo List with tasks and descriptions.

NOTE: These examples were guided for the entire classroom as a review of the Week 8

## Week 10 - API with Express - Users routes

### Class notes and guided instructions for examples purpose

Adding users routes into our To Do List.

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

Rename the file ".env-example" to ".env" (root directory) and set the variables according to your PostgreSQL database login and TOKEN configurations

```bash
  npm start
```

Navigate through routes on your backend interface:
- GET/              => Root of your Application
- POST/tasks        => Create a new task
- GET/tasks         => Get all tasks stored into the database
- DELETE/tasks/:id  => Update a task stored in database
- PUT/tasks/:id     => Update a task stored in database
- POST/users        => Create a new user
- POST/users/login  => User login