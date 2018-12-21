/*
 DATA MODEL FILE for Banks;
 */

/* orig 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Banks', {
    identifier: DataTypes.INTEGER,
    bankName: DataTypes.STRING(50),
    description: DataTypes.TEXT
    });
};

*/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Banks', {
    identifier: {
    	type: DataTypes.INTEGER,
    	primaryKey: true,
    	autoIncrement: true
    },
    bankName: {
    	type: DataTypes.STRING(50),
    	unique: 'bankNameIdx',
    	allowNull: false
    },
    description: {
    	type: DataTypes.TEXT,
    	allowNull: false
    }
  })
};
