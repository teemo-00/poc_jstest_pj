/*
 Testing of the queue package
*/

var queue = require('queue-async');

var q = queue(1);
var tasks = [];

function printSomething(counter) {
  console.log('Counter:');
}

function simpleTask(pCount, callback) {
  console.log('Execute simpleTask#'+pCount);
  ///setTimeout(function() {
    callback(null, {answer: pCount});
  //}, 250);
}

var task = simpleTask;
tasks.push(task); 
tasks.push(task); 
q.defer(simpleTask, 1);
q.defer(simpleTask, 2);
q.awaitAll(function(error, results) { console.log("all done!"); });


/*
r tasks = [], task = asynchronousTask(), n = 10, q = queue(1); 
      while (--n >= 0) tasks.push(task); 
      tasks.forEach(function(t) { q.defer(t); }); 
      q.awaitAll(this.callback) 


function asynchronousTask(counter) { 

  var active = 0; 

  if (!counter) counter = {scheduled: 0}; 
  return function(callback) { 
    var index = counter.scheduled++; 
    ++active; 
    process.nextTick(function() { 
      try { 

        callback(null, {active: active, index: index}); 
      } finally { 
        --active; 
      } 
    }); 
  }; 
} 
*/