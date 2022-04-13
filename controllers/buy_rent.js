

exports.addbuy_rent = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO buy_rent SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add buy_rent .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add buy_rent .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatebuy_rent = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj ={
            // "id": p.id,
            "user_id": p.user_id,
            "item_type": p.item_type,
            "item_id": p.item_id,
            "mrp": p.mrp,
            "buy_price": p.buy_price,
            "description": p.description,
            "comment": p.comment,
            "time_of_rent": p.time_of_rent,
            // "timestamp": p.timestamp,
            "time_of_rent_unit": p.time_of_rent_unit,
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE buy_rent SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO buy_rent SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update buy_rent .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update buy_rent .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getbuy_rent = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        }
        // else if(req.query.isRent){
        //     condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        // }
        // else if(req.query.search){
        //     condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        // }
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM buy_rent WHERE ${condition} `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM buy_rent_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let buy_rent = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     buy_rent.push(i);

        // })

        res.json({ data: result, Message: 'buy_rent list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletebuy_rent = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM buy_rent WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete buy_rent .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete buy_rent .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
