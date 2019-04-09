//Import mongoose
const mongoose = require('mongoose');

// Remove annoying deprication warning
mongoose.set('useFindAndModify', false);
mongoose.set('useFindAndModify', false);


// Deine task schema
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

const Task = module.exports = mongoose.model('Task', taskSchema);

// Get tasks
module.exports.getTasks = (callback, limit) => {
  Task.find(callback).limit(limit);
}

// Add task
module.exports.addTask = (task, callback) => {
  Task.create(task, callback);
}

// Update task
module.exports.updateTask = (id, updatedTask, options, callback) => {
  var query = {_id: id};
  var update = {
    task: updatedTask.task
  };
  Task.findOneAndUpdate(query, update, options, callback);
}

// Delete task
module.exports.removeTask = (id, callback) => {
  var query = {_id: id};
  Task.deleteOne(query, callback);
}
