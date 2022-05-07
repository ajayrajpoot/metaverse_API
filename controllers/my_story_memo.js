exports.getmy_story_memo = async (req, res, next) => {

    try {

        let result = await readDB.query(`SELECT * FROM my_story_memo WHERE 1 `);
        console.log(__line, result);

        res.json({ data: result, Message: 'my_story_memo list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.addmy_story_memo = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO my_story_memo SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add my_story_memo .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add my_story_memo .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemy_story_memo = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // id: p.id,
            story_url: p.story_url,
            is_archive: p.is_archive,
            timestemp: p.timestemp,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE my_story_memo SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO my_story_memo SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update my_story_memo .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update my_story_memo .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemy_story_memo = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM my_story_memo WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete my_story_memo .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete my_story_memo .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
