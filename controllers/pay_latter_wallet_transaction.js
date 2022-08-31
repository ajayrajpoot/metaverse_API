
exports.getPayLatterBalance = async (req, res, next) => {

    try {
        let condition = "";

        if (req.query.deposit_withdrawal == 0 || req.query.deposit_withdrawal == 1) {
            condition += `  deposit_withdrawal = ${req.query.deposit_withdrawal} `;
        }

        let [LastBal] = await readDB.query(`SELECT * FROM pay_latter_wallet_transaction WHERE user_id = ${req.query.user_id}  order  by timestemp desc limit 1`);

        res.json({ Data: LastBal, Message: 'Balance  .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.addpay_latter_wallet_transaction = async (req, res, next) => {
    var p = req.body;

    try {
        let obj = {
            // "id": p.id,
            "transaction_id": p.transaction_id,
            "deposit_withdrawal": p.deposit_withdrawal,
            "amount": p.amount,
            // "obj": p.final_amount,
            "status": p.status,
            "comment": p.comment,
            // "admin_Comment": p.admin_Comment,
            // "timestemp": p.timestemp,

        }
        let [LastBal] = await readDB.query(`SELECT * FROM pay_latter_wallet_transaction WHERE user_id = ${req.query.user_id}  order  by timestemp desc limit 1`);

        console.log(">>>>>LastBal>>>>>", LastBal)

        if (p.deposit_withdrawal == 0)
            obj.final_amount = (LastBal.final_amount || 0) + p.amount;
        else if (p.deposit_withdrawal == 1)
            obj.final_amount = (LastBal.final_amount || 0) - p.amount;

        const result = await writeDB.query(`INSERT INTO pay_latter_wallet_transaction SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add pay_latter_wallet_transaction .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add pay_latter_wallet_transaction .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatepay_latter_wallet_transaction = async (req, res, next) => {
    var p = req.body;

    try {


        let obj = {
            // "id": "",
            "user_id": p.user_id,
            "image_vedio": p.image_vedio,
            "url": p.url,
            "text_msg": p.text_msg,
            "exclude_user": p.exclude_user,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE pay_latter_wallet_transaction SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO pay_latter_wallet_transaction SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update pay_latter_wallet_transaction .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update pay_latter_wallet_transaction .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getpay_latter_wallet_transaction = async (req, res, next) => {

    try {
        let condition = "";

        if (req.query.deposit_withdrawal == 0 || req.query.deposit_withdrawal == 1) {
            condition += `  deposit_withdrawal = ${req.query.deposit_withdrawal} `;
        }

        let result = await readDB.query(`SELECT * FROM pay_latter_wallet_transaction WHERE user_id = ${req.query.user_id} ${condition} `);
        console.log(__line, result)

        res.json({ Data: result, Message: 'pay_latter_wallet_transaction list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.getpay_latter_wallet_transaction_all = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        if (req.query.deposit_withdrawal == 0 || req.query.deposit_withdrawal == 1) {
            condition += ` ${condition == '' ? '' : 'and'} deposit_withdrawal = ${req.query.deposit_withdrawal} `;
        }
        else {
            condition = '1';
        }

        let result = await readDB.query(`SELECT * FROM pay_latter_wallet_transaction WHERE ${condition} `);
        console.log(__line, result)

        res.json({ Data: result, Message: 'pay_latter_wallet_transaction list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletepay_latter_wallet_transaction = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM pay_latter_wallet_transaction WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete pay_latter_wallet_transaction .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete pay_latter_wallet_transaction .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};