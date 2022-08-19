

exports.addchroist_camp_ownear_inventory_order = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO chroist_camp_ownear_inventory_order SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add chroist_camp_ownear_inventory_order .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add chroist_camp_ownear_inventory_order .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatechroist_camp_ownear_inventory_order = async (req, res, next) => {
    var p = req.body;

    try {


        let obj = {
            id: p.id,
            active: p.active,
            timestemp: p.timestemp,
            quanilty: p.quanilty,
            product_name: p.product_name,
            order_type: p.order_type,
            price: p.price,
            // chroist_camp_ownear_id:p.chroist_camp_ownear_id
        }




        delete obj.id;
        const result = await writeDB.query(`UPDATE chroist_camp_ownear_inventory_order SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update chroist_camp_ownear_inventory_order .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update chroist_camp_ownear_inventory_order .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getchroist_camp_ownear_inventory_order = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.chroist_camp_ownear_id) {
            condition += ` ${condition == '' ? '' : 'and'} chroist_camp_ownear_id = ${req.query.chroist_camp_ownear_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT * FROM chroist_camp_ownear_inventory_order WHERE ${condition} `);
        res.json({ Data: result, Message: 'chroist_camp_ownear_inventory_order list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletechroist_camp_ownear_inventory_order = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM chroist_camp_ownear_inventory_order WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete chroist_camp_ownear_inventory_order .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete chroist_camp_ownear_inventory_order .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
