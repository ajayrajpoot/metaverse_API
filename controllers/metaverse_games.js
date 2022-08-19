exports.getmetaverse_games = async (req, res, next) => {

    try { 

        let result = await readDB.query(`SELECT * FROM metaverse_games WHERE 1 `);
        console.log(__line, result)

      
        res.json({ Data: result, Message: 'metaverse_games list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_games = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_games SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_games .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_games .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_games = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {

            // id
            // "id" : p.id,
            "name": p.name,
            "location": p.location,
            "size_of_land": p.size_of_land,
            "size_of_land_unit": p.size_of_land_unit,
            "description": p.description,
            // "timestemp" : p.timestemp,


        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_games SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_games SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_games .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_games .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_games = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_games WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_games .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_games .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
