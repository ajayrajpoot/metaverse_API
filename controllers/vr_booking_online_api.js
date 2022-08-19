

exports.addvr_booking_online_api = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO vr_booking_online_api SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add vr_booking_online_api .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add vr_booking_online_api .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatevr_booking_online_api = async (req, res, next) => {
    var p = req.body;

    try {


        let obj = {
            id: p.id,
            time_which_booked: p.time_which_booked,
            username: p.username,
            name: p.name,
            booked_period: p.booked_period,
            no_of_people: p.no_of_people,
            under_age_of_14: p.under_age_of_14,
            booked: p.booked,
            canclled_or_not: p.canclled_or_not,
            book_used_or_not: p.book_used_or_not,
            rest_room_type: p.rest_room_type,
            active: p.active,
            timestemp: p.timestemp,

            // user_id: p.user_id,
        }


       

        delete obj.id;
        const result = await writeDB.query(`UPDATE vr_booking_online_api SET   ? where id= ? `, obj, p.id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update vr_booking_online_api .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update vr_booking_online_api .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getvr_booking_online_api = async (req, res, next) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT * FROM vr_booking_online_api WHERE ${condition} `);
        res.json({ Data: result, Message: 'vr_booking_online_api list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletevr_booking_online_api = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM vr_booking_online_api WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete vr_booking_online_api .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete vr_booking_online_api .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
