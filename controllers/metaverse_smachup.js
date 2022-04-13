

exports.addmetaverse_smachup = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_smachup SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_smachup .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_smachup .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_smachup = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj =  { 
                "video_url": p.video_url,
                "auto_comment": p.auto_comment,
                "post_type": p.post_type,
                "description": p.description,
                "title": p.title,
                "timestemp": p.timestemp,
                "username": p.username,
                "profile_pic": p.profile_pic,
                "feeling_url": p.feeling_url,
                "like_count": p.like_count,
                "comment_count": p.comment_count,
                "views_count": p.views_count,
                "share_count": p.share_count,
                "exclude_user": p.exclude_user,
                "isAds": p.isAds,
                "avatar_url": p.avatar_url
            }
        

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_smachup SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_smachup SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_smachup .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_smachup .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmetaverse_smachup = async (req, res, next) => {

    try {
        console.log("condition",req.query)
        console.log("condition",req.query.isAds)

        let condition = "";
        if(req.query.isAds){
            condition +=` ${condition==''?'':'and'} isAds = ${req.query.isAds} `;
        }else
        if(req.query.isRent){
            condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        }else
        if(req.query.search){
            condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        }
        else {
            condition ='1=1';
        }
        // console.log("condition",req)
        console.log("condition",condition)
        // let metaverse_smachup_id = req.query.metaverse_smachup_id

        let result = await readDB.query(`SELECT * FROM metaverse_smachup WHERE ${condition} `);
        // console.log(__line, result)

        // let metaverse_smachup_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (metaverse_smachup_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM metaverse_smachup_ads WHERE metaverse_smachup_id in ("${metaverse_smachup_ids.map(String).join("\",\"")}"); `);
        // }
        // let metaverse_smachup = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.metaverse_smachup_id == i.id);

        //     i.ads = ads;
        //     metaverse_smachup.push(i);

        // })

        res.json({ data: result, Message: 'metaverse_smachup list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemetaverse_smachup = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM metaverse_smachup WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_smachup .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_smachup .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
