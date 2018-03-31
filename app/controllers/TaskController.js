var exports = module.exports = {}

const TaskDao = require("../dao/TaskDao");

exports.getAllTasks = function (req, res) {
    TaskDao.getAllTasks().then(function (tasks) {
        return res.status(200).send({error: false, data: tasks});
    });
};


exports.getTaskById = function (req, res) {
    var task_id = req.params.id;
    TaskDao.getTaskById(task_id).then(function (task) {
        if (!(task instanceof Object)) {
            return res.status(400).send({error: true, data: task});
        }
        return res.send({error: false, data: task});
    })
};


exports.getTaskByKeyword = function (req, res) {
    var keyword = req.params.keyword;
    TaskDao.getTaskByKeyword(keyword).then(function (tasks) {
        console.log(tasks);
        if (tasks.length > 0) {
            return res.send({error: false, data: tasks});
        } else {
            return res.status(404).send({error: true, data: 'Todo with keyword ' + keyword + ' not found'});
        }
    })
};


exports.createTask = function (req, res) {
    var data = req.body;
    if(isEmpty(data.task)) {
        return res.status(400).send({error: true, data: "Task could not be empty"});
    } else {
        TaskDao.createTask(data).then(function (task) {
            return res.send({error: false, data: task, message: 'Task was created'});
        })
    }

};

exports.updateTask = function (req, res) {
    var data = req.body;
    if(isEmpty(data.task)) {
        res.status(400).send({error: true, data: "Task can not be empty"});
    } else {
        TaskDao.getTaskById(data.id).then(function (task) {
            if (!(task instanceof Object)) {
                return res.status(404).send({error: true, data: 'not found task with id ' + data.id});
            }
            else {
                TaskDao.updateTask(data).then(function () {
                    return res.send({error: false, data: data, message: 'Task with id ' + data.id + ' was updated'});
                })
            }
        })
    }
};

exports.deleteTask = function (req, res) {
    var id = req.body.id;

    TaskDao.getTaskById(id).then(function (task) {
        if (!(task instanceof Object)) {
            return res.send({error: true, data: 'not find task with id ' + id});
        } else {
            TaskDao.deleteTask(id).then(function () {
                return res.send({error: false, message: 'Task with id ' + id + ' was deleted successfully'});
            })
        }
    })
};

function isEmpty(value) {
    return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null;
}

