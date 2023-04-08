const Task = require('../../models/task');

async function deleteTask (req, res) {
  try {
    await Task.destroy({ where: {id: req.params.id} });
    res.status(204).json();
    
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Could not process your request'});
  }
}

module.exports = deleteTask;