module.exports = function (sequelize, Sequelize) {

    var Task = sequelize.define('tasks', {

            task: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                field: 'created_at'
            },
            status: {
                type: Sequelize.INTEGER,
                defaultValue: 1
            }
        },
        {
            timestamps: false
        });

    return Task;


}