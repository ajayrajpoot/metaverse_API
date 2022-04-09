

exports.addfeeling_image = async (req, res, next) => {
    var p = req.body;

    try {

        // const result = await readDB.query(`SELECT id, image, timestemp FROM feeling_image WHERE 1 `);
        const result = await writeDB.query(`INSERT INTO feeling_image SET ?   `, p);

        console.log(__line,result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add Feeling Image.', Result: true ,id:result.insertId });
        } else {
            res.json({ Message: 'Fail to Add Feeling Image.', Result: false });
        } 

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatefeeling_image = async (req, res, next) => {
    var p = req.body;

    try {
        // const result = await readDB.query(`SELECT id, image, timestemp FROM feeling_image WHERE 1 `);
        const result = await writeDB.query(`UPDATE feeling_image SET  image= ? where id= ? `, p.image, p.id);

        console.log(__line,result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Update Feeling Image.', Result: true , id:result.insertId });
        } else {
            res.json({ Message: 'Fail to Update Feeling Image.', Result: false });
        } 

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getfeeling_image = async (req, res, next) => {

    try {

        const result = await readDB.query(`SELECT id, image, timestemp FROM feeling_image WHERE 1 `);

        console.log(">>>>>", result)
        res.json({ data: result, Message: 'feeling data.', Result: true });

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletefeeling_image = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM feeling_image WHERE  id=? `, id);

        console.log(">>>>>", result);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete Feeling Image.', Result: true });
        } else {
            res.json({ Message: 'Delete Feeling Image.', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
