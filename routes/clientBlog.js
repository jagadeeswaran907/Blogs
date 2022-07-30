const express = require('express');
// calling an router
const router = express.Router();

router.get("/client-blog-get", (req, res) => {

    connection.query("call clientListBlogGet ()", [],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});
router.get("/client-single-blog-get", (req, res) => {

    connection.query("call clientSingleBlogGet (?)", [req.body.ID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});



module.exports = router;