var indexController = require('../controllers/IndexController.js');

module.exports = function (app) {

    app.get('/', indexController.welcome);

};