var taskController = require('../controllers/TaskController.js');


module.exports = function (app) {

    app.get('/todos', taskController.getAllTasks);

    app.get('/todo/:id', taskController.getTaskById);

    app.get('/todo/search/:keyword', taskController.getTaskByKeyword);

    app.post('/todo', taskController.createTask);

    app.put('/todo', taskController.updateTask);

    app.delete('/todo', taskController.deleteTask);
};

