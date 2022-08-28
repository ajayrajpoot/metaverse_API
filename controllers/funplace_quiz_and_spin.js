

exports.addfunplace_quiz_and_spin = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO funplace_quiz_and_spin SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add funplace_quiz_and_spin .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add funplace_quiz_and_spin .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatefunplace_quiz_and_spin = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);
    
        delete obj.id;
        const result = await writeDB.query(`UPDATE funplace_quiz_and_spin SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO funplace_quiz_and_spin SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update funplace_quiz_and_spin .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update funplace_quiz_and_spin .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getfunplace_quiz_and_spin = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT * FROM funplace_quiz_and_spin WHERE ${condition} `);

        res.json({ Data: result, Message: 'funplace_quiz_and_spin list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletefunplace_quiz_and_spin = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM funplace_quiz_and_spin WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete funplace_quiz_and_spin .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete funplace_quiz_and_spin .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
