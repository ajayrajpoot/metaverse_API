exports.getshow_theaters_event = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        // let condition = "";
        // if(req.query.isAds){
        //     condition +=` ${condition==''?'':'and'} isAds = ${req.query.isAds} `;
        // }
        // // else if(req.query.isRent){
        // //     condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        // // }
        // else if(req.query.search){
        //     condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        // }
        // else{}

        let result = await readDB.query(`SELECT * FROM show_theaters_event WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM show_theaters_event_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let show_theaters_event = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     show_theaters_event.push(i);

        // })

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
