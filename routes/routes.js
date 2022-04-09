var express = require('express');
var router = express.Router(); 

var user = require('../controllers/User');
var shop = require('../controllers/shop');
var metaverse_land_shop = require('../controllers/metaverse_land_shop');
var metaverse_token_shop = require('../controllers/metaverse_token_shop');
var grocery_products = require('../controllers/grocery_products');
var chroist_tv = require('../controllers/chroist_tv');
var movies = require('../controllers/movies');
var metaverse_shop = require('../controllers/metaverse_shop');


var products_ads = require('../controllers/products_ads');

var feeling_image = require('../controllers/feeling_image');
var category = require('../controllers/category');

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

router.get('/getshops', shop.getshops);
router.post('/addshop', shop.addshop);
router.post('/updateshop', shop.updateshop);
router.get('/deleteshop', shop.deleteshop);

router.get('/getmetaverse_land_shop', metaverse_land_shop.getmetaverse_land_shop);
router.post('/addmetaverse_land_shop', metaverse_land_shop.addmetaverse_land_shop);
router.post('/updatemetaverse_land_shop', metaverse_land_shop.updatemetaverse_land_shop);
router.get('/deletemetaverse_land_shop', metaverse_land_shop.deletemetaverse_land_shop);


router.get('/getmetaverse_token_shop', metaverse_token_shop.getmetaverse_token_shop);
router.post('/addmetaverse_token_shop', metaverse_token_shop.addmetaverse_token_shop);
router.post('/updatemetaverse_token_shop', metaverse_token_shop.updatemetaverse_token_shop);
router.get('/deletemetaverse_token_shop', metaverse_token_shop.deletemetaverse_token_shop);


router.get('/getgrocery_products', grocery_products.getgrocery_products);
router.post('/addgrocery_products', grocery_products.addgrocery_products);
router.post('/updategrocery_products', grocery_products.updategrocery_products);
router.get('/deletegrocery_products', grocery_products.deletegrocery_products);


router.get('/getchroist_tv', chroist_tv.getchroist_tv);
router.post('/addchroist_tv', chroist_tv.addchroist_tv);
router.post('/updatechroist_tv', chroist_tv.updatechroist_tv);
router.get('/deletechroist_tv', chroist_tv.deletechroist_tv);


router.get('/getmovies', movies.getmovies);
router.post('/addmovies', movies.addmovies);
router.post('/updatemovies', movies.updatemovies);
router.get('/deletemovies', movies.deletemovies);


router.get('/getmetaverse_shop', metaverse_shop.getmetaverse_shop);
router.post('/addmetaverse_shop', metaverse_shop.addmetaverse_shop);
router.post('/updatemetaverse_shop', metaverse_shop.updatemetaverse_shop);
router.get('/deletemetaverse_shop', metaverse_shop.deletemetaverse_shop);



module.exports = router 