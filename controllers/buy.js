

exports.addbuy = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO buy SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add buy .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add buy .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatebuy = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj = {
            // id
            shop_3d_url: p.shop_3d_url,
            name: p.name,
            location: p.location,
            category: p.category,
            idAds: p.idAds,
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE buy SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO buy SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update buy .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update buy .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getbuy = async (req, res, next) => {

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

        let result = await readDB.query(`SELECT * FROM buy WHERE ${condition} `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM buy_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let buy = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     buy.push(i);

        // })

        res.json({ data: result, Message: 'buy list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletebuy = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM buy WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete buy .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete buy .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
