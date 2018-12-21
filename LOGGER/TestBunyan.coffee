###
 * New coffeescript file
###

bunyan = require 'bunyan'

myData =
    name: "myapp"
    streams: [
    	type: 'rotating-file'
    	path: 'C:\\Temp\\rv_prog\\nodejs_dev\\endine\\JSTests\\LOGGER\\test_logger.log'
    	period: '1d'
    	]
   			
log = bunyan.createLogger myData

log.info "hi"

###
log = bunyan.createLogger 
	name: "myapp"
 	streams: [	
 	    type: 'rotating-file'
	   	path: 'C:\\Temp\\rv_prog\\nodejs_dev\\endine\\JSTests\\LOGGER\\test_logger.log'
	   	period: '1d'
	   	count: 3
	   	]

log.info "hi"
###