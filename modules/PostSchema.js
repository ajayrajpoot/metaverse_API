const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    Heading: String,
    Discriprion: String,
    Date: { type: Date, default: new Date() },
    CreatedBy: String
}, { collection: 'Post' });

module.exports = mongoose.model('Post', PostSchema) 