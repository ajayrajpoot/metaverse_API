

exports.get_report = async (req, res) => {

    try {
        let sql = ` SELECT r.reports_id , r.type_id , r.note , r.discription , 
         r.timestamp , r.is_delete ,  r.datetime , r.user_id , r.category_id , r.cost , r.profit  
          ,c.category, t.ptype FROM  reports  as r left join category as c on   r.category_id=c.category_id 
          left join types as t on r.type_id=t.type_id 
         WHERE 1=1  and r.is_delete=0 and MONTH(datetime )=MONTH('${req.query.date}')`;

        let result = await readDB.query(sql);
        console.log(__line, result)

        res.json({ DtResult: result, Message: 'reports list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};
exports.getsellreport = async (req, res) => {

    try {
        let sql = `SELECT r.reports_id , r.type_id , r.note , r.discription ,  
        r.timestamp , r.is_delete ,  r.datetime , r.user_id , r.category_id , r.cost , r.profit ,r.code,r.qty,r.selling_price,r.product_id 
         ,c.category, t.ptype FROM  reports  as r left join category as c on   r.category_id=c.category_id 
         left join types as t on r.type_id=t.type_id 
         WHERE 1=1  and r.is_delete=0 and product_id>0 
         ORDER by r.reports_id DESC  LIMIT   ((${req.query.index * req.query.count}))  ,  ((${req.query.count})) `;

        let result = await readDB.query(sql);
        console.log(__line, result)

        res.json({ DtResult: result, Message: 'typr list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};
exports.getReportByProductId = async (req, res) => {

    try {
        let sql = `SELECT r.reports_id , r.type_id , r.note , r.discription ,  
        r.timestamp , r.is_delete ,  r.datetime , r.user_id , r.category_id , r.cost , r.profit ,r.code,r.qty,r.selling_price,r.product_id  
           FROM  reports  as r  
           WHERE   product_id=${product_id}  ORDER by r.reports_id DESC `;
        let result = await readDB.query(sql);
        console.log(__line, result)

        res.json({ DtResult: result, Message: 'typr list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};
exports.add_report = async (req, res) => {
    var p = req.body;

    try {
        let par = {
            // reports_id
            type_id: p.type_id,
            note: p.note,
            discription: p.discription,
            datetime: p.datetime,
            user_id: p.user_id,
            category_id: p.category_id,
            cost: p.cost,
            profit: p.profit,
            code: p.code,
        }


        if (p.type_id == 0) {
            const result = await writeDB.query(`INSERT INTO reports SET ?   `, par);

        } else {
            par = {
                note: p.note,
                discription: p.discription,
                cost: p.cost,
                profit: p.profit,
            }
            const result = await writeDB.query(`UPDATE category_grocery_shop SET ? where reports_id= ? `, par, p.reports_id);
        }

        res.json({ Message: "", Status: 1, DtResult: [], ResultInt: 1 });

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message || error, Status: 0, DtResult: [], ResultInt: 0 });

    }

}

exports.delete_report = async (req, res) => {

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
