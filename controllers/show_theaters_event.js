exports.getshow_theaters_event = async (req, res, next) => {

    try {
 
        let result = await readDB.query(`SELECT * FROM show_theaters_event WHERE 1 `);
        console.log(__line, result)

     

        res.json({ data: result, Message: 'show_theaters_event list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addshow_theaters_event = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO show_theaters_event SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add show_theaters_event .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add show_theaters_event .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateshow_theaters_event = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            
            // id 
            "name" : p.name, 
            "description" : p.description, 
            "location" : p.location, 
            "start_date_time" : p.start_date_time, 
            "end_data_time" : p.end_data_time, 
            "ticket_price" : p.ticket_price,  
            "active" : p.active, 
            
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE show_theaters_event SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO show_theaters_event SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update show_theaters_event .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update show_theaters_event .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deleteshow_theaters_event = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM show_theaters_event WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete show_theaters_event .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete show_theaters_event .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
