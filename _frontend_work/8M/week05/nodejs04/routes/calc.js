const express = require('express');
const router = express.Router();
var http = require('http');

router.get('/calc/plus/:a/:b', (req, res) => {
  res.end(String(Number(req.params.a) + parseInt(req.params.b)));
});

router.get('/calc/minus/:a/:b', (req, res) => {
  res.end(String(Number(req.params.a) - parseInt(req.params.b)));

});

router.get('/calc/multi/:a/:b', (req, res) => {
  res.end(String(Number(req.params.a) * parseInt(req.params.b)));

});

router.get('/calc/div/:a/:b', (req, res) => {
  res.end(String(Number(req.params.a) / parseInt(req.params.b)));

});
http.createServer(router).listen(8080);


module.exports = router;