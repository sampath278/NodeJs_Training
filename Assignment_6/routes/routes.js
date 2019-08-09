const express = require ('express');
const router = express.Router();
const controller = require ('../controller/controller');
const checkAuth = require ('../middleware/checkAuth');

router.get ('/', checkAuth, (req, res) => res.render('home', {disable: 'none', login: localStorage.getItem('username'), logout: 'Logout'}))
router.get ('/login', (req, res) => res.render ('login'));
router.post ('/login', (req, res) => controller.login (req, res));
router.post ('/signup', (req, res) => controller.signup (req, res));
router.get ('/verifyJwt', checkAuth, (req, res) => res.render ('verifyJwt', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout'}));
router.post ('/verifyJwt', (req, res) => controller.verifyJwt (req, res));
router.get ('/table', checkAuth, (req, res) => res.render ('table', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout'}));
router.post ('/table', (req, res) => controller.generateTable(req, res));
router.get ('/frequency', checkAuth, (req, res) => res.render ('frequency', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout'}));
router.post ('/frequency', (req, res) => controller.generateFrequency(req, res));
router.get ('/armstrong', checkAuth, (req, res) => res.render ('armstrong', {disable: 'none',login: localStorage.getItem('username'), logout: 'Logout'}));
router.post ('/armstrong', (req, res) => controller.verifyArmstrong(req, res));
router.get ('/logout', checkAuth, (req, res) => controller.logoutUser (req, res));


module.exports = router;