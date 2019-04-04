// Import mongoose
const mongoose = require('mongoose');

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