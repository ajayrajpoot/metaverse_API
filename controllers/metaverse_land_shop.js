

exports.addmetaverse_land_shop = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_land_shop SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_land_shop .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_land_shop .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_land_shop = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // id:0,
            // id
            image_url: p.image_url,
            name: p.name,
            locations: p.locations,
            size: p.size,
            buying_price: p.buying_price,
            idAds: p.idAds,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_land_shop SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_land_shop SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_land_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_land_shop .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmetaverse_land_shop = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM metaverse_land_shop WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM metaverse_land_shop_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let metaverse_land_shop = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     metaverse_land_shop.push(i);

        // })

        res.json({ data: result, Message: 'metaverse_land_shop list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemetaverse_land_shop = async (req, res, next) => {
 
    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_land_shop WHERE id=? `, id);
 
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_land_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_land_shop .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
