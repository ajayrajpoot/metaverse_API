exports.getmovies = async (req, res, next) => {

    try {
 

        let result = await readDB.query(`SELECT * FROM movies WHERE 1 `);
        console.log(__line, result)
 

        res.json({ Data: result, Message: 'movies list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmovies = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO movies SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add movies .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add movies .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemovies = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        delete obj.id;
        const result = await writeDB.query(`UPDATE movies SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update movies .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update movies .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemovies = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM movies WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete movies .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete movies .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
