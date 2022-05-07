

exports.addpost = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO post SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add post .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add post .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatepost = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj =  {
            // "id": 1,
            "url": p.url,
            "description": p.description,
            "feeling_count": p.feeling_count,
            "comment_count": p.comment_count,
            "username": p.username,
            // "timestemp": p.timestemp,
            "feeling_icon_urls": p.feeling_icon_urls,
            "view_type": p.view_type,
            "views_count": p.views_count,
            "share_count": p.share_count,
            "like_count": p.like_count,
            "exclude_user": p.exclude_user,
            "user_id": p.user_id,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE post SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO post SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update post .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update post .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getpost = async (req, res, next) => {

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
        // let post_id = req.query.post_id

        let result = await readDB.query(`SELECT * FROM post WHERE ${condition} `);
        // console.log(__line, result)
 
        res.json({ data: result, Message: 'post list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletepost = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM post WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete post .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete post .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
