var models = require("../models");
const Tasks = models.sequelize.model('tasks');
var exports = module.exports = {}
const Op = models.Sequelize.Op


exports.getAllTasks = function () {
    return Tasks.findAll();
};

exports.getTaskById = function (id) {
    return Tasks.findById(id).then(function (task) {
        if (!task) {
            return 'Task with id ' + id + ' not found';
        } else {
            return task.dataValues;
        }

    })
};


exports.getTaskByKeyword = function (keyword) {
    return Tasks.findAll({
        where: {
            task: {
                [Op.like]: '%' + keyword + '%'
            }
        }
    }).then(function (tasks) {
        if (tasks.length < 1) {
            return 'Task with keyword ' + keyword + ' not found';
        } else {
            return tasks;
        }

    })
};

exports.createTask = function (data) {
    return Tasks.create({
        task: data.task,
        status: data.status
    });
};

exports.updateTask = function (data) {
    return Tasks.update({
        task: data.task,
    }, {
        where: {
            id: data.id
        }
    });
};

exports.deleteTask = function (id) {
    return Tasks.destroy({
        where: {
            id: id
        }
    })
};


