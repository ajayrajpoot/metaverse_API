var express = require('express');
var router = express.Router();
var post = require('../controllers/Post')
var user = require('../controllers/User')
var UserDetail = require('../controllers/UserDetail')
var company = require('../controllers/Company')
const isAuth = require('../middleware/is-auth');
 
router.get('/', (req, res) => { res.json({ mess: "API" }) })
 
router.post('/signup', user.signup);
router.post('/login', user.login);
router.get('/get_otp', user.get_otp);
router.post('/reset_password', user.reset_password);
router.get('/profilebyid', user.profilebyid);


router.get('/getMyProfile',isAuth, user.getMyProfile);
router.get('/getLiveUser',isAuth, user.getLiveUser);
router.post('/addUser',isAuth, user.addUser);
router.get('/getUser',isAuth, user.getUser);
router.get('/deleteUser',isAuth, user.deleteUser); 

router.post('/addUserDetail',isAuth, UserDetail.addUserDetail);
router.get('/getUserDetail',isAuth, UserDetail.getUserDetail);
router.post('/updateUserDetail',isAuth, UserDetail.updateUserDetail);
router.get('/deleteUserDetail',isAuth, UserDetail.deleteUserDetail);
 

module.exports = router 