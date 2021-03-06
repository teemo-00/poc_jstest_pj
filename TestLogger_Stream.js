// Generated by CoffeeScript 1.9.2

/*
 * New coffeescript file
 */

(function() {
  var fs, logger;

  fs = require('fs');

  logger = require('tracer').colorConsole({
    transport: function(data) {
      var stream;
      console.log(data.output);
      return stream = fs.createWriteStream("./TestLogger_Stream.log", {
        flags: "a",
        encoding: "utf8",
        mode: '0666'
      }).write(data.output + "\n");
    }
  });

  logger.debug('Testing Logger');

}).call(this);
