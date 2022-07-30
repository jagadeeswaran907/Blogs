const express = require('express');
// calling an router
const router = express.Router();




router.post("/blog-add", (req, res) => {

    connection.query("call adminAddBlog (?,?,?)", [req.body.ID,req.body.title,req.body.body],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});
router.get("/blog-delete", (req, res) => {

    connection.query("call adminBlogDelete (?)", [req.body.ID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});

router.get("/blog-get", (req, res) => {

    connection.query("call adminBlogGet ()", [],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});

module.exports = router;