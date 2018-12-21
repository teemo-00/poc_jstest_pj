/**
 * New node file
 */

var moment = require('moment');

var d = new Date ("30/04/2015");
console.log(d);

d = new Date ("30/4/2015");
console.log(d);

d = new Date ();
//("30-4-2015");
console.log(d);

d = new Date ("2015/04/30");
console.log(d);

d = moment ("30/04/2015", 'DD-MM-YYYY');
console.log("Moment:" + d);
d = d.toDate();
console.log("JS Date: " + d);


d = moment ("1/04/2015", 'D-MM-YYYY');
console.log("Moment2:" + d);
d = d.toDate();
console.log("JS Date2: " + d);


d = moment ('12/01/2015', 'D-MM-YYYY');
d = d.toDate();
console.log(d);

console.log('==================================');
console.log('Display moment formatting:');

d = moment ('12/01/2015', 'D-MM-YYYY');
console.log('Moment Disp 1');
console.log (d.format());


console.log('Moment Disp 2');
console.log(d.format('dddd, MMMM Do YYYY, h:mm:ss a'));

console.log('Moment Disp 2');
console.log(d.format('DD-MM-YYYY'));

console.log('==================================');
console.log('Format Req: Sun Dec 08 2013 11:46:42 GMT+0100 (CET)');

vDate = d.format('ddd MMM DD YYYY HH:mm:ss ZZ');
console.log(vDate);

console.log('==================================');
console.log('With Timzone');

d.utcOffset(10);
vDate = d.format('ddd MMM DD YYYY HH:mm:ss ZZ');
console.log(vDate);

console.log('ISO String');
console.log(d.toISOString());

console.log('JS UTC Date:');
var dateObj = new Date();
console.log(dateObj.getUTCDate( ));

console.log('ISO Date');
console.log(dateObj.toISOString( ));
// YYYY-MM-DDTHH:mm:ss.sssZ JS Format

console.log('===============================')

console.log('Get Time Zones for moment:');
console.log(moment().format('Z'));