

exports.addseller_auth = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO seller_auth SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Add seller_auth .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add seller_auth .', Result: false });
        }

    } catch (error) {
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateseller_auth = async (req, res, next) => {
    var p = req.body;

    try {


        let obj = {
            id: p.id,
            name: p.name,
            email: p.email,
            address: p.address,
            otp: p.otp,
            gstno_for_india: p.gstno_for_india,
            identity: p.identity,
            // timestemp: p.timestemp,
            active: p.active,
            // seller_id:p.seller_id
        }


        delete obj.id;
        const result = await writeDB.query(`UPDATE seller_auth SET   ? where id= ? `, obj, p.id);
        if (result.affectedRows > 0) {
            res.json({ Message: 'Update seller_auth .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update seller_auth .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getseller_auth = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }

        let result = await readDB.query(`SELECT * FROM seller_auth WHERE ${condition} `);

        res.json({ data: result, Message: 'seller_auth list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteseller_auth = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM seller_auth WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete seller_auth .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete seller_auth .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
