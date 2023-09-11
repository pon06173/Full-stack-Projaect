const express = require('express');
const router = express.Router();

var messages = [];
router.get("/recieve", function(req, res) {
    if(req.query.size >= messages.length){
        res.end();
    } else {
        var response = {
            total: messages.length,
            messages: messages.slice(req.query.size)
        }
        res.end(JSON.stringify(response));
    }
});

router.get("/send", function(req, res) {
    messages.push({
        sender: req.query.sender,
        message: req.query.message
    });
    res.end()
});


module.exports = router;