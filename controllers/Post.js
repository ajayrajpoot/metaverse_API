

exports.addpost = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO post SET ?   `, p);
 
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
 

        delete obj.id;
        const result = await writeDB.query(`UPDATE post SET   ? where id= ? `, obj, p.id); 

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

        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        } 

        let result = await readDB.query(`SELECT * FROM post WHERE ${condition} `); 
 
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
