exports.getchroist_memo = async (req, res, next) => {

    try {
 

        let result = await readDB.query(`SELECT * FROM chroist_memo WHERE 1 `);
        console.log(__line, result)

       
        res.json({ Data: result, Message: 'chroist_memo list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addchroist_memo = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO chroist_memo SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add chroist_memo .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add chroist_memo .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatechroist_memo = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);
 
        delete obj.id;
        const result = await writeDB.query(`UPDATE chroist_memo SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO chroist_memo SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update chroist_memo .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update chroist_memo .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletechroist_memo = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM chroist_memo WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete chroist_memo .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete chroist_memo .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
