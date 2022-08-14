

exports.addshop_search_history = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO shop_search_history SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add shop_search_history .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add shop_search_history .', Result: false });
        }

    } catch (error) { 
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateshop_search_history = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj ={
            "id": p.id,
            "search_title": p.search_title,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE shop_search_history SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update shop_search_history .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update shop_search_history .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getshop_search_history = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        } 
        else {
            condition ='1';
        } 

        let result = await readDB.query(`SELECT * FROM shop_search_history WHERE ${condition} `);
        console.log(__line, result)

        res.json({ data: result, Message: 'shop_search_history list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteshop_search_history = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM shop_search_history WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete shop_search_history .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete shop_search_history .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
