exports.getmetaverse_worlds = async (req, res, next) => {

    try {
 

        let result = await readDB.query(`SELECT * FROM metaverse_worlds WHERE 1 `);
        console.log(__line, result)

       
        res.json({ Data: result, Message: 'metaverse_worlds list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_worlds = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_worlds SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_worlds .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_worlds .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_worlds = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            
            // id
            
            "name" : p.name,
            "url" : p.url,
            "modle_3d" : p.modle_3d,
            "size" : p.size,
            "size_unit" : p.size_unit,
            "feeling_count" : p.feeling_count,
            "photo_multi" : p.photo_multi,
            "description" : p.description,

            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_worlds SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_worlds SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_worlds .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_worlds .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_worlds = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_worlds WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_worlds .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_worlds .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
