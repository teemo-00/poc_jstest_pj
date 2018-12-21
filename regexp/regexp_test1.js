/**
 * http://usejsdoc.org/
 */


var testText = 'EFTPOS ALDI 25            \\FOUNTAIN GATE     AU';

var rePattern = new RegExp(/ALDI/);
var arrMatches = testText.match(rePattern);

console.log("Valid Match Array:");
console.log(arrMatches);
console.log("Valid Match String 1:" + arrMatches.toString());
console.log("Valid Matching String 2" + arrMatches[0]);


console.log('-----------------------');
// Test no match found
var rePattern = new RegExp(/ALDddddI/);
var arrMatches = testText.match(rePattern);

console.log("No Match Array:");
console.log(arrMatches);

if (!arrMatches) console.log('No matches found!!!');

console.log('Match Array Length:' + arrMatches.length);
console.log("No Match String 1:" + arrMatches.toString());
console.log("No Matching String 2" + arrMatches[0]);


