

exports.addchatting_group = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO chatting_group SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add chatting_group .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add chatting_group .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatechatting_group = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);
    
        delete obj.id;
        const result = await writeDB.query(`UPDATE chatting_group SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO chatting_group SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update chatting_group .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update chatting_group .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getchatting_group = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT * FROM chatting_group WHERE ${condition} `);

        res.json({ Data: result, Message: 'chatting_group list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletechatting_group = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM chatting_group WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete chatting_group .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete chatting_group .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
