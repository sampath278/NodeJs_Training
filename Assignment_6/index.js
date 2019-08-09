const express = require ("express");
const exphbs = require ("express-handlebars");
const path = require ("path");
const bodyParser = require('body-parser');
const database = require ('./config/database');
const models = require ('./models/models');
const service = require ("./service/service");
const checkAuth = require ('./middleware/checkAuth');


// Creating express app.
const app = express ();
app.use (bodyParser.urlencoded ({extended: true}));
app.use(bodyParser.json());



if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

// Setting handlebars for template.
app.engine ('hb', exphbs ({
    extname: 'hb',
    defaultLayout: 'main'
}));
app.set ('views', path.join(__dirname, 'views'));
app.set ('view engine', 'hb');

app.use ('/', require ('./routes/routes'));


module.exports = app.listen (8080);


