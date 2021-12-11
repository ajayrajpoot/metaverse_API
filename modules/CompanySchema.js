const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    CompanyName: String,
    Logo: String,
    Address: String,
    Uniqueuserscurrentlyviewing: String,
    Totalviews: String,
    UserId: String
}, { collection: 'Company' });


module.exports = mongoose.model('Company', CompanySchema) 
