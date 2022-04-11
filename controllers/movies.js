exports.getmovies = async (req, res, next) => {

    try {

        // let shop_id = req.query.shop_id

        // let condition = "";
        // if(req.query.isAds){
        //     condition +=` ${condition==''?'':'and'} isAds = ${req.query.isAds} `;
        // }
        // // else if(req.query.isRent){
        // //     condition +=` ${condition==''?'':'and'} isRent = ${req.query.isRent} `;
        // // }
        // else if(req.query.search){
        //     condition +=`  ${condition==''?'':'and'} name = %${req.query.search}% `;
        // }
        // else{}

        let result = await readDB.query(`SELECT * FROM movies WHERE 1 `);
        console.log(__line, result)

        // let shop_ids = result.map(i => i.id);
        // let resultAds = [];
        // if (shop_ids) {
        //     resultAds = await readDB.query(`SELECT * FROM movies_ads WHERE shop_id in ("${shop_ids.map(String).join("\",\"")}"); `);
        // }
        // let movies = [];
        // result.filter(i => {

        //     let ads = resultAds.find(x => x.shop_id == i.id);

        //     i.ads = ads;
        //     movies.push(i);

        // })

        res.json({ data: result, Message: 'movies list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};


exports.addmovies = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO movies SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add movies .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add movies .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatemovies = async (req, res, next) => {
    var p = req.body;

    try {

        let obj = Object.assign({}, p);

        obj = {
            
            // id
            url: p.url,
            name: p.name,
            description: p.description,
            category: p.category,
            off_percantage: p.off_percantage,
            rent_price: p.rent_price,
            bying_price: p.bying_price,
            timestemp: p.timestemp,
            
        }

        delete obj.id;
        const result = await writeDB.query(`UPDATE movies SET   ? where id= ? `, obj, p.id);
        // 
        // const result = await writeDB.query(`INSERT INTO movies SET ?   `, p);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Update movies .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update movies .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}


exports.deletemovies = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM movies WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete movies .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete movies .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
