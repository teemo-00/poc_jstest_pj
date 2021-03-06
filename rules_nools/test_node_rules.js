// Generated by CoffeeScript 1.9.2
(function() {
  var Message, flow, nools, ruleFilePath, session;

  nools = require("nools");

  ruleFilePath = __dirname + "/test_rules.nools";

  flow = nools.compile(ruleFilePath);

  Message = flow.getDefined('message');

  console.log('Rules executed @ ' + ruleFilePath);

  console.log(Message);

  session = flow.getSession();

  session.assert(new Message("hello"));

  session.assert(new Message("hello world"));

  session.assert(new Message("goodbye"));

  session.match(function(err) {
    if (err) {
      return console.error(err.stack);
    } else {
      return console.log("done");
    }
  });

}).call(this);
