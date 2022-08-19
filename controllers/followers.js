

exports.addfollowers = async (req, res, next) => {
    var p = req.body;

    try {
        let obj =  {
            // "id": "",
            "user_id": p.user_id,
            "follower_id": p.follower_id
        }

        const result = await writeDB.query(`INSERT INTO followers SET ?   `, obj);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add followers .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add followers .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}
 
exports.myfollowers = async (req, res, next) => {

    try { 

            let condition =` where user_id = ${req.query.user_id} `; 
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT u.name ,u.email, u.profileimage FROM followers as f join users as u join f.follower_id=u.id  ${condition} `);
        
        res.json({ Data: result, Message: 'followers list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.unfollow = async (req, res, next) => {

    try {
        const follower_id = req.query.follower_id;
        const user_id = req.query.user_id;
        const result = await writeDB.query(`DELETE FROM followers WHERE follower_id=? and user_id =? `, [follower_id, user_id]);

        if (result.affectedRows > 0) {
            res.json({ Message: ' followers .', Result: true });
        } else {
            res.json({ Message: 'Fail to Unfollowers .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
