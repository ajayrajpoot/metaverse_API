

exports.addproducts_ads = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO products_ads SET ?   `,p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Add products_ads .', Result: true, insertId: result.insertId  });
        } else {
            res.json({ Message: 'Fail to Add products_ads .', Result: false });
        } 
    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}
exports.updateproducts_ads = async (req, res, next) => {
    var p = req.body;

    try {
        let obj = { 
            // id:p.id,
            product_id:p.product_id,
            product_count:p.product_count,
            off_percentage:p.off_percentage,
            remaining_product_count:p.remaining_product_count,
            // timestemp:p.timestemp,
        }
        const result = await writeDB.query(`UPDATE products_ads SET   ? where id= ? `, obj, p.id);
        // const result = await writeDB.query(`INSERT INTO products_ads SET ?   `,p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update products_ads .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update products_ads .', Result: false });
        } 
    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getproducts_ads = async (req, res, next) => {

    try {

        const result = await readDB.query(`SELECT * FROM products_ads WHERE 1 `);
        res.json({ data: result, Message: 'products_ads data.', Result: true });

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteproduct_ads = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM products_ads WHERE  id=? `, id);

        console.log(">>>>>", result) 

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete products_ads .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete products_ads .', Result: false });
        } 

    } catch (error) {
        
        res.json({ Message: error.message, response: error, Result: false });

    }
};
