

exports.addbuy = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO buy SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add buy .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add buy .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatebuy = async (req, res, next) => {
    var p = req.body;

    try {
 
        let obj = Object.assign({}, p);


        delete obj.id;
        const result = await writeDB.query(`UPDATE buy SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO buy SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update buy .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update buy .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getbuy = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        }
        
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM buy WHERE ${condition} `);
        console.log(__line, result)
 
        res.json({ Data: result, Message: 'buy list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletebuy = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM buy WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete buy .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete buy .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
