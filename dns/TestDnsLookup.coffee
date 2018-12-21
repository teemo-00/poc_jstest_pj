dns = require 'dns'
g_counter = 1
items = [ ]
results = []

console.log 'Test FXA DNS'


my_resolve = (p_counter) ->
	dns.resolve4 'sftp-uat.fxgschqservices.com.au', (err, addresses) ->
		if err 
			throw err

		console.log "Attempt #{p_counter} - addresses: " + JSON.stringify addresses

		addresses.forEach (a) ->
			dns.reverse a, (err, domains) ->
				if err
					throw err;

				console.log "reverse for #{a} : " + JSON.stringify domains



for i in [1..15] by 1
	items[i] = i






	#setTimeout my_resolve(i), 100+(i*2000)


###
	addresses.forEach (a) ->
		dns.reverse a, (err, domains) {
if (err) {
throw err;
}

console.log('reverse for ' + a + ': ' + JSON.stringify(domains));
});
});
});

###