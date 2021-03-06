const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const taskSchema = new Schema({
    title:        {type: String, required: true},
    description:  {type: String, required: true},
    completed:    {type: Boolean, default: false},
 
    }, 
    {
        usePushEach: true
    },
    {
        qtimestamps: true
  });

  const Task = mongoose.model("Task", taskSchema);

  module.exports = Task;