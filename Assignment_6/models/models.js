const Sequelize = require ('sequelize');
const database = require ('../config/database');

const LoginDetails = database.define ('loginDetails', {
    email: {
        type: Sequelize.STRING
    },
    username: {
        type:Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    }
});

database.sync ()
    .then(() => console.log('LoginDetails Model Created.'))
    .catch(err => console.log('Error in creating model.'));

module.exports = LoginDetails;