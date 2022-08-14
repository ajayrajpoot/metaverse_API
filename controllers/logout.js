

exports.addlogout = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO logout SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Add logout .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add logout .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}
 
exports.getlogout = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        }
        else {
            condition ='1';
        }

        let result = await readDB.query(`SELECT * FROM logout WHERE ${condition} `);
        console.log(__line, result)

        res.json({ data: result, Message: 'logout list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};
