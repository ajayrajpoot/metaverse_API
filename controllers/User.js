var User = require('../modules/UserSchema');
const io = require('../socket');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let otpcode = [{ "code": 1234, "id": 1 }]
const assert = require('assert');


exports.signup = async (req, res, next) => {
    var p = req.body;

    console.log("............",p)


    try {

        // var hashedPw = await bcrypt
        //     .hash(p.password, 12)
        //     .then(hashedPw => {
        //         return hashedPw
        //     })

        //     p.password = hashedPw;
        const result1 = await readDB.query(`SELECT  id FROM users WHERE email = ?`, p.email );
        
        if (result1.length > 0) {
            return res.json({ Message: 'Email Already Registor.', Result: false });
        }
        const result = await writeDB.query(`INSERT INTO users SET ?`, p);

        //     console.log(p)
        // const user = new User(p);

        // var result = await user.save()
        // .then(result => {
        //     return result;
        // });

        res.json({ Message: 'User created', Result: true });
    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.login = async (req, res, next) => {

    try {
        const username = req.body.username;
        const password = req.body.password;
        let loadedUser;

        const result = await readDB.query(`SELECT  id, username, name, gender, email,  phone_no, profileimage, avatarurl, bio, dirtof_birt, followers_count, metaverse_friends_count, suscribers, account_type
          FROM users WHERE (email=? or username=?) and password=? `, username, username, password);


        console.log(">>>>>", result)

        // var user = await User.findOne({ email: Email });

        if (!result) {
            res.json({ Message: 'A user with this email(' + email + ') could not be found.', Result: false });
        }
        loadedUser = result;

        // var isEqual = await bcrypt.compare(Password, user.Password);
        // var isEqual = Password == user.password;

        // if (!isEqual) {
        //     const error = new Error('Wrong password!');
        //     error.statusCode = 200;
        //     res.json({ Message: "'Wrong password!'", Result: false });
        //     throw error;
        // };

        const token = jwt.sign(
            {
                email: loadedUser.email,
                userId: loadedUser.id
            },
            'somesupersecretsecret',
            { expiresIn: '8760h' }
        );
        res.json({
            Result: true, loadedUser, token:token
        });
    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.getusers = async (req, res, next) => {

    try {
        // assert(req.query.id, 'no or invalid id provided');

        // const id = req.query.id;

        let condition = "";


        const result = await readDB.query(`SELECT  id, username, name, gender, email,  phone_no, profileimage, avatarurl, bio, dirtof_birt, followers_count, metaverse_friends_count, suscribers, account_type
          FROM users    `);


        res.json({
            Result: true, Data: result
        });
    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.profilebyid = async (req, res, next) => {

    try {
        assert(req.query.id, 'no or invalid id provided');

        const id = req.query.id;

        const result = await readDB.query(`SELECT  id, username, name, gender, email,  phone_no, profileimage, avatarurl, bio, dirtof_birt, followers_count, metaverse_friends_count, suscribers, account_type
          FROM users WHERE  id=? `, id);


        res.json({
            Result: true, Data: result
        });
    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.get_otp = async (req, res, next) => {

    try {
        assert(req.query.username, 'no or invalid username/email/phone_no provided');

        const username = req.query.username;
        const id = req.query.id;

        let code = Math.floor(Math.random() * 90000) + 10000;

        if (id) {

            let result1 = await writeDB.query(`UPDATE users SET otp = ${code} WHERE (id='${id}');`);

            console.log(__line, result1);

            if (result1.affectedRows == 0) {

                res.json({ Message: `Invalied id.`, Result: true });

            } else if (result1.affectedRows == 1) {

                res.json({ Message: `OTP  ${code} for Reset.`, Result: true });

            }

        } else {

            const result = await readDB.query(`SELECT  id, username, name, email,  phone_no, profileimage  FROM users WHERE email=? or username=? or phone_no=?; `, username, username, username);

            if (result.length == 0) {

                res.json({ Message: `Invalied username/phone no.`, Result: true });

            } else if (result.length == 1) {

                let result1 = await writeDB.query(`UPDATE users SET otp = ${code}   WHERE (email='${username}' or username='${username}' or phone_no='${username}');`);

                console.log(__line, result1);

                res.json({ Message: `OTP  ${code} for Reset.`, Result: true });

            } else if (result.length > 1) {

                res.json({ accountlist: result, Message: 'There is multiple account', Result: true });

            }
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.reset_password = async (req, res, next) => {
    try {

        assert(req.body.otp, 'no or invalid otp provided');
        assert(req.body.password, 'no or invalid password provided');

        const otp = req.body.otp;
        const password = req.body.password;

        let otpdetail = otpcode.find(data => data.id == otp);
        console.log(">>>", otpdetail)

        let result = await writeDB.query(`UPDATE users SET password = ? WHERE otp=?;`, password, otp);

        if (result.affectedRows > 0) {
            res.json({ Message: `  Reset Password.`, Result: true });
        } else {
            res.json({ Message: `Invaild OTP.`, Result: false });
        }


    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });

    }
};








exports.getLiveUser = async (req, res, next) => {

    try {
        var liveUser = require('./socket').getNoOfUserConnected();
        res.json({ liveUser: liveUser });
    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.getMyProfile = async (req, res) => {
    try {
        var user = await User.find({ _id: req.query._id });
        res.send({ User: user });
    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });
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
        res.json({ Message: error.message, response: error, Result: false });
    }
}
exports.deleteUser = async (req, res) => {
    try {
        var result = await User.deleteOne({ _id: req.query._id }, { isDeleted: 1 });
        if (result.ok == 1) {
            res.json({ Message: 'Delete User!', response: result, Result: true });
        } else {
            res.json({ Message: 'Not Delete User !', response: result, Result: false });
        }
    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });
    }
}