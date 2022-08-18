

exports.addprocess_image_video_audio_sugestion = async (req, res, next) => {
    var p = req.body;

    try {

        const result = await writeDB.query(`INSERT INTO process_image_video_audio_sugestion SET ?   `, p);

        console.log(__line, result)
        if (result.affectedRows > 0) {
            res.json({ Message: 'Add process_image_video_audio_sugestion .', Result: true, insertId: result.insertId });
        } else {
            res.json({ Message: 'Fail to Add process_image_video_audio_sugestion .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.updateprocess_image_video_audio_sugestion = async (req, res, next) => {
    var p = req.body;

    try {
 

        let obj = p;

        delete obj.id;
        const result = await writeDB.query(`UPDATE process_image_video_audio_sugestion SET   ? where id= ? `, obj, p.id); 
        if (result.affectedRows > 0) {
            res.json({ Message: 'Update process_image_video_audio_sugestion .', Result: true });
        } else {
            res.json({ Message: 'Fail to Update process_image_video_audio_sugestion .', Result: false });
        }

    } catch (error) {
        console.log(__line, error)
        res.json({ Message: error.message, response: error, Result: false });
    }

}

exports.getprocess_image_video_audio_sugestion = async (req, res, next) => {

    try {
        let condition = "";
        if(req.query.user_id){
            condition +=` ${condition==''?'':'and'} user_id = ${req.query.user_id} `;
        }
        
        else {
            condition ='1';
        }
        // let shop_id = req.query.shop_id

        let result = await readDB.query(`SELECT * FROM process_image_video_audio_sugestion WHERE ${condition} `);
        console.log(__line, result)
 
        res.json({ data: result, Message: 'process_image_video_audio_sugestion list .', Result: true });

    } catch (error) {

        console.log(__line, error);
        res.json({ Message: error.message, response: error, Result: false });

    }
};

exports.deleteprocess_image_video_audio_sugestion = async (req, res, next) => {

    try {
        const id = req.query.id;
        const result = await writeDB.query(`DELETE FROM process_image_video_audio_sugestion WHERE id=? `, id);

        if (result.affectedRows > 0) {
            res.json({ Message: 'Delete process_image_video_audio_sugestion .', Result: true });
        } else {
            res.json({ Message: 'Fail to Delete process_image_video_audio_sugestion .', Result: false });
        }

    } catch (error) {

        res.json({ Message: error.message, response: error, Result: false });

    }
};
