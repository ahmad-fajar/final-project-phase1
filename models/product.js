'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          //Product.belongsTo(models.Order, {foreignKey: 'OrderId'})
          Product.belongsToMany(models.Order, { through: models.Order_Product, foreignKey: 'OrderId' });
      }
    }
  });
  return Product;
};

// PRODUCT terbaik bulan ini..
// listByMonth() {
//     db.serialize(function() {
//       let query = `SELECT * FROM Order WHERE strftime('%m', datebeli) = strftime('%m', date('now'))`
//       db.all(query, (err,rows) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(rows);
//         }
//       })
//     })
//     return 'List product of month:'
//   }
