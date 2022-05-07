exports.getmetaverse_my_events_theater_tickets = async (req, res, next) => {

    try {
 
        let result = await readDB.query(`SELECT * FROM metaverse_my_events_theater_tickets WHERE 1 `);
        console.log(__line, result)
 

        res.json({ data: result, Message: 'metaverse_my_events_theater_tickets list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmetaverse_my_events_theater_tickets = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO metaverse_my_events_theater_tickets SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_my_events_theater_tickets .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_my_events_theater_tickets .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_my_events_theater_tickets = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
             
            // id:p.id,
            event_theater_name:p.event_theater_name,
            land_location:p.land_location,
            start_date:p.start_date,
            end_date:p.end_date,
         
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_my_events_theater_tickets SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO metaverse_my_events_theater_tickets SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_my_events_theater_tickets .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_my_events_theater_tickets .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemetaverse_my_events_theater_tickets = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_my_events_theater_tickets WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_my_events_theater_tickets .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_my_events_theater_tickets .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
