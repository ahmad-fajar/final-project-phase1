'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    ProdId: DataTypes.INTEGER,
    UserID: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      //  Order.hasMany(models.Product, {foreignKey: 'OrderId'})
          Order.belongsToMany(models.Product, { through: models.Order_Product, foreignKey: 'ProductId' });
      }
    }
  });
  return Order;
};
