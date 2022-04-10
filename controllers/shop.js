

exports.addshop = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO shops SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add shops .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add shops .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateshop = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // id:0,
            category_id: p.category_id,
            name: p.name,
            off_percentage: p.off_percentage,
            shop_count: p.shop_count,
            remaining_shop_count:p.remaining_shop_count,
            descripting: p.descripting,
            mrp: p.mrp,
            selling_price: p.selling_price,
            icon_image: p.icon_image,
            images: p.images,
            reating: p.reating,
            isAds: p.isAds,
            isRent: p.isRent,
            isAds: p.isAds,
            time_of_rent:p.time_of_rent 
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE shops SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO shops SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update shops .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update shops .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getshops = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM shops WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM shops_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let shops = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     shops.push(i);

        // })

        res.json({ data: result, Message: 'shops list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteshop = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM shops WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete shops .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete shops .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};