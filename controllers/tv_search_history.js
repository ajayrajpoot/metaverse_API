exports.addtv_search_history = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO tv_search_history SET ?   `, p);
        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add tv_search_history .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add tv_search_history .', Result: false });
        }
    } catch (error) { 
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatetv_search_history = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj ={
            "search_title": p.search_title
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE tv_search_history SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO tv_search_history SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update tv_search_history .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update tv_search_history .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.gettv_search_history = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        } 
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM tv_search_history WHERE ${condition} `);
      
        res.json({ Data: result, Message: 'tv_search_history list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletetv_search_history = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM tv_search_history WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete tv_search_history .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete tv_search_history .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
