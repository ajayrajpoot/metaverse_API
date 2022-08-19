

exports.addmetaverse_post = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_post SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_post .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_post .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_post = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_post SET   ? where id= ? `, obj, p.id);
        
        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_post .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_post .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmetaverse_post = async (req, res, next) => {

    try {
        console.log("condition",req.query)
        console.log("condition",req.query.isAds)

        let condition = ""; 
            condition ='1=1';   

        let result = await readDB.query(`SELECT * FROM metaverse_post WHERE ${condition} `); 
 
        res.json({ Data: result, Message: 'metaverse_post list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemetaverse_post = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM metaverse_post WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_post .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_post .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
