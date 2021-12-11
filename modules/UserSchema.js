const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    phoneno: String,
    email: String,
    pwd: String,
    password: String,
    bio: String,
    gender: String,
    bithday: String,
    profile: String,
    pic: String


    // name: String,
    // Email: String,
    // Password: String,
    // Image: String,
    // JobRole: String,
    // CompanyName: String
}, { collection: 'user' });
module.exports = mongoose.model('user', UserSchema) 
