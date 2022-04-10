

exports.addmetaverse_thing_shop = async (req, res, next) => {
    var p = req.body;

    try { 

        // const result = await readDB.query(`SELECT id, metaverse_thing_shop, timestemp FROM metaverse_thing_shop WHERE 1 `);
        const result = await writeDB.query(`INSERT INTO metaverse_thing_shop SET ?   `, p);


        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_thing_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to Add metaverse_thing_shop .', Result: false });
        } 

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_thing_shop = async (req, res, next) => {
    var p = req.body;

    console.log(">>>",p)
    try {
        // const result = await readDB.query(`SELECT id, image, timestemp FROM feeling_image WHERE 1 `);
        const result = await writeDB.query(`UPDATE metaverse_thing_shop SET  category= ?, image=? where id= ? `, p.category, p.image, p.id);

        console.log(__line,result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_thing_shop.', Result: true , id:result.insertId });
        } else {
            res.json({ Message: 'Fail to Update metaverse_thing_shop.', Result: false });
        } 

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}
exports.getmetaverse_thing_shop = async (req, res, next) => {

    try {

        const result = await readDB.query(`SELECT id, category,image FROM metaverse_thing_shop WHERE 1 `);

        console.log(">>>>>", result)

        res.json({ data: result, Message: 'metaverse_thing_shop data.', Result: true });

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemetaverse_thing_shop = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await readDB.query(`DELETE FROM metaverse_thing_shop WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'delete metaverse_thing_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to delete metaverse_thing_shop .', Result: false });
        } 

         

    } catch (error) {
        
        res.json({ Message: error.message, response: error, Result: false });

    }
};
