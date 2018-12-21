nools = require "nools"
ruleFilePath = __dirname + "/test_rules.nools"

flow = nools.compile ruleFilePath
MessageTest = flow.getDefined 'message'

console.log 'Rules executed @ ' + ruleFilePath
console.log MessageTest

session = flow.getSession()

session.assert new MessageTest("hello")
session.assert new MessageTest("hello world")
session.assert new MessageTest("goodbye")
session.assert new MessageTest("dddddddd")

vText = 'EFTPOS ALDI 25            \\\\FOUNTAIN GATE     AU'
session.assert new MessageTest vText

session.on "fire", (name, rule) ->
  console.log "Rule Fired: " + name

session.match (err) ->
	if err
		console.error err.stack
	else
		console.log session.category
		console.log "done"