exports.getrelation = async (req, res, next) => {

    try {
 

        let result = await readDB.query(`SELECT * FROM relation WHERE 1 `);
        console.log(__line, result)

       
        res.json({ Data: result, Message: 'relation list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addrelation = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO relation SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add relation .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add relation .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updaterelation = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            
            // id
            
            // id:p.id,
            name:p.name
            
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE relation SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO relation SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update relation .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update relation .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deleterelation = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM relation WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete relation .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete relation .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
