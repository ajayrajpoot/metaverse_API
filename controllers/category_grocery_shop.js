

exports.addcategory_grocery_shop = async (req, res, next) => {
    var p = req.body;

    try {

        // const result = await readDB.query(`SELECT id, category_grocery_shop, timestemp FROM category_grocery_shop WHERE 1 `);
        const result = await writeDB.query(`INSERT INTO category_grocery_shop SET ?   `, p);


        if (result.affectedRows > 0) {
            res.json({ Message: 'Add category_grocery_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to Add category_grocery_shop .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updatecategory_grocery_shop = async (req, res, next) => {
    var p = req.body;

    console.log(">>>", p)
    let obj = {
        "name": p.name ,
        "description": p.description ,
        "mrp": p.mrp ,
        "product_count": p.product_count ,
        "seeling_prise": p.seeling_prise ,
        "rating": p.rating ,
        "3d_modle": p.modle_3d ,
        "off_percentage": p.off_percentage ,
    }
    try {
        // const result = await readDB.query(`SELECT id, image, timestemp FROM feeling_image WHERE 1 `);
        const result = await writeDB.query(`UPDATE category_grocery_shop SET  category= ?, image=? where id= ? `, p.category, p.image, p.id);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Update category_grocery_shop.', Result: true, id: result.insertId });
        } else {
            res.json({ Message: 'Fail to Update category_grocery_shop.', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}
exports.getcategory_grocery_shop = async (req, res, next) => {

    try {

        const result = await readDB.query(`SELECT id, category,image FROM category_grocery_shop WHERE 1 `);

        console.log(">>>>>", result)

        res.json({ Data: result, Message: 'category_grocery_shop data.', Result: true });

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deletecategory_grocery_shop = async (req, res, next) => {

    try {
        const id = req.query.id;

        const result = await readDB.query(`DELETE FROM category_grocery_shop WHERE  id=? `, id);

        console.log(">>>>>", result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'delete category_grocery_shop .', Result: true });
        } else {
            res.json({ Message: 'Fail to delete category_grocery_shop .', Result: false });
        }



    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
