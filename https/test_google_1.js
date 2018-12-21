var https = require('https');

var options = {
  hostname: 'www.google.com',
  port: 443,
  path: '/acs/servlet/acs',
  method: 'GET',
  secureProtocol: 'TLSv1_method'
};

var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});