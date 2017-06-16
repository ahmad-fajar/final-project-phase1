'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order_Product = sequelize.define('Order_Product', {
    OrderId: DataTypes.INTEGER,
    ProdID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Order_Product.belongsTo(models.Order, {
          foreignKey: "OrderId"
        }),
          Order_Product.belongsTo(models.Product, {
            foreignKey: "ProductId"
      }
    }
  });
  return Order_Product;
};
