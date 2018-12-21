###
# Rules Engine Test with Coffeescript
###

RuleEngine = require 'node-rules'
RE = new RuleEngine

## Define the rules we need
rule = {
    "condition": (R) -> 
        R.when this.transactionTotal < 500,
    "consequence": (R) -> 
        this.result = false;
        this.reason = "The transaction was blocked as it was less than 500";
        R.stop();
}

## Register the Rule with the Rules Engine
RE.register rule

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


