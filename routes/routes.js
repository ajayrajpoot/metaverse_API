var express = require('express');
var router = express.Router();

const user = require('../controllers/User');
const shop = require('../controllers/shop');
const metaverse_smachup = require('../controllers/metaverse_smachup');
const smachup = require('../controllers/smachup');
const shop_rent_item = require('../controllers/shop_rent_item');
const metaverse_land_shop = require('../controllers/metaverse_land_shop');
const metaverse_token_shop = require('../controllers/metaverse_token_shop');
const grocery_products = require('../controllers/grocery_products');
const chroist_tv = require('../controllers/chroist_tv');
const movies = require('../controllers/movies');
const metaverse_formers_places = require('../controllers/metaverse_formers_places');
const metaverse_formers_places_music = require('../controllers/metaverse_formers_places_music');
const metaverse_memo_url = require('../controllers/metaverse_memo_url');
const metaverse_invite_collaborating_request = require('../controllers/metaverse_invite_collaborating_request');
const metaverse_free_avatar_things = require('../controllers/metaverse_free_avatar_things');
const metaverse_games = require('../controllers/metaverse_games');
const show_theaters_event = require('../controllers/show_theaters_event');
const metaverse_worlds = require('../controllers/metaverse_worlds');
const buy_rent = require('../controllers/buy_rent');
const buy = require('../controllers/buy');
const stickers = require('../controllers/stickers');
const my_collecting = require('../controllers/my_collecting');
const stories = require('../controllers/stories');
const followers = require('../controllers/followers');
const subscribe = require('../controllers/subscribe');
const wallet_transaction = require('../controllers/wallet_transaction');
const wallet = require('../controllers/wallet');
const hashtag = require('../controllers/hashtag');
const pay_later = require('../controllers/pay_later');
const posts = require('../controllers/post');
const metaverse_shop = require('../controllers/metaverse_shop');
const metaverse_chroist_tv = require('../controllers/metaverse_chroist_tv');

const feeling_image = require('../controllers/feeling_image');
const category = require('../controllers/category');
const category_grocery_shop = require('../controllers/category_grocery_shop');
const metaverse_thing_shop = require('../controllers/metaverse_thing_shop');
const my_story_memo = require('../controllers/my_story_memo');


const accidental_facility_accident_messgae = require('../controllers/accidental_facility_accident_messgae');
const accidental_facility_history = require('../controllers/accidental_facility_history');
const my_intreste_senstive_brand_my_intrest = require('../controllers/my_intreste_senstive_brand_my_intrest');
const seller_auth = require('../controllers/seller_auth');
const chroist_camp_ownear_inventory_order = require('../controllers/chroist_camp_ownear_inventory_order'); 
const my_things_metaverse = require('../controllers/my_things_metaverse');
const vr_booking_online_api = require('../controllers/vr_booking_online_api');


//--------------14-08 2022
// const exchange_tv_ac_refigartor_smart_phone_laptop_brands = require('../controllers/exchange_tv_ac_refigartor_smart_phone_laptop_brands');
// const logout = require('../controllers/logout');
// const report_reason = require('../controllers/report_reason');
// const shop_category = require('../controllers/shop_category');
// const shop_search_history = require('../controllers/shop_search_history');
// const tv_search_history = require('../controllers/tv_search_history');



 

// const isAuth = require('../middleware/is-auth');

router.get('/test', (req, res) => { res.json({ mess: "API" }) })

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


router.get('/getmetaverse_formers_places', metaverse_formers_places.getmetaverse_formers_places);
router.post('/addmetaverse_formers_places', metaverse_formers_places.addmetaverse_formers_places);
router.post('/updatemetaverse_formers_places', metaverse_formers_places.updatemetaverse_formers_places);
router.get('/deletemetaverse_formers_places', metaverse_formers_places.deletemetaverse_formers_places);


router.get('/getmetaverse_formers_places_music', metaverse_formers_places_music.getmetaverse_formers_places_music);
router.post('/addmetaverse_formers_places_music', metaverse_formers_places_music.addmetaverse_formers_places_music);
router.post('/updatemetaverse_formers_places_music', metaverse_formers_places_music.updatemetaverse_formers_places_music);
router.get('/deletemetaverse_formers_places_music', metaverse_formers_places_music.deletemetaverse_formers_places_music);

router.get('/getmetaverse_invite_collaborating_request', metaverse_invite_collaborating_request.getmetaverse_invite_collaborating_request);
router.post('/addmetaverse_invite_collaborating_request', metaverse_invite_collaborating_request.addmetaverse_invite_collaborating_request);
router.post('/updatemetaverse_invite_collaborating_request', metaverse_invite_collaborating_request.updatemetaverse_invite_collaborating_request);
router.get('/deletemetaverse_invite_collaborating_request', metaverse_invite_collaborating_request.deletemetaverse_invite_collaborating_request);


router.get('/getmetaverse_free_avatar_things', metaverse_free_avatar_things.getmetaverse_free_avatar_things);
router.post('/addmetaverse_free_avatar_things', metaverse_free_avatar_things.addmetaverse_free_avatar_things);
router.post('/updatemetaverse_free_avatar_things', metaverse_free_avatar_things.updatemetaverse_free_avatar_things);
router.get('/deletemetaverse_free_avatar_things', metaverse_free_avatar_things.deletemetaverse_free_avatar_things);




router.get('/getmetaverse_games', metaverse_games.getmetaverse_games);
router.post('/addmetaverse_games', metaverse_games.addmetaverse_games);
router.post('/updatemetaverse_games', metaverse_games.updatemetaverse_games);
router.get('/deletemetaverse_games', metaverse_games.deletemetaverse_games);


router.get('/getshow_theaters_event', show_theaters_event.getshow_theaters_event);
router.post('/addshow_theaters_event', show_theaters_event.addshow_theaters_event);
router.post('/updateshow_theaters_event', show_theaters_event.updateshow_theaters_event);
router.get('/deleteshow_theaters_event', show_theaters_event.deleteshow_theaters_event);


router.get('/getmetaverse_worlds', metaverse_worlds.getmetaverse_worlds);
router.post('/addmetaverse_worlds', metaverse_worlds.addmetaverse_worlds);
router.post('/updatemetaverse_worlds', metaverse_worlds.updatemetaverse_worlds);
router.get('/deletemetaverse_worlds', metaverse_worlds.deletemetaverse_worlds);


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



router.get('/getpost', posts.getpost);
router.post('/addpost', posts.addpost);
router.post('/updatepost', posts.updatepost);
router.get('/deletepost', posts.deletepost);



router.get('/getstories', stories.getstories);
router.post('/addstories', stories.addstories);
router.post('/updatestories', stories.updatestories);
router.get('/deletestories', stories.deletestories);




router.get('/myfollowers', followers.myfollowers);
router.post('/follow', followers.addfollowers);
router.get('/unfollow', followers.unfollow);

router.get('/mysubscriber', subscribe.mysubscriber);
router.post('/subscribe', subscribe.mysubscriber);
router.get('/unsubscribe', subscribe.unsubscribe);



router.get('/getwallet', wallet.getwallet);
router.post('/addwallet', wallet.addwallet);
router.post('/updatewallet', wallet.updatewallet);
router.get('/deletewallet', wallet.deletewallet);

router.get('/getBalance', wallet_transaction.getBalance);
router.get('/getwallet_transaction', wallet_transaction.getwallet_transaction);
router.get('/getwallet_transaction_all', wallet_transaction.getwallet_transaction_all);
router.post('/addwallet_transaction', wallet_transaction.addwallet_transaction);
router.post('/updatewallet_transaction', wallet_transaction.updatewallet_transaction);
router.get('/deletewallet_transaction', wallet_transaction.deletewallet_transaction);



router.get('/getpay_later', pay_later.getpay_later);
router.post('/addpay_later', pay_later.addpay_later);
router.post('/updatepay_later_status', pay_later.updatepay_later_status);
router.get('/deletepay_later', pay_later.deletepay_later);



router.get('/gethashtag', hashtag.gethashtag);
router.post('/addhashtag', hashtag.addhashtag);
router.post('/updatehashtag', hashtag.updatehashtag);
router.get('/deletehashtag', hashtag.deletehashtag);


router.get('/getmy_collecting', my_collecting.getmy_collecting);
router.post('/addmy_collecting', my_collecting.addmy_collecting);
router.post('/updatemy_collecting', my_collecting.updatemy_collecting);
router.get('/deletemy_collecting', my_collecting.deletemy_collecting);


router.get('/getstickers', stickers.getstickers);
router.post('/addstickers', stickers.addstickers);
router.post('/updatestickers', stickers.updatestickers);
router.get('/deletestickers', stickers.deletestickers);

router.get('/getmetaverse_memo_url', metaverse_memo_url.getmetaverse_memo_url);
router.post('/addmetaverse_memo_url', metaverse_memo_url.addmetaverse_memo_url);
router.post('/updatemetaverse_memo_url', metaverse_memo_url.updatemetaverse_memo_url);
router.get('/deletemetaverse_memo_url', metaverse_memo_url.deletemetaverse_memo_url);

router.get('/getmy_story_memo', my_story_memo.getmy_story_memo);
router.post('/addmy_story_memo', my_story_memo.addmy_story_memo);
router.post('/updatemy_story_memo', my_story_memo.updatemy_story_memo);
router.get('/deletemy_story_memo', my_story_memo.deletemy_story_memo);

const metaverse_friends_request = require('../controllers/metaverse_friends_request');
router.get('/getmetaverse_friends_request', metaverse_friends_request.getmetaverse_friends_request);
router.post('/addmetaverse_friends_request', metaverse_friends_request.addmetaverse_friends_request);
router.post('/updatemetaverse_friends_request', metaverse_friends_request.updatemetaverse_friends_request);
router.get('/deletemetaverse_friends_request', metaverse_friends_request.deletemetaverse_friends_request);
 
const chroist_memo = require('../controllers/chroist_memo');
router.get('/getchroist_memo', chroist_memo.getchroist_memo);
router.post('/addchroist_memo', chroist_memo.addchroist_memo);
router.post('/updatechroist_memo', chroist_memo.updatechroist_memo);
router.get('/deletechroist_memo', chroist_memo.deletechroist_memo);


const relation = require('../controllers/relation');
router.get('/getrelation', relation.getrelation);
router.post('/addrelation', relation.addrelation);
router.post('/updaterelation', relation.updaterelation);
router.get('/deleterelation', relation.deleterelation);

const metaverse_my_events_theater_tickets = require('../controllers/metaverse_my_events_theater_tickets');
router.get('/getmetaverse_my_events_theater_tickets', metaverse_my_events_theater_tickets.getmetaverse_my_events_theater_tickets);
router.post('/addmetaverse_my_events_theater_tickets', metaverse_my_events_theater_tickets.addmetaverse_my_events_theater_tickets);
router.post('/updatemetaverse_my_events_theater_tickets', metaverse_my_events_theater_tickets.updatemetaverse_my_events_theater_tickets);
router.get('/deletemetaverse_my_events_theater_tickets', metaverse_my_events_theater_tickets.deletemetaverse_my_events_theater_tickets);

//---30 -07 -2022

router.get('/getmy_intreste_senstive_brand_my_intrest', my_intreste_senstive_brand_my_intrest.getmy_intreste_senstive_brand_my_intrest);
router.post('/addmy_intreste_senstive_brand_my_intrest', my_intreste_senstive_brand_my_intrest.addmy_intreste_senstive_brand_my_intrest);
router.post('/updatemy_intreste_senstive_brand_my_intrest', my_intreste_senstive_brand_my_intrest.updatemy_intreste_senstive_brand_my_intrest);
router.get('/deletemy_intreste_senstive_brand_my_intrest', my_intreste_senstive_brand_my_intrest.deletemy_intreste_senstive_brand_my_intrest);


router.get('/getseller_auth', seller_auth.getseller_auth);
router.post('/addseller_auth', seller_auth.addseller_auth);
router.post('/updateseller_auth', seller_auth.updateseller_auth);
router.get('/deleteseller_auth', seller_auth.deleteseller_auth);


router.get('/getaccidental_facility_accident_messgae', accidental_facility_accident_messgae.getaccidental_facility_accident_messgae);
router.post('/addaccidental_facility_accident_messgae', accidental_facility_accident_messgae.addaccidental_facility_accident_messgae);
router.post('/updateaccidental_facility_accident_messgae', accidental_facility_accident_messgae.updateaccidental_facility_accident_messgae);
router.get('/deleteaccidental_facility_accident_messgae', accidental_facility_accident_messgae.deleteaccidental_facility_accident_messgae);


router.get('/getaccidental_facility_history', accidental_facility_history.getaccidental_facility_history);
router.post('/addaccidental_facility_history', accidental_facility_history.addaccidental_facility_history);
router.post('/updateaccidental_facility_history', accidental_facility_history.updateaccidental_facility_history);
router.get('/deleteaccidental_facility_history', accidental_facility_history.deleteaccidental_facility_history);
 

router.get('/getchroist_camp_ownear_inventory_order', chroist_camp_ownear_inventory_order.getchroist_camp_ownear_inventory_order);
router.post('/addchroist_camp_ownear_inventory_order', chroist_camp_ownear_inventory_order.addchroist_camp_ownear_inventory_order);
router.post('/updatechroist_camp_ownear_inventory_order', chroist_camp_ownear_inventory_order.updatechroist_camp_ownear_inventory_order);
router.get('/deletechroist_camp_ownear_inventory_order', chroist_camp_ownear_inventory_order.deletechroist_camp_ownear_inventory_order);

router.get('/getmy_things_metaverse', my_things_metaverse.getmy_things_metaverse);
router.post('/addmy_things_metaverse', my_things_metaverse.addmy_things_metaverse);
router.post('/updatemy_things_metaverse', my_things_metaverse.updatemy_things_metaverse);
router.get('/deletemy_things_metaverse', my_things_metaverse.deletemy_things_metaverse);

router.get('/getvr_booking_online_api', vr_booking_online_api.getvr_booking_online_api);
router.post('/addvr_booking_online_api', vr_booking_online_api.addvr_booking_online_api);
router.post('/updatevr_booking_online_api', vr_booking_online_api.updatevr_booking_online_api);
router.get('/deletevr_booking_online_api', vr_booking_online_api.deletevr_booking_online_api);

//--------------14-08 2022


// router.get('/getexchange_tv_ac_refigartor_smart_phone_laptop_brands', exchange_tv_ac_refigartor_smart_phone_laptop_brands.getexchange_tv_ac_refigartor_smart_phone_laptop_brands);
// router.post('/addexchange_tv_ac_refigartor_smart_phone_laptop_brands', exchange_tv_ac_refigartor_smart_phone_laptop_brands.addexchange_tv_ac_refigartor_smart_phone_laptop_brands);
// router.post('/updateexchange_tv_ac_refigartor_smart_phone_laptop_brands', exchange_tv_ac_refigartor_smart_phone_laptop_brands.updateexchange_tv_ac_refigartor_smart_phone_laptop_brands);
// router.get('/deleteexchange_tv_ac_refigartor_smart_phone_laptop_brands', exchange_tv_ac_refigartor_smart_phone_laptop_brands.deleteexchange_tv_ac_refigartor_smart_phone_laptop_brands);



// router.get('/getlogout', logout.getlogout);
// router.post('/addlogout', logout.addlogout); 


// router.get('/getreport_reason', report_reason.getreport_reason);
// router.post('/addreport_reason', report_reason.addreport_reason);
// router.post('/updatereport_reason', report_reason.updatereport_reason);
// router.get('/deletereport_reason', report_reason.deletereport_reason);



// router.get('/getshop_category', shop_category.getshop_category);
// router.post('/addshop_category', shop_category.addshop_category);
// router.post('/updateshop_category', shop_category.updateshop_category);
// router.get('/deleteshop_category', shop_category.deleteshop_category);



// router.get('/getshop_search_history', shop_search_history.getshop_search_history);
// router.post('/addshop_search_history', shop_search_history.addshop_search_history);
// router.post('/updateshop_search_history', shop_search_history.updateshop_search_history);
// router.get('/deleteshop_search_history', shop_search_history.deleteshop_search_history);



// router.get('/gettv_search_history', tv_search_history.gettv_search_history);
// router.post('/addtv_search_history', tv_search_history.addtv_search_history);
// router.post('/updatetv_search_history', tv_search_history.updatetv_search_history);
// router.get('/deletetv_search_history', tv_search_history.deletetv_search_history);

module.exports = router 