

exports.addmetaverse_token_shop = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_token_shop SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_token_shop .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_token_shop .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_token_shop = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            image: p.image,
            name: p.name,
            token_type: p.token_type,
            token_location: p.token_location,
            token_price: p.token_price,
            isAds: p.isAds,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_token_shop SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_token_shop SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_token_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_token_shop .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmetaverse_token_shop = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM metaverse_token_shop WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM metaverse_token_shop_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let metaverse_token_shop = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     metaverse_token_shop.push(i);

        // })

        res.json({ data: result, Message: 'metaverse_token_shop list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemetaverse_token_shop = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_token_shop WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_token_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_token_shop .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
