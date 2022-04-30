
exports.getbuy_rent = async (req, res, next) => {

    try {

        let result = await readDB.query(`SELECT  c.category_id , c.type_id , c.category , c.timestemp , c.active , t.ptype 
         FROM  category  as c join types as t on c.type_id=t.type_id WHERE   c.is_delete=0  `);
        console.log(__line, result)

        res.json({ DtResult: result, Message: 'category list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.add_category = async (req, res) => {
    var p = req.body;

    try {
        let par = {
            type_id: p.type_id,
            category: p.category,
            active: p.active
        }
        if (p.category_id == 0) {
            const result = await writeDB.query(`INSERT INTO category SET ?   `, par);

        } else {
            const result = await writeDB.query(`UPDATE category SET ? where type_id= ? `, par, p.category_id);
        }

        res.json({ Message: "", Status: 1, DtResult: [], ResultInt: 1 });

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message || error, Status: 0, DtResult: [], ResultInt: 0 });

    }

}


exports.delete_category = async (req, res) => {

    try {
        const category_id = req.query.category_id;
        const result = await writeDB.query(`UPDATE category SET is_delete=1 WHERE category_id =  ?  `, category_id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete category  .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete category  .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
