//Import mongoose
const mongoose = require('mongoose');

// Remove annoying deprication warning
mongoose.set('useFindAndModify', false);

// Deine task schema
const taskSchema = mongoose.Schema({
  id:{
    type: Number,
    require: true
  },
  title:{
    type: String,
    require: true
  },
  completed:{
    type: Boolean,
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
    id: updatedTask.id,
    title: updatedTask.title,
    completed: updatedTask.completed
  };
  Task.findOneAndUpdate(query, update, options, callback);
}

// Delete task
module.exports.removeTask = (id, callback) => {
  var query = {_id: id};
  Task.remove(query, callback);
}
