//console.log(process.argv);
//process.argv.push(2000);
//process.argv.push('localhost');
var notifier = require('node-osx-notifier');
var Hook = require('tinyhook').Hook;

var options = {
  port: 1050,
  host: process.env.TH_HOST || 'distracteddev.com'
};

var listener = new Hook(options);


listener.connect(function(err) {
  if (err) {
    console.error(err);
  }
});


require('./listeners')(listener);
