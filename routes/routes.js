var express = require('express');
var router = express.Router();
var api = require('../controllers/api');


router.get('/report50', api.Send50Report);
router.post('/mail', api.addtype);


// router.get('/hello', api.hello());
// router.get('/report50', api.Send50Report()); 
// router.get('/mail', api.SEND_MAIL(subject, msg)); 

// //=============type
router.get('/get_type', api.gettype);
router.post('/add_type', api.addtype);
router.get('/delete_type', api.deletetype);

// //=============category
router.get('/get_category', api.getcategory);
router.post('/add_category', api.addcategory);
router.get('/delete_category', api.deletecategory);


// //=============reports
router.get('/getReportByProductId', api.getReportByProductId);
router.get('/get_report', api.getreport);
router.get('/getsellreport', api.getsellreport);
router.post('/add_report', api.addreport);
router.post('/buyProduct', api.addreportNew);
router.get('/delete_report', api.deletereport);


// //=============reports
router.get('/get_buy', api.getbuy);
router.get('/getProductByID', api.getProductByID);
router.get('/getbuyProductList', api.getbuyProductList);
router.post('/add_buy', api.addbuy);
router.get('/delete_buy', api.deletebuy);

// //=============wallet
router.get('/get_balance', api.getBalance);
router.get('/get_legger', api.getLegger);



router.get('/getDepositLeggerMothsWise', api.getDepositLeggerMothsWise);

router.get('/getWithdrawLeggerMothsWise', api.getWithdrawLeggerMothsWise);



router.get('/get_legger_count', api.getTotaltLegger);
router.get('/wallet_deposit', api.wallet_deposit);
router.get('/wallet_withdraw', api.wallet_withdraw);
// router.get('/readconfig', api.readconfig);



router.get('/getreminder_note', api.getreminder_note);
router.post('/addreminder_note', api.addreminder_note);
router.get('/deletereminder_note', api.deletereminder_note);

module.exports = router;