var express = require('express');
var router = express.Router();
var post = require('../controllers/Post')
var user = require('../controllers/User')
var company = require('../controllers/Company')
const isAuth = require('../middleware/is-auth');


router.get('/', (req, res) => { res.json({ mess: "API" }) })

router.post('/signup', user.signup);
router.get('/login', user.login);
router.get('/getMyProfile',isAuth, user.getMyProfile);
router.get('/getLiveUser',isAuth, user.getLiveUser);
router.post('/addUser',isAuth, user.addUser);
router.get('/getUser',isAuth, user.getUser);
router.get('/deleteUser',isAuth, user.deleteUser); 

router.post('/addpost',isAuth, post.addPost);
router.get('/getpost',isAuth, post.getPost);
router.get('/getPostByUser',isAuth, post.getPostByUser);
router.get('/deletePost',isAuth, post.deletePost);

router.get('/getcompany',isAuth, company.getCompany);
router.post('/addcompany',isAuth, company.addCompany);
router.get('/deleteCompany',isAuth, company.deleteCompany);

module.exports = router 