/**
 * http://usejsdoc.org/
 */

var cp = require('child_process');

	//var ls = cp.spawn('rvshell.bat', ["notepad++.exe"]);
var ls = cp.spawn('rvshell.bat');
	 
		
		ls.stdout.on('data', function (data) {
			  console.log('stdout: ' + data);
			});
			
			ls.stderr.on('data', function (data) {
			  console.log('stderr: ' + data);
			});
			
			ls.on('close', function (code) {
			  console.log('child process exited with code ' + code);
			});