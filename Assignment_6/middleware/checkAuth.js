const jwt = require ('jsonwebtoken');
const alert = require ('alert-node');

function checkAuth(req, res, next) {
    let jwtToken = localStorage.getItem('jwtToken');
    try {
        jwt.verify (jwtToken, 'SecretCode');
    } catch (err) {
        alert ('You are not logged In');
        return res.render ('login');
    }
    next ();
}

module.exports = checkAuth;


