

exports.get_type = async (req, res) => {

    try {
        let condition = "";
        if (req.query.user_id) {
            condition += ` ${condition == '' ? '' : 'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition = '1';
        }
        let result = await readDB.query(`SELECT type_id ,  ptype ,  timestemp ,  active  FROM  types  WHERE  is_delete=0  `);
        console.log(__line, result)

        res.json({ data: result, Message: 'typr list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.add_type = async (req, res) => {
    var p = req.body;

    try {
        let par = {
            ptype: p.ptype,
            active: p.active
        }
        if (p.type_id == 0) {
            const result = await writeDB.query(`INSERT INTO buy_rent SET ?   `, par);

        } else {
            const result = await writeDB.query(`UPDATE category_grocery_shop SET  ptype= ?, active=? where type_id= ? `, p.ptype, p.active, p.type_id);
        }

        res.json({ Message: "", Status: 1, DtResult: [], ResultInt: 1 });

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message || error , Status: 0, DtResult: [], ResultInt:0 });
        
    }

}

exports.delete_type = async (req, res) => {

    try {
        const id = req.query.type_id;
        const result = await writeDB.query(`UPDATE types SET is_delete=1 WHERE type_id = ?  `, type_id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete type  .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete type  .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
