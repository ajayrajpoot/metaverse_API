exports.getmetaverse_friends_request = async (req, res, next) => {

    try {
 

        let result = await readDB.query(`SELECT * FROM metaverse_friends_request WHERE 1 `);
        console.log(__line, result)
 

        res.json({ data: result, Message: 'metaverse_friends_request list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_friends_request = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_friends_request SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_friends_request .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_friends_request .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_friends_request = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            
            // id
            
            // id:p.id,
            requesrfrom:p.requesrfrom,
            request_to:p.request_to,
            timestemp:p.timestemp,
            is_accept:p.is_accept,
            relation_type:p.relation_type,

            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_friends_request SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_friends_request SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_friends_request .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_friends_request .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_friends_request = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_friends_request WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_friends_request .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_friends_request .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
