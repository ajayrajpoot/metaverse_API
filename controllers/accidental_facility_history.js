

exports.addaccidental_facility_history = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO accidental_facility_history SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add accidental_facility_history .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add accidental_facility_history .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateaccidental_facility_history = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);
 
        delete obj.id;
        const result = await writeDB.query(`UPDATE accidental_facility_history SET   ? where id= ? `, obj, p.id); 

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update accidental_facility_history .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update accidental_facility_history .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getaccidental_facility_history = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT * FROM accidental_facility_history WHERE ${condition} `); 
        res.json({ Data: result, Message: 'accidental_facility_history list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteaccidental_facility_history = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM accidental_facility_history WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete accidental_facility_history .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete accidental_facility_history .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
