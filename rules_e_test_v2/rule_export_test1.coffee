RuleEngine = require 'node-rules'
fs = require 'fs'

rules = 
  "condition": (R) -> 
      R.when this.transactionTotal < 500,
  "consequence": (R) -> 
      this.result = false;
      this.reason = "The transaction was blocked as it was less than 500";
      R.stop();


R1 = new RuleEngine(rules)
store = R1.toJSON()

console.log "Type of:"
console.log typeof store

console.log store
console.log '>>> Write to File:'

vdir = __dirname
vfilename = vdir + '/rulesengine_rules.rules'
console.log vfilename

###fs.writeFile vfilename, store, 'utf8', (err) ->
	if err then throw err
	console.log 'Rules saved to File'
###

vText = store.toJSON()
console.log vText

###
file = fs.createWriteStream vfilename
file.on 'error', (err) ->
   console.log err
store.forEach (v) ->
	file.write v+',\n'
file.end();
###

R2 = new RuleEngine()
#R2.fromJSON(store)
#Now restore from file

###
fs.readFile vfilename, 'utf8', (err,data) ->
	R2.fromJSON data
	fact = {
	    "name": "user4",
	    "application": "MOB2",
	    "transactionTotal": 400,
	    "cardType": "Credit Card"
	}

	## Execute the rules
	R2.execute fact, (CBResult) -> 
	  if (CBResult.result)
	      console.log "Valid transaction"
	  else 
	      console.log "Blocked Reason:" + CBResult.reason
###	      