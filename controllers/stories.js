

exports.addstories = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO stories SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add stories .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add stories .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatestories = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj =  {
            // "id": "",
            "user_id": p.user_id,
            "image_vedio": p.image_vedio,
            "url": p.url, 
            "text_msg": p.text_msg,
            "exclude_user": p.exclude_user,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE stories SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO stories SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update stories .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update stories .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getstories = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        } 
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM stories WHERE ${condition} `);
        console.log(__line, result)
 

        res.json({ data: result, Message: 'stories list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletestories = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM stories WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete stories .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete stories .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
