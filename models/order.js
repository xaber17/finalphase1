'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Order extends Model { 
    caps(){ 
      return `${this.notes.toUpperCase()}`
    }
  }
  
  Order.init({
    CustomerId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, { sequelize });

  Order.addHook('beforeCreate', (instance, options) => { //by addHook
    if(!instance.notes) {instance.notes = '-'}
  })
 
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};