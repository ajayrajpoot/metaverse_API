

exports.addreport_reason = async (req, res, next) => {
    var p = req.body;
    try {
        const result = await writeDB.query(`INSERT INTO report_reason SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add report_reason .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add report_reason .', Result: false });
        }

    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatereport_reason = async (req, res, next) => {
    var p = req.body;

    try {


        let obj = {
            // "id": p.id,
            "report_reason": p.report_reason,
            "reportedposturl": p.reportedposturl,
            "description": p.description,
            "title": p.title, 
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE report_reason SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update report_reason .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update report_reason .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getreport_reason = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }

        let result = await readDB.query(`SELECT * FROM report_reason WHERE ${condition} `);

        res.json({ Data: result, Message: 'report_reason list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletereport_reason = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM report_reason WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete report_reason .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete report_reason .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
