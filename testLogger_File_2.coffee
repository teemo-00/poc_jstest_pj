###
 * New coffeescript file
###

fs = require('fs');

logger = require('tracer').console 
	transport : (data) -> 
    console.log data.output
    fs.open './testlogger_file_2.log', 'a', '0666', (e, id) -> 
        fs.write id, data.output+"\n", null, 'utf8', -> 
            fs.close id, -> 
            
logger.log 'Test Log Message'            