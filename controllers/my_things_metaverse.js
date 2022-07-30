

exports.addmy_things_metaverse = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO my_things_metaverse SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add my_things_metaverse .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add my_things_metaverse .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemy_things_metaverse = async (req, res, next) => {
    var p = req.body;

    try {


        let obj = {
            id: p.id,
            username: p.username,
            name: p.name,
            avatar_url: p.avatar_url,
            profile_url: p.profile_url,
            pet_name: p.pet_name,
            pet_price: p.pet_price,
            pet_price_buy_off_percentage: p.pet_price_buy_off_percentage,
            pet_url: p.pet_url,
            pet_order_id: p.pet_order_id,
            vechile_name: p.vechile_name,
            vechile_price: p.vechile_price,
            vechile_price_buy_off_percentage: p.vechile_price_buy_off_percentage,
            vechile_url: p.vechile_url,
            vechile_order_id: p.vechile_order_id,
            land_name: p.land_name,
            land_price: p.land_price,
            land_price_buy_off_percentage: p.land_price_buy_off_percentage,
            land_url: p.land_url,
            land_order_id: p.land_order_id,
            token_name: p.token_name,
            token_price: p.token_price,
            token_price_buy_off_percentage: p.token_price_buy_off_percentage,
            token_url: p.token_url,
            token_order_id: p.token_order_id,
            added_by: p.added_by,
            active: p.active,
            // timestemp: p.timestemp,
            // user_id: p.user_id,
        }
    



        delete obj.id;
        const result = await writeDB.query(`UPDATE my_things_metaverse SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update my_things_metaverse .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update my_things_metaverse .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getmy_things_metaverse = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.chroist_camp_ownear_id) {
            condition += ` ${condition == '' ? '' : 'and'} chroist_camp_ownear_id = ${req.query.chroist_camp_ownear_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT * FROM my_things_metaverse WHERE ${condition} `);
        res.json({ data: result, Message: 'my_things_metaverse list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletemy_things_metaverse = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM my_things_metaverse WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete my_things_metaverse .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete my_things_metaverse .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
