var express = require('express');
var router = express.Router();

router.get("/",function(req, res, next){
  res.render("ordernew" , { title: 'ini index' });
});

//http://localhost:3000/ordernew/

module.exports = router;
