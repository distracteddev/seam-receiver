// A master tinyhook server for testing purposes
var Hook = require('tinyhook').Hook;

var options = {
  port: 1050,
  host: 'distracteddev.com'
};

var master = new Hook(options);

master.listen(function(err) {
  if (err) {
    throw err;
  }
});

delay = setTimeout(function() {
  for (var func in exports) {
    console.log(func);
  }
}, 1000);


exports.simulateDeploy = function () {
  var notif = {};
  notif.name = 'Soapbox';
  notif.type = 'deploy/pass';
  notif.message  = 'Soapbox Successfully Deployed';
  notif.url      = 'zeus.ly';
  master.emit('notification', notif);
};

exports.simulateDeployFailure = function () {
  var notif = {};
  notif.name = 'Soapbox';
  notif.type = 'deploy/fail';
  notif.message  = 'Soapbox Failed to Deploy';
  master.emit('notification', notif);
};

exports.simulateAppError = function () {
  var notif = {};
  notif.name = 'Soapbox';
  notif.type = 'deploy/fail';
  notif.message  = 'Error: TypeError Blah Blah Blah';
  master.emit('notification', notif);
};

exports.simulateInfo = function () {
  var notif = {};
  notif.name = 'Soapbox';
  notif.type = 'deploy/fail';
  notif.message  = 'Soapbox Failed to Deploy';
  master.emit('notification', notif);
};

exports.simulateTestsPassed = function () {

};

exports.simulateTestsFailed = function () {


};
