

exports.addmy_collecting = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO my_collecting SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add my_collecting .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add my_collecting .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemy_collecting = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj = {
            "user_id": p.user_id,
            "collection_name": p.collection_name,
            "type": p.type,
            "collection": p.collection,
            "image": p.image,
            "no_of_item": p.no_of_item,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE my_collecting SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO my_collecting SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update my_collecting .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update my_collecting .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmy_collecting = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        } 
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM my_collecting WHERE ${condition} `);
        console.log(__line, result)
 

        res.json({ data: result, Message: 'my_collecting list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemy_collecting = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM my_collecting WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete my_collecting .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete my_collecting .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
