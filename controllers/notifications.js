

exports.addnotifications = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO notifications SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Add notifications .', Result: true });
        } else {
            res.json({ Message: 'Fail to Add notifications .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getnotifications = async (req, res, next) => {

    try {

        const result = await readDB.query(`SELECT * FROM notifications WHERE 1 `);

        console.log(">>>>>", result)

        res.json({ Data: result, Message: 'notifications data.', Result: true });

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.getnotificationsbyuser = async (req, res, next) => {

    try {

        const result = await readDB.query(`SELECT n.*, u.name, u.username, u.phone_no  FROM notifications as n join notifications_user as nu on n.id = nu.notifications_id join users as u on u.id = n.cretate_by WHERE nu.user_id = ? `, req.query.user_id);

        res.json({ Data: result, Message: 'notifications data.', Result: true });

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
exports.createStreamNotifications = async (req, res, next) => {
    var p = req.body;

    try {
        const result = await writeDB.query(`INSERT INTO notifications SET ?   `, p);
        
        
        if (result.affectedRows) {
            const notifications_id = result.insertId; 

            const result1 = await readDB.query(`SELECT id, user_id, follower_id FROM followers WHERE user_id = ?  `, p.cretate_by);
            
            result1.forEach((el) => {
                const v = { notifications_id: notifications_id, user_id: el.follower_id };
                const result = writeDB.query(`INSERT INTO notifications_user SET ?   `, v);
            });

            if (result.affectedRows) {
                res.json({ Message: 'Add notifications .', Result: true });
            } else {
                res.json({ Message: 'Fail to Add notifications .', Result: false });
            }
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}
exports.updatenotifications = async (req, res, next) => {
    var p = req.body;

    try {
        let obj = Object.assign({}, p);

        delete obj.id;
        const result = await writeDB.query(`UPDATE notifications SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update notifications .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update notifications .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}