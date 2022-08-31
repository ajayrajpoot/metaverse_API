exports.getpay_later = async (req, res, next) => {

    try {

        let result = await readDB.query(`SELECT * FROM pay_later WHERE 1 `);
        console.log(__line, result);

        res.json({ Data: result, Message: 'pay_later list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.addpay_later = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO pay_later SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add pay_later .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add pay_later .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatepay_later = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            // id: p.id,
            story_url: p.story_url,
            is_archive: p.is_archive,
            timestemp: p.timestemp,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE pay_later SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO pay_later SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update pay_later .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update pay_later .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.updatepay_later_status = async (req, res, next) => {
    var p = req.body;

    try {

        // let obj = Object.assign({}, p);

        let obj = {
            "stutus_of_payment": p.stutus_of_payment,
            "user_id": p.user_id,
            "payed_date": p.payed_date
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE pay_later SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO pay_later SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update pay_later .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update pay_later .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.deletepay_later = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM pay_later WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete pay_later .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete pay_later .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
