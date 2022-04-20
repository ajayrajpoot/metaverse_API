

exports.addstickers = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO stickers SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add stickers .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add stickers .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatestickers = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj =  { 
            "stickers": p.stickers,
            "url": p.url,
            is_payed: p.is_payed,
            price: p.price
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE stickers SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO stickers SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update stickers .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update stickers .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getstickers = async (req, res, next) => {

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

        let result = await readDB.query(`SELECT * FROM stickers WHERE ${condition} `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM stickers_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let stickers = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     stickers.push(i);

        // })

        res.json({ data: result, Message: 'stickers list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletestickers = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM stickers WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete stickers .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete stickers .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
