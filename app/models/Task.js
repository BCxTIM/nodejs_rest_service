module.exports = function (sequelize, Sequelize) {

    var Task = sequelize.define('tasks', {

            task: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE,
                field: 'created_at'
            }
        },
        {
            timestamps: false
        });

    return Task;


}