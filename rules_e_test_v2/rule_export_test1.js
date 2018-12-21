// Generated by CoffeeScript 1.9.2
(function() {
  var R1, RuleEngine, fs, rules, store, vdir, vfilename;

  RuleEngine = require('node-rules');

  fs = require('fs');

  rules = {
    "condition": function(R) {
      return R.when(1);
    },
    "consequence": function(R) {
      return R.stop;
    },
    "on": true
  };

  R1 = new RuleEngine(rules);

  store = R1.toJSON();

  console.log(store);

  console.log('Write to File');

  vdir = __dirname;

  vfilename = vdir + 'rulesengine_rules.rules';

  fs.writeFile(vfilename, 'test text', 'utf8', function(err) {
    if (err) {
      throw err;
    }
    return console.log('Rules saved to File');
  });

}).call(this);
