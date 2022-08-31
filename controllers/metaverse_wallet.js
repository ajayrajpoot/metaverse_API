

exports.addmetaverse_wallet = async (req, res, next) => {
    var p = req.body;

    try {

        let obj =  {
            // id : p.id,
            productname : p.productname,
            stutus_of_payment : p.stutus_of_payment,
            payment_no : p.payment_no,
            currency : p.currency,
            amount : p.amount,
            day_month_year : p.day_month_year,
            finefee : p.finefee,
            payment_last_date : p.payment_last_date,
            // timestemp : p.timestemp,
            user_id : p.user_id,
            comment : p.comment,
            // payed_date : p.payed_date,

        }
        const result = await writeDB.query(`INSERT INTO metaverse_wallet SET ?   `, obj);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add metaverse_wallet .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add metaverse_wallet .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemetaverse_wallet_status = async (req, res, next) => {
    var p = req.body;

    try {
 


        let obj =  {
            // id : p.id,
            // productname : p.productname,
            stutus_of_payment : p.stutus_of_payment,
            // payment_no : p.payment_no,
            // currency : p.currency,
            // amount : p.amount,
            // day_month_year : p.day_month_year,
            // finefee : p.finefee,
            payment_last_date : p.payment_last_date,
            // timestemp : p.timestemp,
            // user_id : p.user_id,
            // comment : p.comment,
            // payed_date : p.payed_date,

        }
        delete obj.id;
        const result = await writeDB.query(`UPDATE metaverse_wallet SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update metaverse_wallet .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update metaverse_wallet .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmetaverse_wallet = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        } 
        else {
            condition ='1';
        }

        let result = await readDB.query(`SELECT * FROM metaverse_wallet WHERE ${condition} `);
        console.log(__line, result)

        res.json({ Data: result, Message: 'metaverse_wallet list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemetaverse_wallet = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM metaverse_wallet WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete metaverse_wallet .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete metaverse_wallet .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.addmetaverse_wallet = async (req, res, next) => {	
    var p = req.body;	

    try {	

        let obj =  {	
            user_id:p.user_id,	
            amount:p.amount	
        }	
        const result = await writeDB.query(`INSERT INTO metaverse_wallet SET ?   `, obj);	

        console.log(__line, result)	
        if (result.affectedRows > 0) {	
            res.json({ Message: 'Add metaverse_wallet .', Result: true, insertId: result.insertId });	
        } else {	
            res.json({ Message: 'Fail to Add metaverse_wallet .', Result: false });	
        }	

    } catch (error) {	
        console.log(__line, error)	
        res.json({ Message: error.message, response: error, Result: false });	
    }	

}	

exports.updatemetaverse_wallet = async (req, res, next) => {	
    var p = req.body;	

    try {	


        let obj =  {	
            user_id:p.user_id,	
            amount:p.amount	
        }	

        delete obj.id;	
        const result = await writeDB.query(`UPDATE metaverse_wallet SET   ? where id= ? `, obj, p.id);	

        if (result.affectedRows > 0) {	
            res.json({ Message: 'Update metaverse_wallet .', Result: true });	
        } else {	
            res.json({ Message: 'Fail to Update metaverse_wallet .', Result: false });	
        }	

    } catch (error) {	
        console.log(__line, error)	
        res.json({ Message: error.message, response: error, Result: false });	
    }	

}	

exports.getmetaverse_wallet = async (req, res, next) => {	

    try {	
        let condition = "";	
        if(req.query.user_id){	
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;	
        } 	
        else {	
            condition ='1';	
        }	

        let result = await readDB.query(`SELECT * FROM metaverse_wallet WHERE ${condition} `);	
        console.log(__line, result)	

        res.json({ Data: result, Message: 'metaverse_wallet list .', Result: true });	

    } catch (error) {	

        console.log(__line, error);	
        res.json({ Message: error.message, response: error, Result: false });	

    }	
};	

exports.deletemetaverse_wallet = async (req, res, next) => {	

    try {	
        const id = req.query.id;	
        const result = await writeDB.query(`DELETE FROM metaverse_wallet WHERE id=? `, id);	

        if (result.affectedRows > 0) {	
            res.json({ Message: 'Delete metaverse_wallet .', Result: true });	
        } else {	
            res.json({ Message: 'Fail to Delete metaverse_wallet .', Result: false });	
        }	

    } catch (error) {	

        res.json({ Message: error.message, response: error, Result: false });	

    }	
};	