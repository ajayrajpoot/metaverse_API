

exports.addgrocery_products = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO grocery_products SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add grocery_products .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add grocery_products .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updategrocery_products = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

       

        delete obj.id;
        const result = await writeDB.query(`UPDATE grocery_products SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO grocery_products SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update grocery_products .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update grocery_products .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getgrocery_products = async (req, res, next) => {

    try {

        let condition = "";
        if(req.query.isAds){
            condition +=` ${condition==''?'':'and'} isAds = ${req.query.isAds} `;
        }
        // else if(req.query.isRent){
        //     condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        // }
        else if(req.query.search){
            condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        }
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM grocery_products WHERE ${condition} `);
        console.log(__line, result)
 
        res.json({ data: result, Message: 'grocery_products list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletegrocery_products = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM grocery_products WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete grocery_products .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete grocery_products .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
