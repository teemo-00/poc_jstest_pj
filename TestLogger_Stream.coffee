###
 * New coffeescript file
###
fs = require 'fs'

logger = require('tracer').colorConsole
	transport : (data) ->
		console.log(data.output);
		stream = fs.createWriteStream "./TestLogger_Stream.log", {flags: "a", encoding: "utf8", mode: '0666'}
		.write data.output+"\n"

logger.debug 'Testing Logger'