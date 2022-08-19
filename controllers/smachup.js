

exports.addsmachup = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO smachup SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add smachup .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add smachup .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatesmachup = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);
 
        delete obj.id;
        const result = await writeDB.query(`UPDATE smachup SET   ? where id= ? `, obj, p.id); 

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update smachup .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update smachup .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getsmachup = async (req, res, next) => {

    try {
        console.log("condition",req.query)
        console.log("condition",req.query.isAds)

        let condition = "";
        if(req.query.isAds){
            condition +=` ${condition==''?'':'and'} isAds = ${req.query.isAds} `;
        }else
        if(req.query.isRent){
            condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        }else
        if(req.query.search){
            condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        }
        else {
            condition ='1=1';
        }
        // console.log("condition",req)
        console.log("condition",condition)
        // let smachup_id = req.query.smachup_id

        let result = await readDB.query(`SELECT * FROM smachup WHERE ${condition} `);
       

        res.json({ Data: result, Message: 'smachup list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletesmachup = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM smachup WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete smachup .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete smachup .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
