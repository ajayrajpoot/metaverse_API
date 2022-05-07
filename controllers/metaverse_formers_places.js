exports.getmetaverse_formers_places = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        // let condition = "";
        // if(req.query.isAds){
        //     condition +=` ${condition==''?'':'and'} isAds = ${req.query.isAds} `;
        // }
        // // else if(req.query.isRent){
        // //     condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        // // }
        // else if(req.query.search){
        //     condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        // }
        // else{}

        let result = await readDB.query(`SELECT * FROM metaverse_formers_places WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM metaverse_formers_places_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let metaverse_formers_places = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     metaverse_formers_places.push(i);

        // })

        res.json({ data: result, Message: 'metaverse_formers_places list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_formers_places = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_formers_places SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_formers_places .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_formers_places .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_formers_places = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            
            // id 
            url_3d: p.url_3d
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_formers_places SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_formers_places SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_formers_places .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_formers_places .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_formers_places = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_formers_places WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_formers_places .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_formers_places .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
