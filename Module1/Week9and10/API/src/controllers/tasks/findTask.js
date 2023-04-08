const Task = require('../../models/task');

async function findTask (req, res) {
  console.log(req.body)
  try {
    const getTasks = await Task.findAll({ where: {user_id: req.body.userId} });
    res.status(200).json(getTasks);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
}

module.exports = findTask;