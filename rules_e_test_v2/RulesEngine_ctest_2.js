// Generated by CoffeeScript 1.9.2

/*
 * Rules Engine Test with Coffeescript
 */

(function() {
  var RE, RuleEngine, fs, registerRulesAndExec;

  fs = require('fs');

  RuleEngine = require('node-rules');

  RE = new RuleEngine;

  fs.readFile('rulesengine_rules.json', 'utf8', function(err, data) {
    console.log(data);
    return registerRulesAndExec(data);
  });

  registerRulesAndExec = function(pRules) {
    var fact;
    console.log('----------');
    console.log(pRules);
    RE.register(pRules);
    fact = {
      "name": "user4",
      "application": "MOB2",
      "transactionTotal": 600,
      "cardType": "Credit Card"
    };
    return RE.execute(fact, function(CBResult) {
      if (CBResult.result) {
        return console.log("Valid transaction");
      } else {
        return console.log("Blocked Reason:" + CBResult.reason);
      }
    });
  };

}).call(this);