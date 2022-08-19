

exports.addhashtag  = async (req, res, next) => {
    var p = req.body;

    try {

        let obj =  { 
            hashtag:p.hashtag
        }
        const result = await writeDB.query(`INSERT INTO hashtag  SET ?   `, obj);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add hashtag  .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add hashtag  .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatehashtag  = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj =  { 
            hashtag:p.hashtag
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE hashtag  SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update hashtag  .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update hashtag  .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.gethashtag  = async (req, res, next) => {

    try { 

        let result = await readDB.query(`SELECT * FROM hashtag  `);
        console.log(__line, result)

        res.json({ Data: result, Message: 'hashtag  list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletehashtag  = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM hashtag  WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete hashtag  .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete hashtag  .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
