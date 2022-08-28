


exports.getchatting = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} from = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT * FROM chatting WHERE ${condition} `);

        res.json({ Data: result, Message: 'chatting list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.addchatting = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO chatting SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add chatting .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add chatting .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatechatting = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);
    
        delete obj.id;
        const result = await writeDB.query(`UPDATE chatting SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO chatting SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update chatting .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update chatting .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletechatting = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM chatting WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete chatting .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete chatting .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
