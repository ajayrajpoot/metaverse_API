exports.getmetaverse_invite_collaborating_request = async (req, res, next) => {

    try {
        let result = await readDB.query(`SELECT * FROM metaverse_invite_collaborating_request WHERE 1 `);
        console.log(__line, result)

 
        res.json({ data: result, Message: 'metaverse_invite_collaborating_request list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_invite_collaborating_request = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_invite_collaborating_request SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_invite_collaborating_request .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_invite_collaborating_request .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_invite_collaborating_request = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // `id`, `
            "user_id":p.user_id,
            "world_3d_url":p.world_3d_url,
            "worlds_location":p.worlds_location,
            "Invite_by":p.Invite_by,
                        
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_invite_collaborating_request SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_invite_collaborating_request SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_invite_collaborating_request .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_invite_collaborating_request .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_invite_collaborating_request = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_invite_collaborating_request WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_invite_collaborating_request .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_invite_collaborating_request .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
