

exports.addchroist_tv = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO chroist_tv SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add chroist_tv .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add chroist_tv .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatechroist_tv = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // id
            url: p.url,
            description: p.description,
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE chroist_tv SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO chroist_tv SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update chroist_tv .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update chroist_tv .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getchroist_tv = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM chroist_tv WHERE 1 `);
        console.log(__line, result)
 
        res.json({ Data: result, Message: 'chroist_tv list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletechroist_tv = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM chroist_tv WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete chroist_tv .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete chroist_tv .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
