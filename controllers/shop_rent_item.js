

exports.getshop_rent_item = async (req, res, next) => {

    try {

        let condition = "";
        if(req.query.isAds){
            condition +=` ${condition==''?'':'and'} isAds = ${req.query.isAds} `;
        }
        // else if(req.query.isRent){
        //     condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        // }
        else if(req.query.search){
            condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        }
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM shop_rent_item WHERE ${condition} `);
        console.log(__line, result)
 

        res.json({ data: result, Message: 'shop_rent_item list with Ads.', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.addshop_rent_item = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO shop_rent_item SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add shop_rent_item .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add shop_rent_item .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateshop_rent_item = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj =  { 
            "name": p.name,
            "product_count": p.product_count,
            "time_of_rent": p.time_of_rent,
            "off_percentage": p.off_percentage,
            "descripting": p.descripting,
            "mrp": p.mrp,
            "selling_price": p.selling_price,
            "icon_image": p.icon_image,
            "reating": p.reating,
            "count": p.count,
            "remaining_count": p.remaining_count,
            "isAds": p.isAds,
            "timestemp": p.timestemp,
            "Keywords": p.Keywords,
            "sellerorgin": p.sellerorgin,
            "sellerprofilrname": p.sellerprofilrname,
            "manufacturerby": p.manufacturerby,
            "importedby": p.importedby,
            "packedby": p.packedby,
            "genricname": p.genricname,
            "video": p.video,
            "local_delivery_charges": p.local_delivery_charges,
            "zonal_delivery": p.zonal_delivery,
            "national_delivery_charges": p.national_delivery_charges,
            "international_delivery_charges": p.international_delivery_charges
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE shop_rent_item SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO shop_rent_item SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update shop_rent_item .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update shop_rent_item .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.deleteshop_rent_item = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await writeDB.query(`DELETE FROM shop_rent_item WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete shop_rent_item .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete shop_rent_item .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
