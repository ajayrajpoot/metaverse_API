var express = require('express');
var router = express.Router(); 

var user = require('../controllers/User') 
var products = require('../controllers/products') 
var products_ads = require('../controllers/products_ads') 

var feeling_image = require('../controllers/feeling_image')
var category = require('../controllers/category')

const isAuth = require('../middleware/is-auth');
 
router.get('/', (req, res) => { res.json({ mess: "API" }) })
 
router.post('/signup', user.signup);
router.post('/login', user.login);
router.get('/get_otp', user.get_otp);
router.post('/reset_password', user.reset_password);
router.get('/profilebyid', user.profilebyid);

router.get('/getfeeling_image', feeling_image.getfeeling_image);
router.post('/addfeeling_image', feeling_image.addfeeling_image);
router.post('/updatefeeling_image', feeling_image.updatefeeling_image);
router.get('/deletefeeling_image', feeling_image.deletefeeling_image);

router.get('/getcategory', category.getcategory);
router.post('/addcategory', category.addcategory);
router.post('/updatecategory', category.updatecategory);
router.get('/deletecategory', category.deletecategory);

router.get('/getproducts', products.getproducts);
router.post('/addproducts', products.addproducts);
router.post('/updateproducts', products.updateproducts);
router.get('/deleteproduct', products.deleteproduct);


router.get('/getproducts_ads', products_ads.getproducts_ads);
router.post('/addproducts_ads', products_ads.addproducts_ads);
router.post('/updateproducts_ads', products_ads.updateproducts_ads);
router.get('/deleteproduct_ads', products_ads.deleteproduct_ads);




// router.get('/getMyProfile',isAuth, user.getMyProfile);
// router.get('/getLiveUser',isAuth, user.getLiveUser);
// router.post('/addUser',isAuth, user.addUser);
// router.get('/getUser',isAuth, user.getUser);
// router.get('/deleteUser',isAuth, user.deleteUser); 

// router.post('/addUserDetail',isAuth, UserDetail.addUserDetail);
// router.get('/getUserDetail',isAuth, UserDetail.getUserDetail);
// router.post('/updateUserDetail',isAuth, UserDetail.updateUserDetail);
// router.get('/deleteUserDetail',isAuth, UserDetail.deleteUserDetail);
 

module.exports = router 