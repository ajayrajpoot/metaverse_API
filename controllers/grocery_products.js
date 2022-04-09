

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

        obj = {
            // id
            name: p.name,
            category: p.category,
            product_count: p.product_count,
            description: p.description,
            off_percentage: p.off_percentage,
            mrp: p.mrp,
            selling_price: p.selling_price,
            quanitity: p.quanitity,
            isAds: p.isAds,
            isTrending: p.isTrending
            // timestemp: p.timestemp,
        }

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

        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM grocery_products WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM grocery_products_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let grocery_products = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     grocery_products.push(i);

        // })

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
