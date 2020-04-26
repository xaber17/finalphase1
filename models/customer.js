'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Customer extends Model { }

  Customer.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING
  }, { sequelize });
  
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsToMany(models.Menu, {through: models.Order})
  };

  return Customer;
};