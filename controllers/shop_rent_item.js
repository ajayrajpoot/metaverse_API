

exports.addshop_rent_item = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO shop_rent_item SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add shop_rent_item .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add shop_rent_item .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateshop_rent_item = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // id:0,

            "nameshop_rent_itemproduct_count": "",
            "time_of_rent": "",
            "off_percentage": "",
            "descripting": "",
            "mrp": "",
            "selling_price": "",
            "icon_image": "",
            "reating": "",
            "count": "",
            "remaining_count": "",
            "isAds": "",
            "timestemp": "",
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE shop_rent_item SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO shop_rent_item SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update shop_rent_item .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update shop_rent_item .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getshop_rent_item = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM shop_rent_item WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM shop_rent_item_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let shop_rent_item = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     shop_rent_item.push(i);

        // })

        res.json({ data: result, Message: 'shop_rent_item list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteshop_rent_item = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM shop_rent_item WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete shop_rent_item .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete shop_rent_item .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
