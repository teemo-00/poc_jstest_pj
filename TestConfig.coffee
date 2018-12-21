###
 * New coffeescript file
###

config = require 'config'

dbConfig = config.get 'JS_DB_CONN.dbConfig'

console.log dbConfig.host
