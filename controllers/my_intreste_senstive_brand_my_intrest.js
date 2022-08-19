

exports.addmy_intreste_senstive_brand_my_intrest = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO my_intreste_senstive_brand_my_intrest SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add my_intreste_senstive_brand_my_intrest .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add my_intreste_senstive_brand_my_intrest .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemy_intreste_senstive_brand_my_intrest = async (req, res, next) => {
    var p = req.body;

    try {


        let obj = {
            id: p.id,
            brandname: p.brandname,
            brand_logo: p.brand_logo,
            sendtive_name: p.sendtive_name,
            senstive_logo: p.senstive_logo,
            my_intreste_name: p.my_intreste_name,
            my_intreste_logo: p.my_intreste_logo,
            brand_seletected_or_not: p.brand_seletected_or_not,
            senstive_selected_or_not: p.senstive_selected_or_not,
            my_intreste_selected_or_not: p.my_intreste_selected_or_not,
            my_intreste_for_changename: p.my_intreste_for_changename,
            my_intreste_for_changename_logo: p.my_intreste_for_changename_logo,
            // timestemp: p.timestemp,
            active: p.active,
            // seller_id : p.seller_id
        }


        delete obj.id;
        const result = await writeDB.query(`UPDATE my_intreste_senstive_brand_my_intrest SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO my_intreste_senstive_brand_my_intrest SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update my_intreste_senstive_brand_my_intrest .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update my_intreste_senstive_brand_my_intrest .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmy_intreste_senstive_brand_my_intrest = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }

        let result = await readDB.query(`SELECT * FROM my_intreste_senstive_brand_my_intrest WHERE ${condition} `);



        res.json({ Data: result, Message: 'my_intreste_senstive_brand_my_intrest list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemy_intreste_senstive_brand_my_intrest = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM my_intreste_senstive_brand_my_intrest WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete my_intreste_senstive_brand_my_intrest .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete my_intreste_senstive_brand_my_intrest .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
