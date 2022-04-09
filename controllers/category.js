

exports.addcategory = async (req, res, next) => {
    var p = req.body;

    try { 

        // const result = await readDB.query(`SELECT id, category, timestemp FROM category WHERE 1 `);
        const result = await writeDB.query(`INSERT INTO category SET ?   `, p);


        if (result.affectedRows > 0) {
            res.json({ Message: 'Add category .', Result: true });
        } else {
            res.json({ Message: 'Fail to Add category .', Result: false });
        } 

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatecategory = async (req, res, next) => {
    var p = req.body;

    console.log(">>>",p)
    try {
        // const result = await readDB.query(`SELECT id, image, timestemp FROM feeling_image WHERE 1 `);
        const result = await writeDB.query(`UPDATE category SET  category= ?, image=? where id= ? `, p.category, p.image, p.id);

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
exports.getcategory = async (req, res, next) => {

    try {

        const result = await readDB.query(`SELECT id, category, timestemp FROM category WHERE 1 `);

        console.log(">>>>>", result)

        res.json({ data: result, Message: 'feeling data.', Result: true });

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletecategory = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await readDB.query(`DELETE FROM category WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'delete category .', Result: true });
        } else {
            res.json({ Message: 'Fail to delete category .', Result: false });
        } 

         

    } catch (error) {
        
        res.json({ Message: error.message, response: error, Result: false });

    }
};
