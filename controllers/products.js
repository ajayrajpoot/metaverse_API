

exports.addproducts = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO products SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add products .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add products .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateproducts = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // id:0,
            category_id: p.category_id,
            name: p.name,
            off_percentage: p.off_percentage,
            products_count: p.products_count,
            descripting: p.descripting,
            mrp: p.mrp,
            selling_price: p.selling_price,
            image_url1: p.image_url1,
            reating: p.reating,
            isAds: p.isAds,

        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE products SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO products SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update products .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update products .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getproducts = async (req, res, next) => {

    try {

        // let product_id = req.query.product_id

        let result = await readDB.query(`SELECT * FROM products WHERE 1 `);
        console.log(__line, result)

        let product_ids = result.map(i => i.id);

        let resultAds = [];

        if (product_ids) {

            resultAds = await readDB.query(`SELECT * FROM products_ads WHERE product_id in ("${product_ids.map(String).join("\",\"")}"); `);

        }

        let products = [];

        result.filter(i => {

            let ads = resultAds.find(x => x.product_id == i.id);

            i.ads = ads;
            products.push(i);

        })

        res.json({ data: products, Message: 'products list with Ads.', Result: true });

    } catch (error) {
        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteproduct = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM products WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete products .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete products .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
