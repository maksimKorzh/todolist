// Import mongoose
const mongoose = require('mongoose');

// Remove annoying deprication warning
mongoose.set('useFindAndModify', false);

// Define task schema
const taskSchema = mongoose.Schema({
  task:{
    type: String,
    require: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

// Export task object
const Task = module.exports = mongoose.model('Task', taskSchema);

// Get task
module.exports.getTask = (callback, limit) => {
  Task.find(callback).limit(limit);
}

// Update task
module.exports.updateTask = (id, updatedTask, options, callback) => {
  var query = {_id: id};
  var update = {
    task: updatedTask.task
  }
  Task.findOneAndUpdate(query, update, options, callback);
}

// Add task
module.exports.addTask = (task, callback) => {
  Task.create(task, callback);
}

// Delete task
module.exports.removeTask = (id, callback) => {
  var query = {_id: id};
  Task.remove(query, callback);
}
