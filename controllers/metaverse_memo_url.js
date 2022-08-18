exports.getmetaverse_memo_url = async (req, res, next) => {

    try {
 
        let result = await readDB.query(`SELECT * FROM metaverse_memo_url WHERE 1 `);
        console.log(__line, result)
 

        res.json({ data: result, Message: 'metaverse_memo_url list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_memo_url = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_memo_url SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_memo_url .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_memo_url .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_memo_url = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_memo_url SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_memo_url .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_memo_url .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_memo_url = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_memo_url WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_memo_url .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_memo_url .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
