###
# Rules Engine Test with Coffeescript
###

fs = require 'fs'
RuleEngine = require 'node-rules'
RE = new RuleEngine

## Read Rules from File
fs.readFile 'rulesengine_rules.json', 'utf8', (err,data) ->
    #console.log data
    registerRulesAndExec data


registerRulesAndExec = (pRules) ->
    ## Register the Rule with the Rules Engine
    
    rule = 
        "condition": (R) -> 
            R.when this.transactionTotal < 500,
        "consequence": (R) -> 
            this.result = false;
            this.reason = "The transaction was blocked as it was less than 500";
            R.stop();

    RE = new RuleEngine rule
    #console.log store

    ## Define the raw data
    fact = {
        "name": "user4",
        "application": "MOB2",
        "transactionTotal": 400,
        "cardType": "Credit Card"
    }

    ## Execute the rules
    RE.execute fact, (CBResult) -> 
        if (CBResult.result)
            console.log "Valid transaction"
        else 
            console.log "Blocked Reason:" + CBResult.reason

    rvstore = RE.toJSON()
    console.log rvstore