###
 * New coffeescript file
###

Sequelize = require 'sequelize'

sequelize = new Sequelize 'mysql://budget:manager10@localhost:3306/budgetbuddy'

vDirName = __dirname;
Banks = sequelize.import "#{vDirName}\\AccBotModel_Banks"

Banks.count().success (c) ->
	  console.log "There are #{c} banks!"