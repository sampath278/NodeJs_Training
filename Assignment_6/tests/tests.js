const expect = require ('chai').expect;
const services = require ('../service/service');
const app = require ('../index');
const request = require ('supertest');
const jwt = require('jsonwebtoken');

//==============================================UNIT TESTING=======================================

// Creating and validating jwt token.
describe ('Create and Validate Jwt Token', function () {
    it ('shoud create and validate jwt token', function () {
        let user = {
            username: 'nskumar278',
            password: 'nskumar143'
        };
        services.jwtTokenValidation(services.createJwtToken(user), function (result) {
            expect (result).to.be.equal (true);
        });

    });
});


// Validation of all inputs received from user.
describe ("Validating Input Formats (Unit Tests)", function () {

    // Validating Login Details Format
    describe ('Login Format', function () {
        it ('Correct username and password format', function () {
            let loginDetails = {
                username: 'nskumar278',
                password: 'nskumar143'
            }
            expect (true).to.be.equal (services.validateLogin(loginDetails));
        });

        it ('Invalid username format', function () {
            let loginDetails = {
                username: '@3',
                password: 'nskumar143'
            }
            expect (false).to.be.equal (services.validateLogin(loginDetails));
        });

        it ('Invalid password format', function () {
            let loginDetails = {
                username: 'nskumar278',
                password: 'n'
            }
            expect (false).to.be.equal (services.validateLogin(loginDetails));
        });
        it ('Invalid username and password format', function () {
            let loginDetails = {
                username: '@',
                password: 'n'
            }
            expect (false).to.be.equal (services.validateLogin(loginDetails));
        });
    });

    // Validating Signup Details Format
    describe ('Signup Format', function () {
        it ('Correct format', function () {
            let signupDetails = {
                email: 'nskumar278@gmail.com',
                username: 'nskumar278',
                password: 'nskumar143'
            }
            expect (true).to.be.equal (services.validateSignup(signupDetails));
        });

        it ('Invalid username format', function () {
            let signupDetails = {
                email: 'nskumar278@gmail.com',
                username: '@3',
                password: 'nskumar143'
            }
            expect (false).to.be.equal (services.validateSignup(signupDetails));
        });

        it ('Invalid password format', function () {
            let signupDetails = {
                email: 'nskumar278@gmail.com',
                username: 'nskumar278',
                password: 'n'
            }
            expect (false).to.be.equal (services.validateSignup(signupDetails));
        });
        it ('Invalid email format', function () {
            let signupDetails = {
                email: 'nskumar2gmail.com',
                username: 'nskumar278',
                password: 'nskumar143'
            }
            expect (false).to.be.equal (services.validateSignup(signupDetails));
        });
        it ('Invalid all details', function () {
            let signupDetails = {
                email: 'jasdf',
                username: '@',
                password: 'n'
            }
            expect (false).to.be.equal (services.validateSignup(signupDetails));
        });
    });


    // Validating Number format
    describe ('Number Format', function () {
        it ('Correct number format', function () {
            let number = {
                number: 10
            }
            expect (true).to.be.equal (services.validateNumber(number));
        });

        it ('Invalid number format', function () {
            let number = {
                number: 'asdf'
            }
            expect (false).to.be.equal (services.validateNumber(number));
        });
    });
});





//==================================INTEGRATION TESTING AHEAD!!===============================


describe ('Testing Routes', function () {

    describe ('Login Page', function () {
        it('respond with 200 status code', function (done) {
            request(app)
                .post('/login')
                .send({email: 'nskumar278@gmail.com', username: 'nskumar278', password: 'nskumar143'})
                .end(function (err, response) {
                    expect(response.statusCode).to.be.equal (200);
                    done();
                });
        });
    });

    describe ('HomePage', function () {
        it ('should return 200 status code', function (done) {
            request(app).get ('/').end (function (err, res) {
                expect(res.statusCode).to.be.equal (200);
                done ();
            });
        });
    });

    describe ('Jwt Token Verification', function () {
        it('respond with 200 status code', function (done) {
            request(app)
                .post('/verifyJwt')
                .send({jwtToken: 'aklasdf.adfasdfasg.asfgasfgg'})
                .end(function (err, response) {
                    expect(response.statusCode).to.be.equal (200);
                    done();
                });
        });
    });

    describe ('Table', function () {
        it('respond with 200 status code', function (done) {
            request(app)
                .post('/table')
                .send({number: 10})
                .end(function (err, response) {
                    expect(response.statusCode).to.be.equal (200);
                    done();
                });
        });
    });

    describe ('Frequency of Character', function () {
        it('respond with 200 status code', function (done) {
            request(app)
                .post('/frequency')
                .send({sentence: 'Test Sentence'})
                .end(function (err, response) {
                    expect(response.statusCode).to.be.equal (200);
                    done();
                });
        });
    });

    describe ('Armstrong Number', function () {
        it('respond with 200 status code', function (done) {
            request(app)
                .post('/armstrong')
                .send({number: 100})
                .end(function (err, response) {
                    expect(response.statusCode).to.be.equal (200);
                    done();
                });
        });
    });
});