var express = require('express');
var router = express.Router();

var cnt = 0;
router.get("/count", function(req, resp) {
    cnt++;
    var date = new Date();
    var response = {
        "dateStr":date.getFullYear()+"-"
    +(date.getMonth()+1)+"-"+(date.getDate())+" "+(date.getHours())+":"
    +(date.getMinutes()),
        "count":cnt
    }
    resp.end(JSON.stringify(response));
});

router.get("/receive/:localCount", (req, res) => {
    if(cnt > Number(req.params.localCount)) {
        var date = new Date();
        var response = {
            "dateStr":date.getFullYear()+"-"
        +(date.getMonth()+1)+"-"+(date.getDate())+" "+(date.getHours())+":"
        +(date.getMinutes()),
            "count":cnt
        }
        res.end(JSON.stringify(response));
    } else {
        res.end("");
    }
});

module.exports = router;
