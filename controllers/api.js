var moment = require('moment');


const MAIL = require('../modules/MAIL/send');


const gettype = async (req, res) => {

    try {

        let sql = `SELECT type_id, ptype, timestemp, active FROM types WHERE  is_delete=0 `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });
    }
}

const addtype = async (req, res) => {
    var p = req.body;

    try {

        let par = {
            type_id: p.type_id,
            ptype: p.ptype,
            active: p.active,
        }

        let result;
        if (p.type_id == 0) {
            result = await writeDB.query(`INSERT INTO types SET ?  `, par);
            if (result.affectedRows) {
                res.json({ data: [], result: true, message: " Insert" });
            } else {
                res.json({ data: [], result: false, message: 'Insert Fail' });
            }
        } else {
            result = await writeDB.query(`UPDATE types SET  ptype= ?, active=? where type_id= ?`, p.ptype, p.active, p.type_id);
            if (result.affectedRows) {
                res.json({ data: [], result: true, message: " Update" });
            } else {
                res.json({ data: [], result: false, message: 'Update Fail' });
            }
        }



    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }

}


const deletetype = async (req, res) => {

    try {
        const type_id = req.query.type_id;
        const result = await writeDB.query(`UPDATE types SET is_delete=1 WHERE type_id = ? `, type_id);

        if (result.affectedRows) {
            res.json({ message: 'Delete types  .', result: true });
        } else {
            res.json({ message: 'Fail to Delete types  .', result: false });
        }

    } catch (error) {

        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
};
//  ===========

const getcategory = async (req, res, next) => {

    try {

        let sql = `SELECT  c.category_id , c.type_id , c.category , c.timestemp , c.active  
         , t.ptype  FROM  category  as c join types as t on c.type_id=t.type_id 
         WHERE   c.is_delete=0 ` ;

        if (req.query.type_id)
            sql += ` and c.type_id = ${req.query.type_id}`;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }

};

const addcategory = async (req, res) => {
    var p = req.body;

    try {
        let par = {
            type_id: p.type_id,
            category: p.category,
            active: p.active
        }


        if (p.category_id == 0) {
            const result = await writeDB.query(`INSERT INTO category SET ?  `, par);

            if (result.affectedRows) {
                res.json({ data: [], result: true, message: " Insert" });
            } else {
                res.json({ data: [], result: false, message: 'Insert Fail' });
            }
        } else {

            const result = await writeDB.query(`UPDATE category SET ? where type_id= ?`, par, p.type_id);
            if (result.affectedRows) {
                res.json({ data: [], result: true, message: " Update" });
            } else {
                res.json({ data: [], result: false, message: 'Update Fail' });
            }
        }

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }

}


const deletecategory = async (req, res) => {

    try {
        const category_id = req.query.category_id;
        const result = await writeDB.query(`UPDATE category SET is_delete=1 WHERE category_id =  ? `, category_id);

        if (result.affectedRows > 0) {
            res.json({ message: 'Delete category  .', result: true });
        } else {
            res.json({ message: 'Fail to Delete category  .', result: false });
        }

    } catch (error) {

        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
};

//=== report 
const getreport = async (req, res) => {

    try {
        let datetime = new Date(req.query.date);


        let sql = ` SELECT r.reports_id , r.type_id , r.note , r.discription ,  
            r.timestamp , r.is_delete ,  r.datetime , r.user_id , r.category_id , r.cost , r.profit 
            ,c.category, t.ptype FROM reports as r 
            left join category as c on   r.category_id=c.category_id 
            left join types as t on c.type_id=t.type_id  
            WHERE 1=1  and r.is_delete=0  and MONTH( datetime ) = MONTH('${req.query.date}')`;
        console.log(__line, sql);

        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }

}

const getReportByProductId = async (req, res) => {
    try {
        let product_id = req.query.product_id;

        let sql = ` SELECT r.reports_id , r.type_id , r.note , r.discription , 
                r.timestamp , r.is_delete ,  r.datetime , r.user_id , r.category_id , r.cost , r.profit ,r.code,r.qty,r.selling_price,r.product_id  ,
                r.category_id
                   FROM  reports  as r   
                WHERE   product_id= ${product_id}
                 ORDER by r.reports_id DESC `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
}

const getsellreport = async (req, res) => {
    try {
        let index = req.query.index;
        let count = req.query.count;


        let sql = `  SELECT r.reports_id , r.type_id , r.note , r.discription , 
                r.timestamp , r.is_delete ,  r.datetime , r.user_id , r.category_id , r.cost , r.profit ,r.code,r.qty,r.selling_price,r.product_id ,r.category_id
                 ,c.category, t.ptype FROM reports as r left join category as c on   r.category_id=c.category_id 
                 left join types as t on r.type_id=t.type_id 
                WHERE 1=1  and r.is_delete=0 and product_id>0 
                  ORDER by r.reports_id DESC  LIMIT   ${index * count}  ,  ${count} `;

        console.log(__line, sql)
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
}

const addreport = async (req, res) => {
    let p = req.body;

    let sql = "";

    let code = generate_six_digitcode();

    // DateTime datetime = Convert.ToDateTime(p.datetime);


    if (p.reports_id == 0) {

    }
    else {

    }


    if (p.reports_id == 0) {
        let prm =
        {
            type_id: p.type_id,
            note: p.note,
            discription: p.discription,
            datetime: p.datetime,
            user_id: p.user_id,
            category_id: p.category_id,
            cost: p.cost,
            profit: p.profit,
            code: code,
        };
        const result = await writeDB.query(`INSERT INTO reports SET ?`, prm);
        if (result.affectedRows) {

            await wallet_depositFun(p.cost, p.note, "SERVICE", code);
            res.json({ data: [], result: true, message: " Insert" });


        } else {

            res.json({ data: [], result: false, message: 'Insert Fail' });

        }
    } else {
        let prm = {
            note: p.note,
            discription: p.discription,
            cost: p.cost,
            profit: p.profit
        };
        const result = await writeDB.query(`UPDATE reports SET ? where reports_id= ?`, prm, p.reports_id);

        if (result.affectedRows) {
            res.json({ data: [], result: true, message: " Update" });
        } else {
            res.json({ data: [], result: false, message: 'Update Fail' });
        }
    }


}
const addreportNew = async (req, res) => {
    let p = req.body;

    let code = generate_six_digitcode();

    if (p.reports_id == 0) {
        let prm =
        {
            type_id: p.type_id,
            note: p.note,
            discription: p.discription,
            datetime: p.datetime,
            user_id: p.user_id,
            category_id: p.category_id,
            cost: p.cost,
            profit: p.profit,
            code: p.code,
            qty: p.qty,
            selling_price: p.selling_price,
            product_id: p.product_id,
        };
        const result = await writeDB.query(`INSERT INTO reports SET ?`, prm);


        if (result.affectedRows) {
            await wallet_depositFun((p.selling_price * p.qty), `${p.note}Price  ${p.selling_price}, Total Qty: ${p.qty}`, "SELLPRODUCT", code);

            await upadateQty(p.product_id, p.qty);

            res.json({ data: [], result: true, message: " Update" });
        } else {
            res.json({ data: [], result: false, message: 'Update Fail' });
        }



    }
}
const deletereport = async (req, res) => {
    let reports_id = req.query.reports_id

    let sql = "";



    sql = ` UPDATE reports SET is_delete=1 WHERE reports_id= ${reports_id} `;
    const result = await writeDB.query(sql);

    if (result.affectedRows) {
        res.json({ data: [], result: true, message: " Delete" });
    } else {
        res.json({ data: [], result: false, message: 'Delete Fail' });
    }

}

//=== Buy
const getbuy = async (req, res) => {
    try {

        let { date, index, count } = req.query;

        let sql = `SELECT buy_id, poduct_name, price, timestemp, note,  discription,  min_selling_price ,code ,  
                  qty, c_qty, buydate ,category_id   FROM product WHERE 1 = 1 and is_delete = 0 `;
        if (date)
            sql += ` and MONTH(timestemp )=MONTH('${date}')`;

        sql += ` ORDER by buy_id DESC  LIMIT  ${index * count} , ${count};`;
        console.log(__line, sql);

        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }


}

const getProductByID = async (req, res) => {
    try {
        let buy_id = req.query.buy_id;

        let sql = `SELECT buy_id, poduct_name, price, timestemp, note,  discription,  min_selling_price ,code , 
                 qty, c_qty, buydate ,category_id   FROM product WHERE buy_id=${buy_id}`;

        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }


}

const getbuyProductList = async (req, res) => {
    try {
        let search = req.query.search;

        let sql = `SELECT buy_id, poduct_name, price, timestemp, note,  discription,  min_selling_price ,code , qty, c_qty, buydate ,category_id
                   FROM product WHERE c_qty>0 and is_delete=0`;

        if (search)
            sql += ` and poduct_name like '%${search}%'`;

        sql += " ORDER by buy_id DESC ";

        console.log(__line, sql);

        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }

}

const addbuy = async (req, res) => {
    let p = req.body;

    console.log(__line, p)

    let code = generate_six_digitcode();

    if (p.buy_id == 0) {
        sql = ` INSERT INTO product
                 (  poduct_name, price,  note, discription, min_selling_price,code, qty , c_qty, buydate,category_id ) 
                 VALUES 
                 (  '${p.poduct_name}', '${p.price}' ,  '${p.note}', '${p.discription}', '${p.min_selling_price}', '${code}', '${p.qty}', '${p.c_qty}', '${p.buydate}',${p.category_id}) `;
    }
    else {
        sql = ` UPDATE product SET  
                    poduct_name = '${p.poduct_name}' , 
                    price = '${p.price}' , 
                    note = '${p.note}' ,
                    discription = '${p.discription}' , 
                    min_selling_price = '${p.min_selling_price}',  
                    qty = '${p.qty}',  
                    c_qty = '${p.c_qty}',  
                    buydate = '${p.buydate}'  
                    WHERE buy_id = ${p.buy_id}   `;
    }
    console.log(__line, sql);

    let result = await readDB.query(sql);

    if (p.buy_id == 0) {

        if (result.affectedRows) {
            // amount, comment, note, code
            await wallet_withdrawFun((p.price * p.qty), ` ${p.note}, Price :${p.price}, Total Qty:${p.qty}`, "AUTOWITHDRAW", code);
            res.json({ data: [], result: true, message: " Insert Succe" });
        } else {
            res.json({ data: [], result: false, message: 'Insert  Fail' });
        }



    }
    else {

        if (result.affectedRows) {

            res.json({ data: [], result: true, message: " update Succe" });
        } else {
            res.json({ data: [], result: false, message: 'update  Fail' });
        }

    }


}

const upadateQty = async (buy_id, qty) => {
    // let { buy_id, qty } = req.query;
    // let code = generate_six_digitcode();
    //  DateTime datetime = Convert.ToDateTime(p.datetime);

    let sql = ` UPDATE product SET c_qty=c_qty-${qty}  WHERE buy_id=${buy_id} `;
    let result = await readDB.query(sql);

    if (result.affectedRows) {
        return { data: [], result: true, message: " upadate Succe" };
    } else {
        return { data: [], result: false, message: 'upadate  Fail' };
    }
}
const deletebuy = async (req, res) => {
    let { buy_id } = req.query;

    sql = `UPDATE product SET is_delete=1 WHERE buy_id=${buy_id}`;
    let result = await readDB.query(sql);

    if (result.affectedRows) {
        res.json({ data: [], result: true, message: " delete Succe" });
    } else {
        res.json({ data: [], result: false, message: 'delet  Fail' });
    }

}


//=== notes
const getnotes = async (req, res) => {
    try {
        let active = req.query.active || 1;

        let sql = `SELECT notes_id, note, timestemp, active, name, discription 
            FROM notes WHERE 1=1 `;

        sql += ` and active=${p.active} `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }



    return res;
}
const addnotes = async (req, res) => {
    let p = req.body;
    if (p.notes_id == 0) {

        sql = ` INSERT INTO notes 
                          (notes_id, note,  name, discription)  
                          VALUES  
                          (${p.notes_id}, '${p.note}',  '${p.name}', '${p.discription})' `;
    }
    else {
        sql = `  UPDATE notes SET 
                            note='${p.note}' , 
                           name='${p.name}' ,
                          WHERE notes_id='${p.notes_id}'`;
    }


    let result = await readDB.query(sql);

    if (p.notes_id == 0) {

        if (result.affectedRows) {
            res.json({ data: [], result: true, message: " Insert Succe" });
        } else {
            res.json({ data: [], result: false, message: 'Insert  Fail' });
        }
    }
    else {

        if (result.affectedRows) {
            res.json({ data: [], result: true, message: " update Succe" });
        } else {
            res.json({ data: [], result: false, message: 'update  Fail' });
        }

    }

}
const inactivenotes = async (req, res) => {
    let { notes_id } = req.query;

    let sql = `UPDATE notes SET active=0 WHERE notes_id=${p.notes_id} `;
    let result = await readDB.query(sql);


    if (result.affectedRows) {
        res.json({ data: [], result: true, message: " update Succe" });
    } else {
        res.json({ data: [], result: false, message: 'update  Fail' });
    }
}

const activenotes = async (req, res) => {
    let { notes_id } = req.query;


    let sql = `UPDATE notes SET active=1 WHERE notes_id=${notes_id}`;
    let result = await readDB.query(sql);


    if (result.affectedRows) {
        res.json({ data: [], result: true, message: " update Succe" });
    } else {
        res.json({ data: [], result: false, message: 'update  Fail' });
    }
}
//=== wallet
const getwallet = async (req, res) => {
    try {
        let { date } = req.query;

        let sql = ` SELECT wallet_id, deposit_withdraw, amount, total_amount, comment, timestemp, note
                  FROM wallet WHERE 1 `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }

}
const addwallet = async (req, res) => {
    let p = req.body;
    let sql = "";


    if (p.wallet_id == 0) {
        sql = ` INSERT INTO wallet
                    "( deposit_withdraw, amount, total_amount, comment,  note)
                    " VALUES 
                    "( ${p.deposit_withdraw}, ${p.amount}, ${p.total_amount}, ${p.comment}, ${p.note} )`;
    }
    else {
        sql = ` UPDATE wallet SET
                     deposit_withdraw=${p.deposit_withdraw} ,amount=${p.amount},
                     total_amount=${p.total_amount},comment=${p.comment},
                     note=${p.note}
                     WHERE  wallet_id=${p.wallet_id}`;
    }
    let result = await writeDB.query(sql);

    if (p.wallet_id == 0) {
        if (result.affectedRows) {
            res.json({ data: [], result: true, message: " Insert Success" });
        } else {
            res.json({ data: [], result: false, message: 'Insert   Fail' });
        }
    }
    else {
        if (result.affectedRows) {
            res.json({ data: [], result: true, message: "Update Success" });
        } else {
            res.json({ data: [], result: false, message: 'Update Fail' });
        }
    }

}




const wallet_deposit = async (req, res) => {
    try {

        let { amount, comment, note, code } = req.query;
        let r = await wallet_depositFun(amount, comment, note, code || 0);

        res.json(r);
    } catch (error) {
        res.json({ data: [], result: false, message: error.message || error });

    }


}

const wallet_depositFun = async (amount, comment, note, code) => {

    try {

        let balance = await getBalanceFun();
        console.log(__line, balance);

        sql = ` INSERT INTO wallet
                ( deposit_withdraw, amount, total_amount, comment,  note, code)
                 VALUES 
                ( 0 ,  ${amount} , ${parseFloat(balance) + parseFloat(amount)} , '${comment}','${note}', '${code}' ) `;
        console.log(__line, sql);
        console.log(__line);

        let result = await writeDB.query(sql);
        console.log(__line);
        if (result.affectedRows) {

            await getupdateBalance(amount);
            SEND_MAIL({ subject: "Deposit ", html: `Deposit :  balance + amount =  ${amount + balance}, comment: ${comment}, note:${code}` });

            return { data: [], result: true, message: "Insert Success" };
        } else {

            return { data: [], result: false, message: 'Insert Fail' };
        }
    } catch (error) {

        console.log(__line, error.message || error);
        throw new Error(error.message || error);

    }
}

const wallet_withdraw = async (req, res) => {

    try {

        let { amount, comment, note, code } = req.query;
        let r = await wallet_withdrawFun(amount, comment, note, code || 1);

        res.json(r);
    } catch (error) {
        res.json({ data: [], result: false, message: error.message || error });

    }



}

const wallet_withdrawFun = async (amount, comment, note, code) => {
    try {
        console.log(__line)
        let balance = await getBalanceFun();

        console.log(__line)

        sql = ` INSERT INTO wallet
                 ( deposit_withdraw, amount, total_amount, comment,  note,code)
                  VALUES 
                 ( 1 ,  ${amount}  , ${(balance - amount)}  , '${comment}','${note}' , ${code})`;

        console.log(__line, sql)
        let result = await writeDB.query(sql);
        console.log(__line)

        if (result.affectedRows) {
            console.log(__line)

            await getupdateBalance(-amount);
            console.log(__line)
            SEND_MAIL({ subject: "Withdraw ", html: `Deposit :  balance - amount =  ${amount - balance}, comment: ${comment}, note:${code}` });
            // SEND_MAIL("Withdraw : ", "balance - amount + " + (amount - balance) + ", comment: " + comment + ", note:" + code + "");
            console.log(__line)

            return { data: [], result: true, message: "Insert Success" };
        } else {
            return { data: [], result: false, message: 'Insert Fail' };
        }
    } catch (error) {

        console.log(__line, error.message || error);
        throw new Error(error.message || error);

    }
}

const getBalance = async (req, res) => {
    try {
        let sql = `SELECT  Balance  FROM user WHERE user_id=1 `;
        let result = await readDB.query(sql);

        res.json({ data: result[0].Balance, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
}

const getBalanceFun = async (req, res) => {
    try {
        let sql = `SELECT  Balance  FROM user WHERE user_id=1 `;
        let [result] = await readDB.query(sql);

        return result.Balance

    } catch (error) {
        console.log(__line, error.message || error)
        return 0;

    }
}
const getTotaltLegger = async (req, res) => {
    try {
        let sql = `SELECT count(wallet_id) as count FROM wallet  `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
}
const getupdateBalance = async (amount) => {
    try {
        // let { amount } = amount;

        let sql = ` UPDATE user SET
                      Balance= Balance + (${amount} )
                      WHERE  user_id=1 `;
        let result = await readDB.query(sql);

        return { data: result, result: true, message: '' };

    } catch (error) {
        console.log(__line, error.message || error)

        throw new Error(error.message || error);
    }

}
const getLegger = async (req, res) => {
    try {
        let { index = 0, count = 1000 } = req.query; ////index star with 0
        console.log(__line, index);
        console.log(__line, count);

        let sql = `SELECT wallet_id, deposit_withdraw, amount, total_amount, comment, timestemp, note, code 
                     FROM wallet WHERE 1=1
                     ORDER by wallet_id DESC  LIMIT  ${index * count}  , ${count}`;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
}




const getDepositLeggerMothsWise = async (req, res) => {
    try {
        let sql = `SELECT SUM(amount) as total_amount, MONTH( timestemp) as Month , YEAR(timestemp) as Year 
                         FROM wallet where deposit_withdraw=0  GROUP BY MONTH(timestemp), YEAR(timestemp) 
                         ORDER by Year, Month  DESC  `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
}

const getWithdrawLeggerMothsWise = async (req, res) => {
    try {
        let sql = `SELECT SUM(amount) as total_amount, MONTH( timestemp) as Month , YEAR(timestemp) as Year FROM wallet 
                         where deposit_withdraw=1 GROUP BY MONTH(timestemp), YEAR(timestemp)  ORDER by Year, Month  DESC `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }
}

const getreminder_note = async (req, res) => {

    try {

        let sql = `SELECT id ,  note , discription ,  user_id ,  user_name ,  timestemp  FROM reminder_note  WHERE 1 `;
        let result = await readDB.query(sql);

        res.json({ data: result, result: true, message: '' });

    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });
    }
}

const addreminder_note = async (req, res) => {
    var p = req.body;

    try {

        let par = {
            // id: p.id,
            note: p.note,
            discription: p.discription,
            user_id: p.user_id,
            user_name: p.user_name,
        }

        let result;
        if (p.id) {

            par = {
                // id: p.id,
                note: p.note,
                discription: p.discription,
                // user_id: p.user_id,
                // user_name: p.user_name,
            }

            result = await writeDB.query(`UPDATE types SET  note = note + '${p.note}', discription = discription + '${p.discription}' where id = ?`, p.id);

            if (result.affectedRows) {
                res.json({ data: [], result: true, message: " Update" });
            } else {
                res.json({ data: [], result: false, message: 'Update Fail' });
            }
        } else {

            result = await writeDB.query(`INSERT INTO reminder_note SET ?  `, par);
            if (result.affectedRows) {
                res.json({ data: [], result: true, message: " Insert " });
            } else {
                res.json({ data: [], result: false, message: 'Insert Fail' });
            }
        }



    } catch (error) {
        console.log(__line, error.message || error)
        res.json({ data: [], result: false, message: error.message || error });

    }

}

const deletereminder_note = async (req, res) => {

    try {

        const id = req.query.id;
        const result = await writeDB.query(`UPDATE reminder_note SET is_delete=1 WHERE id = ? `, id);

        if (result.affectedRows) {
            res.json({ message: 'Delete reminder_note  .', result: true });
        } else {
            res.json({ message: 'Fail to Delete reminder_note  .', result: false });
        }

    } catch (error) {

        console.log(__line, error.message || error);

        res.json({ data: [], result: false, message: error.message || error });

    }
};

const Send50Report = async (req, res) => {
    try {
        let sql = ` SELECT wallet_id, deposit_withdraw, amount, total_amount, comment, timestemp, note, code 
                      FROM wallet WHERE 1=1 
                      ORDER by wallet_id DESC  LIMIT 50`;
        let result = await readDB.query(sql);


        let temp = ` <!DOCTYPE html> 
                    <html>  
                    <body> 
                    <h2>legger Record</h2> 
                    <table style='width:100%'> 
                        <tr> 
                        <th style=' border:1px solid black;' >timestemp</th> 
                        <th style=' border:1px solid black;' >code</th> 
                        <th style=' border:1px solid black;' >deposit / withdraw</th> 
                        <th style=' border:1px solid black;' >amount</th> 
                        <th style=' border:1px solid black;' >total_amount</th> 
                        <th style=' border:1px solid black;' >comment</th> 
                        <th style=' border:1px solid black;' >note</th> 
                        </tr> `;

        if (result) {
            result.forEach(el => {
                temp += ` <tr> 
                    <td style=' border:1px solid black;' > ${ moment(el.timestemp).format('MMMM Do YYYY, h:mm:ss a')}</td >
                    <td style=' border:1px solid black;' > ${el.code}</td >
                    <td style=' border:1px solid black;' > ${el.deposit_withdraw == 0 ? "Deposit" : "Withdraw"}</td >
                    <td style=' border:1px solid black;' > ${el.amount} </td >
                    <td style=' border:1px solid black;' > ${el.total_amount}</td >
                    <td style=' border:1px solid black;' > ${el.comment}</td >
                    <td style=' border:1px solid black;' > ${el.note}</td >
                    </tr>  `;
            });
        }

        temp += ` </table> 
       <p>50 Record.</p> 
       </body> 
       </html> `;
        let rsend = await SEND_MAIL({ subject: "Last 50 Record ", html: temp });

        console.log(__line, rsend);
        res.json({ data: rsend, result: true, message: 'Send Mail' });

    } catch (error) {
        console.log(__line, error.message || error);
        res.json({ data: [], result: false, message: error.message || error });
    }
    //   return rtn.dt;
}

//Mail
const SEND_MAIL = (p) => {

    try {
        let prm = {
            to: p.to || ['ajayrajpoot1993@gmail.com','ajayrajpoot2017@gmail.com'],
            name: p.name || 'Ajay',
            subject: p.subject || 'Report',
            html: p.html,

        }
        console.log(__line, prm);
        let rep = MAIL.emailHTML(prm.to, prm.name, prm.subject, prm.html);

        // (Subject, htmlString, mailTo = "ajayrajpoot1993${p.gmail.com") =>
        // let message = new MailMessage();
        // let smtp = new SmtpClient();
        //     message.From = new MailAddress("support${p.jarha.in");
        //     message.To.Add(new MailAddress(mailTo));
        //     message.Subject = Subject;
        //     message.IsBodyHtml = true; //to make message body as html  
        //     message.Body = htmlString;
        //     smtp.Port = 25;//581
        //     //smtp.Port = 587;
        //     smtp.Host = "smtp.jarha.in"; //for gmail host  
        //     smtp.EnableSsl = false;
        //     smtp.UseDefaultCredentials = false;
        //     smtp.Credentials = new NetworkCredential("support${p.jarha.in", "asd${p.1234");
        //     smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
        //     smtp.Send(message);
        // return "Mail Send";

        console.log(__line, rep);

        return { data: "rsend", result: true, message: '' };

    }
    catch (ex) {
        console.log(__line, ex.message || ex);
        return { data: "rsend", result: true, message: '' };

    }
}

const generate_six_digitcode = () => {
    return parseInt(Math.random() * 1000000);
}

const generate_ten_digitcode = () => {
    return parseInt(Math.random() * 1000000000);;
}



module.exports = {

    gettype, addtype, deletetype, getcategory, addcategory, deletecategory,
    getreport, getReportByProductId, getsellreport, addreport, addreportNew, deletereport,
    getbuy, getProductByID, getbuyProductList, addbuy, upadateQty, deletebuy,
    getnotes, addnotes, inactivenotes, activenotes, getwallet, addwallet,
    wallet_deposit, wallet_withdraw, getBalance, getTotaltLegger, getLegger,
    getDepositLeggerMothsWise, getWithdrawLeggerMothsWise, Send50Report,
    SEND_MAIL, generate_six_digitcode, generate_ten_digitcode,


    getreminder_note, addreminder_note, deletereminder_note,

}
