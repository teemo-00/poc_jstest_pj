/**
 * http://usejsdoc.org/
 */


var regexp = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);

var test_string1 = 'addddd.b@cccc.com';

var matches = test_string1.match(regexp);

console.log('Email Test 1');
if (!matches) console.log('No Email Matches Found');

console.log('-------------------------');

var test_string2 = 'prviviers@hotmail.com';

var matches = test_string2.match(regexp);

if (!matches) console.log('No Email Matches Found')
else { 
	console.log('Test 1 - # of matches: ' + matches.length);
	console.log('Matches Array:'); console.log(matches);
}