const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (_, res) => {
  res.json({
    message: 'Welcome!',
    name: 'Gabriel'
  })
});

server.post("/users", (req, res) => {
  const { body } = req;

  !body?.name || !body?.email
    ? res
        .status(400)
        .json({ message: 'User data must be providen!'})
    : res.json({ ...body, id: 1 });
});

module.exports = { server };