###
# Test array loop callback
###

console.log 'Test is Starting...'

dataArray = ['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d']

console.log "#{dataArray}"

mainf = ->
	for vElement in dataArray
		console.log vElement
	
mainf()

console.log 'Reached End of Program.'