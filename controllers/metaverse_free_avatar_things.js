exports.getmetaverse_free_avatar_things_music = async (req, res, next) => {

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

        let result = await readDB.query(`SELECT * FROM metaverse_free_avatar_things_music WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM metaverse_free_avatar_things_music_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let metaverse_free_avatar_things_music = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     metaverse_free_avatar_things_music.push(i);

        // })

        res.json({ data: result, Message: 'metaverse_free_avatar_things_music list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_free_avatar_things_music = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_free_avatar_things_music SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_free_avatar_things_music .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_free_avatar_things_music .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_free_avatar_things_music = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            
            // id 
            // `id`,
             "music_url":p.music_url,
             "music_name":p.music_name, 
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_free_avatar_things_music SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_free_avatar_things_music SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_free_avatar_things_music .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_free_avatar_things_music .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_free_avatar_things_music = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_free_avatar_things_music WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_free_avatar_things_music .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_free_avatar_things_music .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};