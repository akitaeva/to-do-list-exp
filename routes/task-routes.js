const express = require("express");
const taskRoutes = express.Router();
const Task = require("../models/task");

taskRoutes.get('/all-tasks', (req, res, next) => {
    Task.find({}, (err, tasks) => {
      if (err) { return res.json(err).status(500); }
  
      return res.json(tasks);
    });
  });

taskRoutes.post('/all-tasks', (req, res, next) => {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,

    });

    newTask.save( (err) => {
        if (err)             { return res.status(500).json(err) }
        if (newTask.errors)  { return res.status(400).json(newTask) }
                               return res.json(newTask);
      });
});
  

taskRoutes.get('/all-tasks/:taskId/edit', (req, res, next) => {
    Task.findById(req.params.taskId)
    .then((task)=>{
      
    })
    .catch(err=>next(err));
   });
   
   
//saving the updated task
taskRoutes.post('/all-tasks/:taskId/update',(req, res, next) => {
       Task.findById(req.params.eventId)
       .then((theTask)=>{

       })
       .catch(err=>next(err));
   });       
   
taskRoutes.post('/all-tasks/:taskId/delete', (req, res, next)=>{
       const id = req.params.taskId;
       Task.findByIdAndRemove(id)
       .then(() =>{
           res.redirect('/events');
       })
       .catch(err => console.log("Error while deleting the event", err))
   }); 


taskRoutes.get('/all-tasks/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    Task.findById(req.params.id, (err, task) => {
      if (err)    { return res.json(err).status(500); }
      if (!entry) { return res.json(err).status(404); }
  
      return res.json(task);
    });
});
   

module.exports = taskRoutes;