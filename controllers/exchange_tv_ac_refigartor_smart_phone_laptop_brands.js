

exports.addexchange_tv_ac_refigartor_smart_phone_laptop_brands = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO exchange_tv_ac_refigartor_smart_phone_laptop_brands SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add exchange_tv_ac_refigartor_smart_phone_laptop_brands .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add exchange_tv_ac_refigartor_smart_phone_laptop_brands .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateexchange_tv_ac_refigartor_smart_phone_laptop_brands = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj ={
            "id": p.id,
            "user_id": p.user_id,
            "brand_image": p.brand_image,
            "brandname": p.brandname,
            "ac_brand_name": p.ac_brand_name,
            "ac_brandiamge": p.ac_brandiamge,
            "refigartor_brand_name": p.refigartor_brand_name,
            "refigartor_refigrator_brand_image": p.refigartor_refigrator_brand_image,
            "smart_phone_brand_name": p.smart_phone_brand_name,
            "smart_phone_brand_image": p.smart_phone_brand_image,
            "laptop_brand_name": p.laptop_brand_name,
            "laptop_brand_iamge": p.laptop_brand_iamge,
            "laptop_processor_modle": p.laptop_processor_modle,
            "tablet_brand_name": p.tablet_brand_name,
            "tablet_brand_image": p.tablet_brand_image,
            "washingmachine_brand_name": p.washingmachine_brand_name,
            "washingmachine_brand_image": p.washingmachine_brand_image,
            "modlename_tv": p.modlename_tv,
            "tv_screen_size": p.tv_screen_size,
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE exchange_tv_ac_refigartor_smart_phone_laptop_brands SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update exchange_tv_ac_refigartor_smart_phone_laptop_brands .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update exchange_tv_ac_refigartor_smart_phone_laptop_brands .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getexchange_tv_ac_refigartor_smart_phone_laptop_brands = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition ='1';
        }
      
        let result = await readDB.query(`SELECT * FROM exchange_tv_ac_refigartor_smart_phone_laptop_brands WHERE ${condition} `);
      
        res.json({ data: result, Message: 'exchange_tv_ac_refigartor_smart_phone_laptop_brands list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });
    }
};

exports.deleteexchange_tv_ac_refigartor_smart_phone_laptop_brands = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM exchange_tv_ac_refigartor_smart_phone_laptop_brands WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete exchange_tv_ac_refigartor_smart_phone_laptop_brands .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete exchange_tv_ac_refigartor_smart_phone_laptop_brands .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
