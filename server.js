const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv').load();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Models
const models = require("./app/models");
//Routes
const taskRoute = require('./app/routes/task')(app);
const indexRoute = require('./app/routes/index')(app);


app.listen(5000, function (err) {
    if (!err) {
        console.log("Site is live");
    } else console.log(err);
});


//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});


