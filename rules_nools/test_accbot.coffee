###
# Testing account bot rules
###

nools = require "nools"
ruleFilePath = __dirname + "/accbot_rules.nools"

flow = nools.compile ruleFilePath
BankTransact = flow.getDefined 'BankTransact'

console.log 'Rules executed @ ' + ruleFilePath

session = flow.getSession()

session.assert new BankTransact("coles express")

session.on "fire", (name, rule) ->
  console.log "Rule Fired: " + name + " >> Rule= " + rule

session.match (err) ->
	if err
		console.error err.stack
	else
		tarry = session.getFacts()
		console.log tarry
		console.log 'Category='+session.category
		console.log 'Bla='+session.bla
		console.log "done"
.then ->
	runSecond()

runSecond =->
	session = flow.getSession()
	session.assert new BankTransact("coles express")

	session.on "fire", (name, rule) ->
    	console.log "Rule2 Fired: " + name + " >> Rule= " + rule 

    console.log 'Going to Match'
    session.match (err2) ->
    	match2Result(err2)
    	

match2Result = (err2) ->
	#console.log 'Match2'
    #console.log err
    #tarry = session.getFacts()
    #console.log tarry
	if err2
		console.error err.stack
	else
		console.log 'Facts2:'
		tarry = session.getFacts()
		console.log tarry
		console.log 'Category='+session.category
		console.log 'Bla='+session.bla
		console.log 'done 2'	

	console.log 'done 3'