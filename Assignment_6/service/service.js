const jwt = require('jsonwebtoken');
const joi = require ('joi');


function createJwtToken (body) {
    let jwtToken = jwt.sign({body},
        'SecretCode', {
            expiresIn: '2h'
        });
    return jwtToken;
}



function jwtTokenValidation (jwtToken, callback) {
    let isValid;
    jwt.verify(jwtToken, "SecretCode", function (err, data) {
        if (!err) {
            callback(true);
        }
        else {
            callback (false);
        }
    });
}

function validateLogin (login) {
    const schema = joi.object ().keys ({
        username: joi.string ().min (3).regex (/^[a-zA-z0-9]+$/).required (),
        password: joi.string ().min (3).required ()
    });

    const {error, value} = joi.validate (login, schema);
    if (error) {
        return false;
    } else {
        return true;
    }

}

function validateSignup (signup) {
    const schema = joi.object ().keys ({
        email: joi.string ().email ().required (),
        username: joi.string ().min (3).regex (/^[a-zA-z0-9]+$/).required (),
        password: joi.string ().min (3).required ()
    });

    const {error, value} = joi.validate (signup, schema);
    if (error) {
        return false;
    } else {
        return true;
    }
}

function validateNumber (number) {
    const schema = joi.object ().keys ({
       number: joi.number ().required ()
    });

    const {error, value} = joi.validate (number, schema);
    if (error) {
        return false;
    } else {
        return true;
    }
}

function validateSentence (sentence) {
    const schema = joi.object ().keys ({
       sentence: joi.string ().min (2).required ()
    });

    const {error, value} = joi.validate (sentence, schema);
    if (error)
        return false;
    else
        return true;
}

module.exports = {
    createJwtToken,
    jwtTokenValidation,
    validateLogin,
    validateSignup,
    validateNumber,
    validateSentence,
};