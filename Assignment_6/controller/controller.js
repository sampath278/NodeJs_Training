const alert = require ('alert-node');
const model = require ('../models/models');
const service = require ('../service/service');



function login (req, res) {
    let {username, password} = req.body;
    let isLoginValid = service.validateLogin({username: username, password: password});
    if (isLoginValid)
    {
        model.findByPk(username)
            .then (user => {
                if (user.password == password) {
                    localStorage.setItem('jwtToken', service.createJwtToken (req.body));
                    localStorage.setItem('username', username)
                    res.render('home', {disable: 'none',login: user.username, logout: 'Logout', jwtToken: `Your Token: ${localStorage.getItem('jwtToken')}`});
                } else {
                    alert ('Incorrect Password.');
                }
            })
            .catch(err => alert ('User not fount'));
    } else {
        alert ('Invalid Login Format.')
    }

}

function signup (req, res) {
    let {email, username, password} = req.body;
    let isSignUpValid = service.validateSignup({email: email, username: username, password: password});
    if (isSignUpValid) {
        model.create ({
            email: email,
            username: username,
            password: password
        })
            .then (() => {
                alert ('Sign up successful. Login to start.');
                res.redirect ('/login');
            })
            .catch(err => console.log(err));
    } else {
        alert ('Invalid input format.')
    }
}

function verifyJwt (req, res) {
    let jwtToken = req.body.jwtToken;
    service.jwtTokenValidation(jwtToken,function (result) {
        if (result == true) {
            res.render ('verifyJwt', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout', jwtValid: 'valid'});
        } else {
            res.render ('verifyJwt', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout', jwtValid: 'invalid'});
        }
    });
}

function generateTable (req, res) {
    let number = req.body.number;
    let isNumberValid = service.validateNumber({number: number});
    if (isNumberValid) {
        let table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(number * i);
        }
        res.render ('table', {
            disable: 'none',table, login: localStorage.getItem('username'), logout: 'Logout'
        });
    } else {
        alert ('Invalid Input.');
    }
}

function generateFrequency (req, res) {
    let sentence = req.body.sentence;
    let isValidSentence = service.validateSentence({sentence: sentence});
    if (isValidSentence) {
        sentence = sentence.replace(/\s/g,'');
        sentence = sentence.toLowerCase();
        let freq = {}
        for (let i=0; i<sentence.length;i++) {
            let character = sentence.charAt(i);
            if (freq[character]) {
                freq[character]++;
            } else {
                freq[character] = 1;
            }
        }
        res.render('frequency', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout',
            freq
        });
    } else {
        alert ('Invalid Sentence.');
    }
}

function verifyArmstrong (req, res) {
    let number = req.body.number;
    let isValidNumber = service.validateNumber({number: number});
    if (isValidNumber) {
        let result = number;
        let sum = 0;
        let n = number.toString().length;
        while (number > 0) {
            sum += Math.pow(number % 10, n);
            number = parseInt(number / 10);
        }
        if (result == sum)
            res.render('armstrong', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout', armstrong: `${result} is armstrong number.`
            });
        else
        res.render('armstrong', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout', armstrong: `${result} is not armstrong number.`
        });


    } else {
        alert ('Invalid Input.')
    }
}

function logoutUser (req, res) {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    res.statusCode (200);
    res.redirect ('/login');
}

module.exports = {
    login,
    signup,
    verifyJwt,
    generateTable,
    generateFrequency,
    verifyArmstrong,
    logoutUser
}
