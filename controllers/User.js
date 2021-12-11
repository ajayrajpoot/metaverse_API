var User = require('../modules/UserSchema');
const io = require('../socket');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res, next) => {
    var p = req.body;

    try {
        var hashedPw = await bcrypt
            .hash(p.password, 12)
            .then(hashedPw => {
                return hashedPw
            })

            console.log(p)
        const user = new User(p);

        var result = await user.save()
            .then(result => {
                return result;
            });
        res.status(201).json({ message: 'User created', userId: result._id, Result: true });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }

}
exports.login = async (req, res, next) => {
    const Email = req.query.email;
    const Password = req.query.password;
    let loadedUser;

    try {

        var user = await User.findOne({ email: Email });

        if (!user) {
            res.status(200).json({ Message: 'A user with this email(' + Email + ') could not be found.', Result: false });
        }
        loadedUser = user;

        // var isEqual = await bcrypt.compare(Password, user.Password);
        var isEqual =  Password== user.password;

        if (!isEqual) {
            const error = new Error('Wrong password!');
            error.statusCode = 200;
            res.status(200).json({ Message: "'Wrong password!'", Result: false });
            throw error;
        };

        const token = jwt.sign(
            {
                email: loadedUser.Email,
                userId: loadedUser._id.toString()
            },
            'somesupersecretsecret',
            { expiresIn: '8760h' }
        );
        res.status(200).json({
            token: token, userId: loadedUser._id.toString(), Result: true, loadedUser  
        });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });

    }
};
exports.getLiveUser = async (req, res, next) => {

    try {
        var liveUser = require('./socket').getNoOfUserConnected();
        res.status(200).json({ liveUser: liveUser });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });

    }
};
exports.getMyProfile = async (req, res) => {
    try {
        var user = await User.find({ _id: req.query._id });
        res.send({ User: user });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}
exports.addUser = async (req, res) => {
    console.log("req.body", req.body)
    User.update({ Email: req.body.Email }, req.body, { upsert: true })
        .then(data => {
            res.json(data);
        })
}
exports.getUser = async (req, res) => {
    try {
        var user = await User.find();
        res.send({ User: user });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}
exports.deleteUser = async (req, res) => {
    try {
        var result = await User.deleteOne({ _id: req.query._id }, { isDeleted: 1 });
        if (result.ok == 1) {
            res.status(201).json({ Message: 'Delete User!', response: result, Result: true });
        } else {
            res.status(201).json({ Message: 'Not Delete User !', response: result, Result: false });
        }
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}