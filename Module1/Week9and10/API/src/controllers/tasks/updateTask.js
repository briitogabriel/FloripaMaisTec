const Task = require('../../models/task');

async function updateTask (req, res) {
  const updateId = req.params.id;
  const updatedTask = {
    name: req.body.name,
    description: req.body.description
  }
  
  const taskFound = await Task.findByPk(updateId);

  if (!taskFound) {
    return res.status(404).json({
      error: `Task ID ${updateId} was not found.`
    });

  } else if(!updatedTask.name) {
    return res.status(400).json({error: "Name field is mandatory."});  
  }

  taskFound.set({
    name: updatedTask.name,
	  description: updatedTask.description
  });

  await taskFound.save();
  res.status(200).json(taskFound);
  
  console.log(`${Date()} -> Task ID ${updateId} updated`)
}

module.exports = updateTask;