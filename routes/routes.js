var express = require('express');
var router = express.Router(); 

var user = require('../controllers/User');
var shop = require('../controllers/shop');
var metaverse_smachup = require('../controllers/metaverse_smachup');
var smachup = require('../controllers/smachup'); 
var shop_rent_item = require('../controllers/shop_rent_item');
var metaverse_land_shop = require('../controllers/metaverse_land_shop');
var metaverse_token_shop = require('../controllers/metaverse_token_shop');
var grocery_products = require('../controllers/grocery_products');
var chroist_tv = require('../controllers/chroist_tv');
var movies = require('../controllers/movies');
var buy_rent = require('../controllers/buy_rent');
var buy = require('../controllers/buy');
var post = require('../controllers/post');
var metaverse_shop = require('../controllers/metaverse_shop');
var metaverse_chroist_tv = require('../controllers/metaverse_chroist_tv');

var feeling_image = require('../controllers/feeling_image');
var category = require('../controllers/category');
var category_grocery_shop = require('../controllers/category_grocery_shop');
var metaverse_thing_shop = require('../controllers/metaverse_thing_shop');

const isAuth = require('../middleware/is-auth');
 
router.get('/', (req, res) => { res.json({ mess: "API" }) })
 
router.post('/signup', user.signup);
router.post('/login', user.login);
router.get('/getusers', user.getusers);
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

router.get('/getcategory_grocery_shop', category_grocery_shop.getcategory_grocery_shop);
router.post('/addcategory_grocery_shop', category_grocery_shop.addcategory_grocery_shop);
router.post('/updatecategory_grocery_shop', category_grocery_shop.updatecategory_grocery_shop);
router.get('/deletecategory_grocery_shop', category_grocery_shop.deletecategory_grocery_shop);

router.get('/getmetaverse_thing_shop', metaverse_thing_shop.getmetaverse_thing_shop);
router.post('/addmetaverse_thing_shop', metaverse_thing_shop.addmetaverse_thing_shop);
router.post('/updatemetaverse_thing_shop', metaverse_thing_shop.updatemetaverse_thing_shop);
router.get('/deletemetaverse_thing_shop', metaverse_thing_shop.deletemetaverse_thing_shop);

router.get('/getshops', shop.getshops);
router.post('/addshop', shop.addshop);
router.post('/updateshop', shop.updateshop);
router.get('/deleteshop', shop.deleteshop);

router.get('/getmetaverse_smachup', metaverse_smachup.getmetaverse_smachup);
router.post('/addmetaverse_smachup', metaverse_smachup.addmetaverse_smachup);
router.post('/updatemetaverse_smachup', metaverse_smachup.updatemetaverse_smachup);
router.get('/deletemetaverse_smachup', metaverse_smachup.deletemetaverse_smachup);

router.get('/getsmachup', smachup.getsmachup);
router.post('/addsmachup', smachup.addsmachup);
router.post('/updatesmachup', smachup.updatesmachup);
router.get('/deletesmachup', smachup.deletesmachup);


router.get('/getshop_rent_item', shop_rent_item.getshop_rent_item);
router.post('/addshop_rent_item', shop_rent_item.addshop_rent_item);
router.post('/updateshop_rent_item', shop_rent_item.updateshop_rent_item);
router.get('/deleteshop_rent_item', shop_rent_item.deleteshop_rent_item);

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


router.get('/getmetaverse_chroist_tv', metaverse_chroist_tv.getmetaverse_chroist_tv);
router.post('/addmetaverse_chroist_tv', metaverse_chroist_tv.addmetaverse_chroist_tv);
router.post('/updatemetaverse_chroist_tv', metaverse_chroist_tv.updatemetaverse_chroist_tv);
router.get('/deletemetaverse_chroist_tv', metaverse_chroist_tv.deletemetaverse_chroist_tv);



router.get('/getbuy', buy.getbuy);
router.post('/addbuy', buy.addbuy);
router.post('/updatebuy', buy.updatebuy);
router.get('/deletebuy', buy.deletebuy);



router.get('/getbuy_rent', buy_rent.getbuy_rent);
router.post('/addbuy_rent', buy_rent.addbuy_rent);
router.post('/updatebuy_rent', buy_rent.updatebuy_rent);
router.get('/deletebuy_rent', buy_rent.deletebuy_rent);



router.get('/getpost', post.getpost);
router.post('/addpost', post.addpost);
router.post('/updatepost', post.updatepost);
router.get('/deletepost', post.deletepost);


module.exports = router 