

exports.addshop_category = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO shop_category SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add shop_category .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add shop_category .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateshop_category = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj ={
            id: p.id,
            title: p.title,
            categoryimage: p.categoryimage,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE shop_category SET   ? where id= ? `, obj, p.id);
              if (result.affectedRows > 0) {
            res.json({ Message: 'Update shop_category .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update shop_category .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getshop_category = async (req, res, next) => {

    try {
        let condition = "";
       
            condition ='1'; 

        let result = await readDB.query(`SELECT * FROM shop_category WHERE ${condition} `);
        console.log(__line, result)

      

        res.json({ data: result, Message: 'shop_category list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteshop_category = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM shop_category WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete shop_category .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete shop_category .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
