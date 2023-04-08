const Task = require('../../models/task');

async function createTask (req, res) {
  try {
    console.log(req.body)
    const newTask = {
      name: req.body.name,
      description: req.body.description,
      user_id: req.body.userId
    };
  
    if (!newTask.name) {
      return res.status(400).json({error: "Name is mandatory."});
    } else {

      const findTaskName = await Task.findOne({ where: {name: newTask.name} })
      if (findTaskName) {
        return res.status(401).json({error: `Task '${newTask.name}' already exists.`});
      }
    }
  
    const postTask = await Task.create(newTask);
    res.status(201).json(postTask);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
}

module.exports = createTask;