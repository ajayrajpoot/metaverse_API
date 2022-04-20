

exports.subscribe = async (req, res, next) => {
    var p = req.query;

    try {

        // const subscriber_id = req.query.subscriber_id;
        // const user_id = req.query.user_id;
        const result = await writeDB.query(`INSERT INTO subscribe SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add subscribe .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add subscribe .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}
 

exports.mysubscriber = async (req, res, next) => {

    try {
            let condition =` where user_id = ${req.query.user_id} `;  

        let result = await readDB.query(`SELECT u.* FROM subscribe as s join users as u on u.id=s.user_id  WHERE ${condition} `); 

        res.json({ data: result, Message: 'subscriber list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.unsubscribe = async (req, res, next) => {

    try {
        const subscriber_id = req.query.subscriber_id;
        const user_id = req.query.user_id;

        const result = await writeDB.query(`DELETE FROM subscribe WHERE user_id = ? and  subscriber_id=? `, [user_id, subscriber_id]);

        if (result.affectedRows > 0) {
            res.json({ Message: ' Unsubscribe .', Result: true });
        } else {
            res.json({ Message: 'Fail to  Unsubscribe .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
