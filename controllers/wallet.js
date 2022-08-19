
exports.addwallet = async (req, res, next) => {	
    var p = req.body;	

    try {	

        let obj =  {	
            user_id:p.user_id,	
            amount:p.amount	
        }	
        const result = await writeDB.query(`INSERT INTO wallet SET ?   `, obj);	

        console.log(__line, result)	
        if (result.affectedRows > 0) {	
            res.json({ Message: 'Add wallet .', Result: true, insertId: result.insertId });	
        } else {	
            res.json({ Message: 'Fail to Add wallet .', Result: false });	
        }	

    } catch (error) {	
        console.log(__line, error)	
        res.json({ Message: error.message, response: error, Result: false });	
    }	

}	

exports.updatewallet = async (req, res, next) => {	
    var p = req.body;	

    try {	


        let obj =  {	
            user_id:p.user_id,	
            amount:p.amount	
        }	

        delete obj.id;	
        const result = await writeDB.query(`UPDATE wallet SET   ? where id= ? `, obj, p.id);	

        if (result.affectedRows > 0) {	
            res.json({ Message: 'Update wallet .', Result: true });	
        } else {	
            res.json({ Message: 'Fail to Update wallet .', Result: false });	
        }	

    } catch (error) {	
        console.log(__line, error)	
        res.json({ Message: error.message, response: error, Result: false });	
    }	

}	

exports.getwallet = async (req, res, next) => {	

    try {	
        let condition = "";	
        if(req.query.user_id){	
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;	
        } 	
        else {	
            condition ='1';	
        }	

        let result = await readDB.query(`SELECT * FROM wallet WHERE ${condition} `);	
        console.log(__line, result)	

        res.json({ Data: result, Message: 'wallet list .', Result: true });	

    } catch (error) {	

        console.log(__line, error);	
        res.json({ Message: error.message, response: error, Result: false });	

    }	
};	

exports.deletewallet = async (req, res, next) => {	

    try {	
        const id = req.query.id;	
        const result = await writeDB.query(`DELETE FROM wallet WHERE id=? `, id);	

        if (result.affectedRows > 0) {	
            res.json({ Message: 'Delete wallet .', Result: true });	
        } else {	
            res.json({ Message: 'Fail to Delete wallet .', Result: false });	
        }	

    } catch (error) {	

        res.json({ Message: error.message, response: error, Result: false });	

    }	
};	