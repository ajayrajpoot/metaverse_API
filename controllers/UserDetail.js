var UserDetail = require('../modules/UserDetailSchema');
const mongoose = require('mongoose');

exports.addUserDetail = async (req, res, next) => {
    var p = req.body;
    //p.userId= mongoose.Types.ObjectId(p.userId)
    try {
        const userDetail = new UserDetail(p);

        var result = await userDetail.save()
            .then(result => {
                return result;
            });
        res.status(201).json({ message: 'Add User detail Successfull', _id: result._id, Result: true });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }

}
exports.getUserDetail = async (req, res) => {
    try {
        var user = await UserDetail.find({ userId: req.query.userId });
        res.send({ User: user });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}
exports.updateUserDetail = async (req, res) => { 
    UserDetail.update({ _id: mongoose.Types.ObjectId( req.body._id) }, req.body, { upsert: true })
        .then(data => {
            res.json(data);
        })
}
exports.getUserDetail = async (req, res) => {
    try {
        var userDetail = await UserDetail.find();
        res.send({ User: userDetail });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}
exports.deleteUserDetail = async (req, res) => {
    try {
        var result = await User.deleteOne({ _id: req.query._id }, { isDeleted: 1 });
        if (result.ok == 1) {
            res.status(201).json({ Message: 'Delete User Detail!', response: result, Result: true });
        } else {
            res.status(201).json({ Message: 'Not Delete User  Detail!', response: result, Result: false });
        }
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}