

exports.addbuy_rent = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO buy_rent SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add buy_rent .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add buy_rent .', Result: false });
        }

    } catch (error) { 
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatebuy_rent = async (req, res, next) => {
    var p = req.body;

    try {
 
        let obj = Object.assign({}, p);

        delete obj.id;
        const result = await writeDB.query(`UPDATE buy_rent SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update buy_rent .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update buy_rent .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getbuy_rent = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        } 
        else {
            condition ='1';
        } 

        let result = await readDB.query(`SELECT * FROM buy_rent WHERE ${condition} `);
        console.log(__line, result)

        res.json({ Data: result, Message: 'buy_rent list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletebuy_rent = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM buy_rent WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete buy_rent .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete buy_rent .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
