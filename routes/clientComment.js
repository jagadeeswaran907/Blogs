const express = require('express');
// calling an router
const router = express.Router();

router.post("/comment-add", (req, res) => {
    for (let i = 0; i < req.body.length; i++) {
    connection.query("call clientCommentAdd (?,?)", [req.body[i].Comment,req.body[i].BlogID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            if (i == req.body.length - 1){
            res.status(200).json(results[0]);
            }
        }
    });
}
});
router.get("/comment-get", (req, res) => {

    connection.query("call clientCommentGet (?)", [req.body.BlogID],
     (error, results, fields) => {
        if (error) {
            res.status(400).json({msg: "Something went wrong", sttus_code: 400});
        } else {
            res.status(200).json(results[0]);
        }
    });
});

module.exports = router;