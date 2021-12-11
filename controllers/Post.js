var Post = require('../modules/PostSchema');
 
exports.addPost = async (req, res) => {  

    try {
        var p = {
            Heading: req.body.Heading,
            Discriprion: req.body.Discriprion,
            CreatedBy: req.body.CreatedBy
        }
        if (req.body._id == 0) {
            var post = new Post(p)
            var result = await post.save();
            if (result._id) {
                res.status(201).json({ Message: 'Add Post!', response: result, Result: true });
            } else {
                res.status(201).json({ Message: 'Not Add Post!', response: result, Result: false });
            }
        } else {
            var result = await Post.updateOne({ _id: req.body._id }, p, { upsert: true });

            if (result.ok == 1) {
                res.status(201).json({ Message: 'Update Post!', response: result, Result: true });
            } else {
                res.status(201).json({ Message: 'Note Update Post !', response: result, Result: false });
            }

        }
    } catch (e) {
        res.status(201).json({ Message: e.message, response: e, Result: false });
    }

}
exports.getPost = async (req, res) => {
    try {
        var post = await Post.find({});
        res.send({ Post: post });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}
exports.getPostByUser = async (req, res) => {
    try {
        var post = await Post.find({ CreatedBy: req.query.UserId });
        res.send({ Post: post });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}
exports.deletePost = async (req, res) => {
    try {
        var result = await Post.deleteOne({ _id: req.query._id }, { isDeleted: 1 });
        if (result.ok == 1) {
            res.status(201).json({ Message: 'Delete Post!', response: result, Result: true });
        } else {
            res.status(201).json({ Message: 'Not Delete Post !', response: result, Result: false });
        }
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}