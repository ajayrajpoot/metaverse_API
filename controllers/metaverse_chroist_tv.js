

exports.addmetaverse_chroist_tv = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_chroist_tv SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_chroist_tv .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_chroist_tv .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_chroist_tv = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj = { 
            "vedio_url": p.vedio_url,
            "description": p.description,
            "time_of_uploading": p.time_of_uploading,
            "post_type": p.post_type,
            "username": p.username,
            "profile_pic": p.profile_pic,
            "feeling_url": p.feeling_url,
            "auto_comment": p.auto_comment,
            "like_count": p.like_count,
            "comment_count": p.comment_count,
            "views_count": p.views_count,
            "share_count": p.share_count,
            "exclude_user": p.exclude_user
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_chroist_tv SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_chroist_tv SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_chroist_tv .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_chroist_tv .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmetaverse_chroist_tv = async (req, res, next) => {

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

        let result = await readDB.query(`SELECT * FROM metaverse_chroist_tv WHERE ${condition} `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM metaverse_chroist_tv_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let metaverse_chroist_tv = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     metaverse_chroist_tv.push(i);

        // })

        res.json({ data: result, Message: 'metaverse_chroist_tv list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemetaverse_chroist_tv = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_chroist_tv WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_chroist_tv .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_chroist_tv .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
