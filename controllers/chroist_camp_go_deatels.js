

exports.addchroist_camp_go_deatels = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO chroist_camp_go_deatels SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add chroist_camp_go_deatels .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add chroist_camp_go_deatels .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatechroist_camp_go_deatels = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = p;

        delete obj.id;
        const result = await writeDB.query(`UPDATE chroist_camp_go_deatels SET   ? where id= ? `, obj, p.id);
        
        if (result.affectedRows > 0) {
            res.json({ Message: 'Update chroist_camp_go_deatels .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update chroist_camp_go_deatels .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getchroist_camp_go_deatels = async (req, res, next) => {

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
        // let chroist_camp_go_deatels_id = req.query.chroist_camp_go_deatels_id

        let result = await readDB.query(`SELECT * FROM chroist_camp_go_deatels WHERE ${condition} `);
        // console.log(__line, result)
 
        res.json({ data: result, Message: 'chroist_camp_go_deatels list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletechroist_camp_go_deatels = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM chroist_camp_go_deatels WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete chroist_camp_go_deatels .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete chroist_camp_go_deatels .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
