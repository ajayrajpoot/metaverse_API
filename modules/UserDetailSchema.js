const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDetailSchema = new Schema({
    userId:String,
    question: {
        required:false,
        type:String
    },
    answer: {
        required:false,
        type:String
    },
    name: String,
    companyname: String,
    imageAddress: String,
    videoAddress: String,
    websiteLink: String
 
}, { collection: 'userDetail' });
module.exports = mongoose.model('userDetail', UserDetailSchema) 
