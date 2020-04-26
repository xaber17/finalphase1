'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Menu extends Model { }
  Menu.init({
    name: {                     
      type: Sequelize.STRING,
      validate : {
        notEmpty : {
          msg : `Please do not leave an empty data`
        }
      }
    },
    price: {                     
      type: Sequelize.STRING,
      validate : {
        notEmpty : {
          msg : `Please do not leave an empty data`
        }
      }
    }
  }, { sequelize });
  
  Menu.associate = function(models) {
    Menu.belongsToMany(models.Customer, { through: models.Order })
    // associations can be defined here
  };
  return Menu;
};