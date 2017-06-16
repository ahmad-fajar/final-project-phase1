var express = require('express');
var router = express.Router();
// const db = require('../models')

router.get("/",function(req, res, next){
  res.render("orderold" , { title: 'ini index' });
});

//http://localhost:3000/ordernew/


// router.post('/add', (req, res) => {
//   let data = req.body
//   db.Order.create({
//     prod1 : data.prod1,
//     prod2 : data.prod2,
//     prod3 : data.prod3,
//     prod4 : data.prod4
//   })
//   .then(db.User.create({
//     userId : data.name
//   }))
//   .then(() => {
//     res.redirect('./routes/thanks')
//   })
//   .catch(err => {
//     console.log(err);
//   })
// })



module.exports = router;
